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

function useIsMobile(breakpointPx = 767) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(max-width: ${breakpointPx}px)`).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(`(max-width: ${breakpointPx}px)`);
    const onChange = (e) => setIsMobile(e.matches);

    // Support older Safari
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);

    setIsMobile(mql.matches);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, [breakpointPx]);

  return isMobile;
}

export default function YearSelector() {
  const [selectedYear, setSelectedYear] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_YEAR;
    const path = window.location.pathname;
    return YEARS.find((y) => path.includes(y)) || DEFAULT_YEAR;
  });

  const isMobile = useIsMobile(767);

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

  // Use 2025 styles for:
  // - any /2025 route (all screen sizes)
  // - all routes on screens <= 767px
  const use2025Styles = is2025 || isMobile;

  const containerClass = use2025Styles
    ? style2025.container
    : styleDefault.container;

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

          if (use2025Styles) {
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
