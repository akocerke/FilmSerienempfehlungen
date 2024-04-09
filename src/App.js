import './style/App.css';
import './style/GlobalVars.css';
// import Pageloader from './components/Pageloader/Pageloader';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      {/* <Pageloader /> */}
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
