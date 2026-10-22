export default function Footer() {
  return (
    <footer>
      <span>
        {"© "}
        <span id="year">{new Date().getFullYear()}</span>
        {" GUILLERMO PEREYRA"}
      </span>
      <span>{"DESARROLLO DE SOFTWARE / UX/UI / GAME DEV"}</span>
      <a href="#inicio">{"VOLVER AL INICIO ↑"}</a>
    </footer>
  );
}
