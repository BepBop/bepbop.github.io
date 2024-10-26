import React, { useMemo, useState } from "react";
import Wrapper from "../atoms/active Default Wrapper.jsx";
import { globalContext } from "../atoms/context.jsx";
import style from "../atoms/css/Container.module.css";

const list_of_years = ["2024", "2023", "2022"];
export const current_year = "2024";

export default function () {
  const default_context = useMemo(() => {
    // Create a new Map where each year is a key
    // The value is true if it's the current year, false otherwise
    return new Map(list_of_years.map((year) => [year, year === current_year]));
  }, []);

  const [changeContext, setChangeContext] = useState(default_context);

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
