import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { componentLoaderFactory } from './utils/component-loader-factory';

window.ModuleLoader = componentLoaderFactory('http://localhost:8082/remoteEntry.js', 'remoteApp');

ReactDOM.render(<App />, document.getElementById("root"));
