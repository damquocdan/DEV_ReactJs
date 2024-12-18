
import './App.css';
import ClassArray from './components/ClassArray';
import EventDemo1 from './components/EventDemo1';
import EventDemo2 from './components/EventDemo2';
import EventDemo3 from './components/EventDemo3';
import EventDemo4 from './components/EventDemo4';
import FormControlled from './components/FormControlled';
import Functionarray from './components/Functionarray';
// import RenderCondition from './components/RenderCondition';
import RenderListKey from './components/RenderListKey';

function App() {
  const handleView = (agrs)=>{
    console.log(agrs);
  }
  return (
    <div className="App">
      <h1>DEMO EVENT _ FORM _ LIST&KEY - render condit</h1>
      <EventDemo1/>
      <hr/>
      <EventDemo2/>
      <EventDemo3 name1="ĐÀM QUỐC DAN" name2="quân"
      onView={handleView}
      />
      <EventDemo4/>
      <FormControlled/>
      {/* <RenderCondition/> */}
      <RenderListKey/>
      <hr/>
      <Functionarray/>
      <ClassArray/>
    </div>
  );
}

export default App;
