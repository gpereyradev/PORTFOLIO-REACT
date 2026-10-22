import { profile } from "../data/profile.js";

export function validateContact(values) {
  if (values.company?.trim()) return "spam";
  if (values.name.trim().length < 2)
    return "Indica tu nombre (al menos 2 caracteres).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    return "Revisa tu dirección de correo.";
  if (!values.subject.trim()) return "Selecciona el motivo de tu mensaje.";
  if (values.message.trim().length < 10)
    return "Escribe un mensaje de al menos 10 caracteres.";
  return null;
}

export async function sendContactMessage(
  values,
  { fetcher = fetch, signal, url = "" } = {},
) {
  const response = await fetcher(
    `https://formsubmit.co/ajax/${profile.email}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      signal,
      body: JSON.stringify({
        name: values.name.trim(),
        email: values.email.trim(),
        asunto: values.subject.trim(),
        message: values.message.trim(),
        _subject: `Portfolio · ${values.subject.trim()}`,
        _replyto: values.email.trim(),
        _template: "table",
        _captcha: "false",
        _url: url.split("#")[0],
      }),
    },
  );
  const data = await response.json();
  const needsActivation =
    /activat|confirm your|verify your|check your inbox/i.test(
      String(data?.message || ""),
    );
  if (
    !response.ok ||
    !(data?.success === true || data?.success === "true") ||
    needsActivation
  ) {
    const error = new Error("No se ha confirmado el envío.");
    error.needsActivation = needsActivation;
    throw error;
  }
  return data;
}

export function contactErrorMessage(error) {
  if (error.needsActivation)
    return `El formulario está pendiente de activación. Puedes escribirme directamente a ${profile.email}.`;
  if (error.name === "AbortError")
    return `La conexión tardó demasiado. Tu mensaje sigue en el formulario; inténtalo de nuevo o escríbeme a ${profile.email}.`;
  return `No pudimos confirmar el envío. Tu mensaje sigue en el formulario; vuelve a intentarlo o escríbeme a ${profile.email}.`;
}
