import styleActive from "./css/Active.module.css";
import styleDefaultHover from "./css/Default Hover.module.css";

function Active({ year }) {
  return (
    <div className={styleActive.test}>
      <div className={`${styleActive.selected} ${styleActive.active}`}>
        <div className={styleActive.subheader}></div>
        <div className={styleActive.year}>{year}</div>
      </div>
      <img src="/img/indicator.svg" alt="indicator" />
    </div>
  );
}

function DefaultHover({ year }) {
  return (
    <a href={`/${year}`} className={styleDefaultHover.grid}>
      <div className={styleDefaultHover.line} />
      <div className={`${styleDefaultHover.hover} ${styleDefaultHover.active}`}>
        <div className={styleDefaultHover.year}>{year}</div>
        <div className={`${styleDefaultHover.big} ${styleDefaultHover.line}`} />
      </div>
      <div className={styleDefaultHover.line} />
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
