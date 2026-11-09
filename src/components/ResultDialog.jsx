import { useLocale } from "../i18n/LocaleContext.jsx";
import { ArrowUpRight, Check, AlertCircle, X } from "lucide-react";
import { useDialog } from "../hooks/useDialog.js";
export default function ResultDialog({ result, onClose }) {
  const { t, language } = useLocale();
  const { ref, close, onBackdropClick } = useDialog(Boolean(result), onClose);
  return (
    <dialog
      ref={ref}
      className={`contact-result ${result && !result.success ? "is-error" : ""}`}
      id="contact-result"
      aria-labelledby="result-heading"
      aria-describedby="result-description"
      onClick={onBackdropClick}
    >
      <button
        className="result-close"
        onClick={close}
        aria-label={t("Cerrar confirmación")}
      >
        <X />
      </button>
      <div className="result-symbol" aria-hidden="true">
        {result?.success ? <Check size={58} /> : <AlertCircle size={58} />}
      </div>
      <span className="result-overline">
        {result?.success ? t("FORMULARIO RECIBIDO") : t("ENVÍO NO CONFIRMADO")}
      </span>
      <h2 id="result-heading">
        {result?.success ? t("MENSAJE") : t("NO SE PUDO")}
        <br />
        <span>{result?.success ? t("ENVIADO.") : t("ENVIAR.")}</span>
      </h2>
      <p id="result-description">{t(result?.description)}</p>
      <button className="button result-action" onClick={close}>
        {result?.success ? t("ENTENDIDO") : t("VOLVER AL FORMULARIO")}
        <ArrowUpRight size={22} />
      </button>
    </dialog>
  );
}
