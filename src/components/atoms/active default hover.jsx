import style from "./css/Active Default Hover.module.css";

function Active({ year }) {
  return (
    <div className={style.test}>
      <div className={`${style.selected} ${style.active}`}>
        <div className={style.subheader}></div>
        <div className={style.year}>{year}</div>
      </div>
      <img src="/img/indicator.svg" alt="indicator" />
    </div>
  );
}

function DefaultHover({ year }) {
  return (
    <a href={`/${year}`} className={style.grid}>
      <div className={style.line} />
      <div className={`${style.hover} ${style.active}`}>
        <div className={style.year}>{year}</div>
        <div className={`${style.big} ${style.line}`} />
      </div>
      <div className={style.line} />
    </a>
  );
}

export default function YearComponent({ year, status, click }) {
  return status ? (
    <Active year={year} />
  ) : (
    <div onClick={click}>
      <DefaultHover year={year} />
    </div>
  );
}
