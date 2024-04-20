import {StrictMode, useState} from "react";
import Wrapper from "../components/Active Default Wrapper.jsx"
import {globalContext} from "../components/Context.jsx"
import style from "../css/component/Container.module.css"


const list_of_years = ['2024', '2023', '2022'];
export const current_year = '2023';


const default_context = new Map();


list_of_years.forEach((element) => {

    element == current_year ? default_context.set(element, true) : default_context.set(element, false)
});


export default function () {

    const [changeContext, setChangeContext] = useState(default_context);

    return (
        <StrictMode>

            <globalContext.Provider value={{changeContext, setChangeContext}}>

                {
                    <div className={style.container}>


                        {
                            list_of_years.map((year) => (
                                <Wrapper year={year} key={crypto.randomUUID()}> </Wrapper>))
                        }


                    </div>

                }

            </globalContext.Provider>
        </StrictMode>
    )
}

