
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/list-user' element={<ListUser/>}/>
          <Route path='/creare-user' element={<CreateUser/>}/>
          <Route path='/update-User' element={<UpdateUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
