import React, { useState } from "react";
import "./Home.scss";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentSection } from "../layout/LayoutSlice";

export function Home() {
  const currentSelection = useAppSelector(selectCurrentSection);

  return (
    <div className="section" id={currentSelection}>
      {currentSelection}
    </div>
  );
}
