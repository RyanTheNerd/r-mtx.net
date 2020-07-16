import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./portfolio";
import {projects} from "./portfolio-data.js";


ReactDOM.render(<Portfolio personal={projects.personal} fcc={projects.fcc} />, document.querySelector('#target'));
