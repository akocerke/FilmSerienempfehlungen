import React from "react";
import '../../style/App.css';
import '../../style/GlobalVars.css';
// import Pageloader from './components/Pageloader/Pageloader';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Header from '../../components/Header/Header';


function Startseite() {
  return (
    <div className="App">
      {/* <Pageloader /> */}
      <Header />
      <Navbar2 />
      <Footer />
    </div>
  );
}
  
  export default Startseite;
  