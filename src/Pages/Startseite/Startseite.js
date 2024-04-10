import React from "react";
import "../../style/App.css";
import "../../style/GlobalVars.css";
import Home from "../Home/Home";
import Content from "../../components/Content/Content";

function Startseite() {
  return (
    <div className="App">
      {/* <Pageloader /> */}
      <Content>
        <Home />
      </Content>
    </div>
  );
}

export default Startseite;
