import style from "../css/component/Active.module.css"

export default function ({year}) {


    return (
        <div className={style.test}>
            <div className={style.selected + ' ' + style.active}>
                <div className={style.subheader}>Selected</div>
                <div className={style.year}>{year}</div>
            </div>

            <img src='/indicator.svg' alt='arrow'/>
        </div>
    )

}