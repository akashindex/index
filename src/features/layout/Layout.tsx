import React, { useState } from "react";
import "./Layout.scss";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Navagation } from "../navagation/Navagation";
import { Section } from "../section/Section";

export function Layout() {
  const dispatch = useAppDispatch();

  return (
    <div className="main-layout">
      <Navagation />
      <Section />
    </div>
  );
}
