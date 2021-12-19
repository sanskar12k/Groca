
import './App.css';
import Navb from './Components/Navbar';
import Front from './Components/Front';
import FrontB from './Components/FrontB';
import FrontC from './Components/FrontC';
import FrontD from './Components/FrontD';
import FrontE from './Components/FrontE';
import FrontF from './Components/FrontF';
import FrontG from './Components/FrontG';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navb/>
      <Front/>
      <FrontB/>
      <FrontC/>
      <FrontD/>
      <FrontE/>
      <FrontF/>
      <FrontG></FrontG>
      <Footer/>
    </div>
  );
}

export default App;
