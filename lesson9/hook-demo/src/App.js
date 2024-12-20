import logo from './download.png';
import './App.css';
import DemoUseState from './components/DemoUseState';
import DemoUseState1 from './components/DemoUseState1';
import DemoUseEffect from './components/DemoUseEffect';
import DemoContext from './components/DemoContext';
import DemoUseRef from './components/DemoUseRef';

function App() {
  return (
    <div className="App container border" style={{minHeight:"1000px"}}>
      <img src={logo} alt ="devmasster"/>
      <hr/>
      <div>
        <DemoUseState/>
        <DemoUseState1/>
      </div>
      <div>
        <DemoUseEffect/>
      </div>
      <div>
        <DemoContext/>
      </div>
      <div>
        <DemoUseRef/>
      </div>
    </div>
  );
}

export default App;
