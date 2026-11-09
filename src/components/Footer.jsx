import { useLocale } from "../i18n/LocaleContext.jsx";
export default function Footer() {
  const { t, language } = useLocale();
  return (
    <footer>
      <span>
        {"© "}
        <span id="year">{new Date().getFullYear()}</span>
        {" GUILLERMO PEREYRA"}
      </span>
      <span>{t("DESARROLLO DE SOFTWARE / UX/UI / GAME DEV")}</span>
      <a href="#inicio">{t("VOLVER AL INICIO ↑")}</a>
    </footer>
  );
}
