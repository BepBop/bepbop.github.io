import React, { useState, useEffect } from "react";
import { globalContext } from "../atoms/context.jsx";
import Wrapper from "../atoms/active default hover.jsx";
import "../atoms/css/view-transition.css";

import styleDefault from "../atoms/css/Container.module.css";
import styleMobileFriendly from "../atoms/css/Container 2025.module.css";

/* Astro Navigation API */
import { navigate } from "astro:transitions/client";

const YEARS = ["2025", "2024", "2023", "2022"];
const getYearFromPath = (path) => YEARS.find((y) => path.includes(y)) ?? null;

function useIsMobile(breakpointPx = 767) {
  const query = `(max-width: ${breakpointPx}px)`;
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);

    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
}

export default function YearSelector() {
  const [selectedYear, setSelectedYear] = useState(() =>
    getYearFromPath(window.location.pathname)
  );

  const isMobile = useIsMobile(767);

  useEffect(() => {
    const updateYear = () => setSelectedYear(getYearFromPath(window.location.pathname));
    document.addEventListener("astro:page-load", updateYear);
    return () => document.removeEventListener("astro:page-load", updateYear);
  }, []);

  const handleYearClick = (year) => {
    if (year === selectedYear) return;
    document.startViewTransition(() => navigate(`/${year}`));
  };

  const useMobileFriendlyStyles =
    window.location.pathname.includes("/2025") || isMobile;

  const styles = useMobileFriendlyStyles ? styleMobileFriendly : styleDefault;

  return (
    <globalContext.Provider
      value={{ context: selectedYear, setContext: setSelectedYear }}
    >
      <div className={styles.container} style={{ viewTransitionName: "year-selector" }}>
        {YEARS.map((year) => {
          const isActive = year === selectedYear;
          const viewName = isActive ? `selected-year-${year}` : "none";

          return useMobileFriendlyStyles ? (
            <div
              key={year}
              className={isActive ? styles.active : styles.inactive}
              style={{ viewTransitionName: viewName }}
              onClick={() => handleYearClick(year)}
            >
              {year}
            </div>
          ) : (
            <div key={year} style={{ viewTransitionName: viewName }}>
              <Wrapper year={year} status={isActive} onClick={() => handleYearClick(year)} />
            </div>
          );
        })}
      </div>
    </globalContext.Provider>
  );
}
