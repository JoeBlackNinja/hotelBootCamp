import { StrictMode } from "react";
import ReactDOM from "react-dom";

import SideNavbar from "./SideNavbar";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SideNavbar />
  </StrictMode>,
  rootElement
);
