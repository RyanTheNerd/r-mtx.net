// TODO:  figure out how to import json file, also change background of container, make body white
import './index.html';
import "./style.scss";
import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./portfolio";
import projects from "./portfolio-data";

ReactDOM.render(<Portfolio personal={projects.personal} fcc={projects.fcc} />, document.querySelector('#target'));