import { useCallback, useContext } from "react";
import { flushSync } from "react-dom";
import { globalContext } from "./context.jsx";
import Active from "./active.jsx";
import DefaultHover from "./default Hover.jsx";

export default function YearComponent({ year }) {
  const { changeContext, setChangeContext } = useContext(globalContext);

  const handleClick = useCallback(() => {
    const updateContext = () => {
      setChangeContext((prevContext) => {
        const newMap = new Map(prevContext);
        newMap.forEach((value, key) => {
          newMap.set(key, key === year ? !value : false);
        });
        return newMap;
      });
    };

    "startViewTransition" in document
      ? document.startViewTransition(() => flushSync(updateContext))
      : updateContext();
  }, []);

  const isActive = changeContext.get(year);

  return (
    <div>
      {isActive ? (
        <Active year={year} />
      ) : (
        <div onClick={handleClick}>
          <DefaultHover year={year} />
        </div>
      )}
    </div>
  );
}
