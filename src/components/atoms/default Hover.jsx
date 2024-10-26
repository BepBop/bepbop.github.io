import style from "./css/Default Hover.module.css";
import { current_year } from "../molecules/Timeline.jsx";

export default function (year) {
  if (year.year == current_year) {
    return (
      <a href={`/`} className={style.grid}>
        <div className={style.line} />
        <div className={style.hover + " " + style.active}>
          <div className={style.year}>{year.year}</div>
          <div className={style.big + " " + style.line}></div>
        </div>
        <div className={style.line} />
      </a>
    );
  } else {
    return (
      <a href={`/${year.year}`} className={style.grid}>
        <div className={style.line} />
        <div className={style.hover + " " + style.active}>
          <div className={style.year}>{year.year}</div>
          <div className={style.big + " " + style.line}></div>
        </div>
        <div className={style.line} />
      </a>
    );
  }
}
