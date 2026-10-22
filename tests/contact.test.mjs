import { test } from "node:test";
import assert from "node:assert/strict";
import {
  validateContact,
  sendContactMessage,
  contactErrorMessage,
} from "../src/lib/contact.js";
const values = {
  name: " Persona ",
  email: "persona@example.com",
  subject: "Diseño UX/UI",
  message: "Quiero conversar sobre un proyecto.",
  company: "",
};

test("validates trimmed inputs and silently rejects the honeypot", () => {
  assert.equal(validateContact(values), null);
  assert.match(validateContact({ ...values, name: "  " }), /nombre/);
  assert.match(validateContact({ ...values, email: "invalid" }), /correo/);
  assert.match(validateContact({ ...values, subject: "" }), /motivo/);
  assert.match(
    validateContact({ ...values, message: "  corto  " }),
    /10 caracteres/,
  );
  assert.equal(validateContact({ ...values, company: "spam" }), "spam");
});

test("posts email payload and accepts an explicit successful response", async () => {
  let request;
  const result = await sendContactMessage(values, {
    url: "https://example.com/#contacto",
    fetcher: async (url, options) => {
      request = { url, ...options };
      return {
        ok: true,
        json: async () => ({ success: "true", message: "Submitted" }),
      };
    },
  });
  assert.equal(result.success, "true");
  assert.equal(request.url, "https://formsubmit.co/ajax/gpereyradev@gmail.com");
  assert.equal(request.method, "POST");
  const payload = Object.fromEntries(request.body);
  assert.equal(payload.name, "Persona");
  assert.equal(payload._replyto, values.email);
  assert.equal(payload._url, "https://example.com/");
  assert.equal("phone" in payload, false);
});

test("uses a browser form request without JSON preflight and preserves special characters", async () => {
  const controller = new AbortController();
  const special = {
    ...values,
    name: " José & María ",
    email: "persona+portfolio@example.com",
    message: "Diseño UX/UI + React: ¿conversamos?\nPresupuesto = S/ 100 & más.",
  };
  await sendContactMessage(special, {
    signal: controller.signal,
    fetcher: async (url, options) => {
      const request = new Request(url, options);
      assert.equal(request.method, "POST");
      assert.equal(request.headers.get("Accept"), "application/json");
      assert.match(request.headers.get("Content-Type"), /^application\/x-www-form-urlencoded(?:;|$)/);
      assert.deepEqual([...request.headers.keys()].sort(), ["accept", "content-type"]);
      const body = new URLSearchParams(await request.text());
      assert.equal(body.get("name"), special.name.trim());
      assert.equal(body.get("email"), special.email);
      assert.equal(body.get("message"), special.message);
      controller.abort();
      assert.equal(request.signal.aborted, true);
      return { ok: true, json: async () => ({ success: true }) };
    },
  });
});

for (const [label, ok, data] of [
  ["HTTP error", false, { success: true }],
  ["provider rejection", true, { success: false }],
  ["missing confirmation", true, {}],
  [
    "activation pending",
    true,
    { success: "true", message: "Check your inbox to activate this form" },
  ],
])
  test(`does not report success on ${label}`, async () => {
    await assert.rejects(
      sendContactMessage(values, {
        fetcher: async () => ({ ok, json: async () => data }),
      }),
    );
  });

test("network and invalid responses propagate to the error UI", async () => {
  await assert.rejects(
    sendContactMessage(values, {
      fetcher: async () => {
        throw new TypeError("offline");
      },
    }),
  );
  await assert.rejects(
    sendContactMessage(values, {
      fetcher: async () => ({
        ok: true,
        json: async () => {
          throw new SyntaxError("invalid");
        },
      }),
    }),
  );
  assert.match(contactErrorMessage({ name: "AbortError" }), /tardó demasiado/);
  assert.match(contactErrorMessage({ needsActivation: true }), /activación/);
});
