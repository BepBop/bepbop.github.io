import style from "./css/Active.module.css";

export default function ({ year }) {
  return (
    <div className={style.test}>
      <div className={style.selected + " " + style.active}>
        <div className={style.subheader}></div>
        <div className={style.year}>{year}</div>
      </div>

      <img src="/img/indicator.svg" alt="indicator" />
    </div>
  );
}
