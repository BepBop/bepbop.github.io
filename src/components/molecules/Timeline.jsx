import React, { useState, useEffect } from "react";
import { globalContext } from "../atoms/context.jsx";
import Wrapper from "../atoms/active default hover.jsx";
import "../atoms/css/view-transition.css";

import styleDefault from "../atoms/css/Container.module.css";
import style2025 from "../atoms/css/container 2025.module.css";

// Constants
const YEARS = ["2025", "2024", "2023", "2022"];
const DEFAULT_YEAR = "2024";

export default function YearSelector() {
  // Detect current path
  const [selectedYear, setSelectedYear] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_YEAR;
    const path = window.location.pathname;
    return YEARS.find((y) => path.includes(y)) || DEFAULT_YEAR;
  });

  // Sync year on Astro client-side navigation
  useEffect(() => {
    const updateYear = () => {
      const path = window.location.pathname;
      setSelectedYear(YEARS.find((y) => path.includes(y)) || DEFAULT_YEAR);
    };
    document.addEventListener("astro:page-load", updateYear);
    return () => document.removeEventListener("astro:page-load", updateYear);
  }, []);

  // Safe navigation handler
  const handleYearClick = async (year) => {
    if (year === selectedYear) return;

    // Define a safe navigate function
    const safeNavigate = async (target) => {
      if (window.Astro?.navigate) {
        await window.Astro.navigate(target);
      } else {
        window.location.href = target;
      }
    };

    // Use View Transition API if supported
    if (document.startViewTransition) {
      const transition = document.startViewTransition(async () => {
        setSelectedYear(year);
        await safeNavigate(`/${year}`);
      });
      await transition.finished;
    } else {
      // Fallback: simple navigation
      await safeNavigate(`/${year}`);
    }
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
