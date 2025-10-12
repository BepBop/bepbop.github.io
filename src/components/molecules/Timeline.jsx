import React, { useCallback, useEffect, useMemo, useState } from "react";
import style from "../atoms/css/Container.module.css";

import { globalContext } from "../atoms/context.jsx";
import Wrapper from "../atoms/active default hover.jsx";

const list_of_years = ["2025", "2024", "2023", "2022"];
export const current_year = "2024";

export default function () {
  const defaultContext = useMemo(
    () => new Map(list_of_years.map((year) => [year, year === current_year])),
    [list_of_years, current_year],
  );

  const [context, setContext] = useState(defaultContext);

  const updateContext = useCallback((identifier) => {
    setContext((prev) => {
      const newContext = new Map(prev);
      for (const [key] of newContext) {
        newContext.set(key, identifier === key);
      }
      return newContext;
    });
  }, []);

  const loadUpdateContext = useCallback(() => {
    setContext((prev) => {
      const newContext = new Map(prev);
      for (const [key] of newContext) {
        newContext.set(key, window.location.href.includes(key.toString()));
      }
      return newContext;
    });
  }, []);

  const handleTransition = useCallback((handler) => {
    document.startViewTransition(handler);
  }, []);

  const handleClick = useCallback((event) => {
    handleTransition(updateContext(event.target.innerText));
  }, []);

  useEffect(() => {
    const handleLoad = () => handleTransition(loadUpdateContext);
    document.addEventListener("astro:page-load", handleLoad);
    return () => document.removeEventListener("astro:page-load", handleLoad);
  }, []);

  const contextValue = useMemo(
    () => ({
      context,
      setContext,
    }),
    [context],
  );

  const yearEntries = useMemo(() => Array.from(context), [context]);

  return (
    <globalContext.Provider value={contextValue}>
      <div className={style.container}>
        {yearEntries.map(([year, value]) => (
          <Wrapper key={year} year={year} status={value} click={handleClick} />
        ))}
      </div>
    </globalContext.Provider>
  );
}
