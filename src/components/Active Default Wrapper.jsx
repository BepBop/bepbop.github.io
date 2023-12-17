import {useContext, useRef} from "react";
import {globalContext} from "./Context.jsx"
import Active from "./Active.jsx";
import DefaultHover from "./Default Hover.jsx";


export default function ({year}) {

    // console.log(' I am wrapper and I am being rendered');
    /*console.log({year});*/

    const {changeContext, setChangeContext} = useContext(globalContext);
    const myDivRef = useRef(undefined);

    // const myDivRef2 = useRef(null);


    function onclick_function(e) {

        const new_update_map = new Map(changeContext);


        new_update_map.forEach((value, key) => (

            key === year ? new_update_map.set(key, !value) : new_update_map.set(key, false)
        ))

        setChangeContext(new_update_map);
        


        // animate(
        //     "#box",
        //     { scale: 2, opacity: 1 },
        //     { easing: spring() }
        // )

        // animate(
        //     ".papa",
        //     {y: calculate()},
        //     {duration: 0.5}
        // )

        // window.location.pathname = "/index2";

        // new_update_map.set(year, !new_update_map.get(year));
        // console.table(new_update_map);

        // console.table(new_update_map);


        // const windowHeight = window.innerHeight;
        // const center = windowHeight / 2;

        // let diff = -myDivRef.current.getBoundingClientRect().top + center;
        //
        // console.log(e.target.getBoundingClientRect().y);
        //
        // let diff = 500 - myDivRef.current.getBoundingClientRect().y;


        // Calculate the distance from the center of the screen
        // const distance = centerY - (divRect.top + divRect.height / 2);

        // console.log(centerY + " -- " + divRect.top)


        // const abc = document.getElementsByClassName('cancer')[1];
        // console.log(abc.getBoundingClientRect().top)


        // const centerY = window.innerHeight / 2;

        //
        // const height = document.querySelector('.papa').getBoundingClientRect().height;
        //
        // const full_length = window.innerHeight;
        //
        // const config_3= centerY - height; //3
        // const config_2= centerY - height + height/3; //2
        // const config_1= centerY - height - height/3 + height/3; //1


        // function calculate() {
        //
        //     if ((centerY - myDivRef.current.getBoundingClientRect().top + 35) > 0) {
        //         return centerY - myDivRef.current.getBoundingClientRect().top + 35;
        //     } else return myDivRef.current.getBoundingClientRect().top - centerY - 35;
        //
        // }

        // function calculate() {
        //
        //     function closestValueWithSign(input) {
        //
        //         const sign = Math.sign(input)
        //         input *= sign;
        //
        //         const values = [0, 18, 35, 55];
        //
        //         // Find the closest value
        //         const closestValue = values.reduce((closest, current) =>
        //             Math.abs(current - input) < Math.abs(closest - input) ? current : closest
        //         );
        //
        //         console.log(sign * closestValue, 'closest');
        //         // Return the closest value with the sign of the input
        //         return sign * closestValue;
        //     }
        //
        //
        //     console.log('centre:' + centerY + ' - ' + myDivRef.current.getBoundingClientRect().y + ' = ' + (centerY - myDivRef.current.getBoundingClientRect().y))
        //     return closestValueWithSign(centerY - myDivRef.current.getBoundingClientRect().y);
        //
        // }

        // function childposition() {
        //
        //     console.log(myDivRef.current === myDivRef.current.parentNode.childNodes[0])
        //     console.log(myDivRef.current === myDivRef.current.parentNode.childNodes[1])
        //     console.log(myDivRef.current === myDivRef.current.parentNode.childNodes[2])
        //     console.log(myDivRef.current.parentNode.childNodes[0])
        //     console.log(myDivRef.current)
        //
        //     if (myDivRef.current === myDivRef.current.parentNode.childNodes[0])
        //     return 35;
        //     else if (myDivRef.current === myDivRef.current.parentNode.childNodes[1])
        //         return
        //
        // }


        // function url_generator(year_text) {
        //
        //
        //     window.location.assign(`/${year_text}`);
        // }
        //
        //
        // url_generator(e.target.innerHTML)


        // function calculate() {
        //
        //     console.log('centre:' + centerY + ' - ' + myDivRef.current.getBoundingClientRect().y + ' = ' + (centerY - myDivRef.current.getBoundingClientRect().y))
        //     return (centerY - myDivRef.current.getBoundingClientRect().y);
        //
        // }


        // animate(".box", { x: 100 }, { duration: 1 })

        // console.log('from_top_to_div' + ' ' + myDivRef.current.getBoundingClientRect().top)
        // console.log('centre' + ' ' + centerY)


    }

    return (


        <>

            {!changeContext.get(year) ?

                <div onClick={onclick_function} ref={myDivRef}>
                    <DefaultHover year={year}/>
                </div>
                : <Active year={year}/>}

        </>


    )
}