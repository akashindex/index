import React, { ReactComponentElement, useState } from "react";
import "./Section.scss";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentSection } from "../layout/LayoutSlice";
import { Home } from "../../pages/home/Home";
import { Projects } from "../../pages/projects/Projects";
import { Contact } from "../../pages/contact/Contact";
  

export function Section() {
  const currentSelection = useAppSelector(selectCurrentSection);

  const renderSection = (section: string) => {
    switch (section) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();
  };

  return (
    <section className="section" id={currentSelection} onWheel={handleScroll}>
      {renderSection(currentSelection)}
    </section>
  );
}
