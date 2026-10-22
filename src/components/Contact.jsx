import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Copy, Mail, Send } from "lucide-react";
import { profile } from "../data/profile.js";
import {
  validateContact,
  sendContactMessage,
  contactErrorMessage,
} from "../lib/contact.js";
import ResultDialog from "./ResultDialog.jsx";
import TechIcon from "./TechIcon.jsx";
const empty = { name: "", email: "", subject: "", message: "", company: "" };
export default function Contact() {
  const [values, setValues] = useState(empty);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState("");
  const [result, setResult] = useState(null);
  const request = useRef(null);
  const inFlight = useRef(false);
  useEffect(() => () => request.current?.abort(), []);
  const change = (e) =>
    setValues((current) => ({ ...current, [e.target.name]: e.target.value }));
  async function submit(event) {
    event.preventDefault();
    if (inFlight.current) return;
    const error = validateContact(values);
    if (error) {
      if (error !== "spam") setStatus(error);
      return;
    }
    inFlight.current = true;
    setSending(true);
    setStatus("Enviando tu mensaje…");
    const controller = new AbortController();
    request.current = controller;
    const timeout = setTimeout(() => controller.abort(), 60000);
    const slowNotice = setTimeout(
      () => setStatus("El servicio de correo está tardando. Seguimos esperando la confirmación; no vuelvas a enviar el formulario."),
      12000,
    );
    try {
      await sendContactMessage(values, {
        signal: controller.signal,
        url: window.location.href,
      });
      setValues(empty);
      setStatus("Mensaje enviado correctamente.");
      setResult({
        success: true,
        description:
          "Gracias por escribirme. Tu formulario se envió correctamente. Te responderé a la dirección de correo que indicaste.",
      });
    } catch (error) {
      setStatus("El envío no se confirmó. Tus datos siguen en el formulario.");
      setResult({ success: false, description: contactErrorMessage(error) });
    } finally {
      clearTimeout(timeout);
      clearTimeout(slowNotice);
      inFlight.current = false;
      setSending(false);
    }
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied("Correo copiado.");
    } catch {
      setCopied(profile.email);
    }
  }
  return (
    <section className="contact" id="contacto">
      <div className="chapter">
        <span>06 / CONTACTO</span>
        <span>PROYECTOS · COLABORACIONES · OPORTUNIDADES</span>
      </div>
      <div className="contact-layout">
        <div className="contact-intro reveal">
          <span className="small-label">¿TIENES UN PROYECTO EN MENTE?</span>
          <h2>
            HABLEMOS
            <br />
            DE TU
            <br />
            <span>PROYECTO.</span>
          </h2>
          <p>
            Cuéntame qué necesitas: software, una interfaz o una experiencia
            interactiva. Escríbeme por correo o conoce más de mi trabajo en
            LinkedIn y GitHub.
          </p>
          <div className="direct-links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={20} />
              <span>CORREO</span>
              <strong>{profile.email}</strong>
              <b>
                <ArrowUpRight />
              </b>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.37 24H.4V7.98h4.97V24ZM2.88 5.79A2.88 2.88 0 1 1 2.9.03a2.88 2.88 0 0 1-.02 5.76ZM24 24h-4.96v-7.8c0-1.86-.04-4.25-2.59-4.25-2.59 0-2.99 2.03-2.99 4.12V24H8.5V7.98h4.76v2.18h.07a5.22 5.22 0 0 1 4.7-2.58c5.03 0 5.97 3.31 5.97 7.61V24Z" />
              </svg>
              <span>LINKEDIN</span>
              <strong>Guillermo Pereyra</strong>
              <b>
                <ArrowUpRight />
              </b>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <TechIcon name="GitHub" />
              <span>GITHUB</span>
              <strong>@gpereyradev</strong>
              <b>
                <ArrowUpRight />
              </b>
            </a>
          </div>
          <button className="copy-email" onClick={copy}>
            COPIAR CORREO <Copy size={14} />
          </button>
          <span className="copy-status" role="status">
            {copied}
          </span>
          <p className="contact-privacy">
            Los datos del formulario se utilizan para responder a tu consulta.
          </p>
        </div>
        <div className="contact-form-panel reveal">
          <div className="contact-form-top">
            <span className="inline-icon">
              <Mail size={15} /> ENVIAR UN CORREO
            </span>
            <ArrowUpRight size={23} />
          </div>
          <h3>Cuéntame tu idea.</h3>
          <form
            id="contact-form"
            action={`https://formsubmit.co/${profile.email}`}
            method="POST"
            onSubmit={submit}
            aria-busy={sending}
          >
            <fieldset disabled={sending}>
              <div className="form-honeypot" aria-hidden="true">
                <label htmlFor="contact-company">Dejar vacío</label>
                <input
                  id="contact-company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.company}
                  onChange={change}
                />
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="contact-name">Tu nombre</label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="Nombre y apellido"
                    value={values.name}
                    onChange={change}
                  />
                </div>
                <div className="field">
                  <label htmlFor="contact-email">Tu correo</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="tu@correo.com"
                    value={values.email}
                    onChange={change}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="contact-subject">¿En qué puedo ayudarte?</label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  value={values.subject}
                  onChange={change}
                >
                  <option value="">Selecciona una opción</option>
                  {[
                    "Desarrollo de software",
                    "Diseño UX/UI",
                    "Videojuegos / experiencia interactiva",
                    "Oportunidad laboral",
                    "Otro proyecto",
                  ].map((subject) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="contact-message">Tu mensaje</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  maxLength={3000}
                  placeholder="Objetivo, alcance, fechas o lo que te gustaría conversar…"
                  value={values.message}
                  onChange={change}
                />
              </div>
              <button
                className="button lime-button contact-submit"
                id="contact-send"
                type="submit"
              >
                {sending ? "ENVIANDO" : "ENVIAR MENSAJE"}
                {sending ? (
                  <span className="send-spinner" aria-hidden="true" />
                ) : (
                  <Send size={19} />
                )}
              </button>
            </fieldset>
            <p className="form-explanation">
              Recibiré tu mensaje por correo y responderé a la dirección que
              indiques.
            </p>
            <p id="contact-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </div>
      <ResultDialog result={result} onClose={() => setResult(null)} />
    </section>
  );
}
