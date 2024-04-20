import style from "../css/component/Default Hover.module.css"

export default function (year) {

    return <a href={`/${year.year}`} className={style.grid}>
        <div className={style.line}/>
        <div className={style.hover + ' ' + style.active}>
            <div className={style.year}>{year.year}</div>
            <div className={style.big + ' ' + style.line}></div>
        </div>
        <div className={style.line}/>
    </a>
}

