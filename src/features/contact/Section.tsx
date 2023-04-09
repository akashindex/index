import React, { useState } from "react";
import "./Section.scss";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentSection } from "../layout/LayoutSlice";

export function Section() {
  const currentSelection = useAppSelector(selectCurrentSection);

  return (
    <section className="section" id={currentSelection}>
      {currentSelection}
    </section>
  );
}
