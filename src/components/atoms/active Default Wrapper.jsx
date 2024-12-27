import { useContext } from "react";
import { globalContext } from "./context.jsx";
import Active from "./active.jsx";
import DefaultHover from "./default Hover.jsx";

export default function YearComponent({ year }) {
  const { changeContext, setChangeContext } = useContext(globalContext);

  const isActive = changeContext.get(year);

  return (
    <>
      {isActive ? (
        <Active year={year} />
      ) : (
        <>
          <DefaultHover year={year} />
        </>
      )}
    </>
  );
}
