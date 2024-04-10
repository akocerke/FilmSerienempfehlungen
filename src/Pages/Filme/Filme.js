import React from "react";
import Movies from "./PopularMovies";
import Content from "../../../src/components/Content/Content"

const Filme = () => { 
  return (
  <Content>
  <div className="App"> 
  <Movies />
   </div> 
   </Content>
   );
  };
  
export default Filme;