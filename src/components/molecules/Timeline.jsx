import React, { useState, useEffect } from "react";
import { globalContext } from "../atoms/context.jsx";
import Wrapper from "../atoms/active default hover.jsx";
import "../atoms/css/view-transition.css";

import styleDefault from "../atoms/css/Container.module.css";
import style2025 from "../atoms/css/Container 2025.module.css";

/* Astro Navigation API */
import { navigate } from "astro:transitions/client";

const YEARS = ["2025", "2024", "2023", "2022"];
const DEFAULT_YEAR = "2024";

export default function YearSelector() {
  const [selectedYear, setSelectedYear] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_YEAR;
    const path = window.location.pathname;
    return YEARS.find((y) => path.includes(y)) || DEFAULT_YEAR;
  });

  // Sync state with Astro navigation
  useEffect(() => {
    const updateYear = () => {
      const path = window.location.pathname;
      setSelectedYear(YEARS.find((y) => path.includes(y)) || DEFAULT_YEAR);
    };
    document.addEventListener("astro:page-load", updateYear);
    return () => document.removeEventListener("astro:page-load", updateYear);
  }, []);

  // Core handler: lightweight, no manual state mutation
  const handleYearClick = (year) => {
    if (year === selectedYear) return;
    document.startViewTransition(() => navigate(`/${year}`));
  };

  const is2025 =
    typeof window !== "undefined" && window.location.pathname.includes("/2025");
  const containerClass = is2025 ? style2025.container : styleDefault.container;

  return (
    <globalContext.Provider
      value={{ context: selectedYear, setContext: setSelectedYear }}
    >
      <div
        className={containerClass}
        style={{ viewTransitionName: "year-selector" }}
      >
        {YEARS.map((year) => {
          const isActive = year === selectedYear;
          const viewName = isActive ? `selected-year-${year}` : "none";

          if (is2025) {
            return (
              <div
                key={year}
                className={isActive ? style2025.active : style2025.inactive}
                style={{ viewTransitionName: viewName }}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </div>
            );
          }

          return (
            <div key={year} style={{ viewTransitionName: viewName }}>
              <Wrapper
                year={year}
                status={isActive}
                onClick={() => handleYearClick(year)}
              />
            </div>
          );
        })}
      </div>
    </globalContext.Provider>
  );
}
