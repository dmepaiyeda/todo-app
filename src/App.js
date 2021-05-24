import { render } from "@testing-library/react";
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/App.css";
import { AddButton } from "./components/Button.js";
import Tabs from "./components/Tabs";

function App () {
    return (
      <div>
        <div>
          <h1 className="mainheading">#todo</h1>
          <div>{AddButton}</div>
        </div>
          <Tabs>
            <div label="All">
              All to-dos
            </div>

            <div label="Active">
              Active to-dos
            </div>

            <div label="Completed">
              Completed to-dos
            </div>

          </Tabs>
        </div>
    );
  }


export default App;
