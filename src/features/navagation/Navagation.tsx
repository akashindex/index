import "./Navagation.scss";
import { selectCurrentSection, setCurrentSection } from "../layout/LayoutSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export function Navagation() {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(selectCurrentSection);
  const handleClick = (option: number) => {
    dispatch(setCurrentSection(option));
  };

  return (
    <div className="navagation">
      <nav>
        <ul>
          <li>
            <a
              className={`list-item ${selected === "home" ? "selected" : ""}`}
              href="#home"
              onClick={() => {
                handleClick(0);
              }}
            >
              <div className="indicator" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              className={`list-item ${
                selected === "projects" ? "selected" : ""
              }`}
              href="#projects"
              onClick={() => {
                handleClick(1);
              }}
            >
              <div className="indicator" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a
              className={`list-item ${
                selected === "contact" ? "selected" : ""
              }`}
              href="#contact"
              onClick={() => {
                handleClick(2);
              }}
            >
              <div className="indicator" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
