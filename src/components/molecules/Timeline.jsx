import React, { useEffect, useMemo, useState } from "react";
import Wrapper from "../atoms/active Default Wrapper.jsx";
import { globalContext } from "../atoms/context.jsx";
import style from "../atoms/css/Container.module.css";
import { flushSync } from "react-dom";

const list_of_years = ["2024", "2023", "2022"];
export const current_year = list_of_years[0];

export default function () {
  const default_context = useMemo(() => {
    // Create a new Map where each year is a key
    // The value is true if it's the current year, false otherwise
    return new Map(list_of_years.map((year) => [year, year === current_year]));
  }, []);

  console.log("Timeline.jsx");

  const [changeContext, setChangeContext] = useState(default_context);
  useEffect(() => {
    const handlePageLoad = () => {
      setChangeContext((prev) => {
        const newContext = new Map(prev);
        newContext.forEach((_, key) => {
          newContext.set(key, window.location.href.includes(key.toString()));
        });
        console.log(newContext);
        return newContext;
      });
    };

    // Enable view transitions if supported
    const updateWithTransition = (updateFn) => {
      if ("startViewTransition" in document) {
        document.startViewTransition(() => flushSync(updateFn));
      } else {
        updateFn();
      }
    };

    document.addEventListener("astro:page-load", handlePageLoad);

    return () => {
      document.removeEventListener("astro:page-load", handlePageLoad);
    };
  }, []);

  return (
    <globalContext.Provider value={{ changeContext, setChangeContext }}>
      <div className={style.container}>
        {list_of_years.map((year) => (
          <Wrapper year={year} key={year} />
        ))}
      </div>
    </globalContext.Provider>
  );
}
