"use client";

import { createContext, useContext, useState } from "react";

type SectionName = "home" | "about" | "projects" | "experience" | "contact";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionName>("home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
  }
  return context;
} 