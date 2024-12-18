import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Accommodation from './components/Accommodation';
import MenuC from './components/MenuC';
import TourTravel from './components/TourTravel';
import News from './components/News';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import UpdateContact from './components/UpdateContact';
import ListContact from './components/ListContact';
import Bookaroom from './components/Bookaroom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/aboutus' element={<Aboutus />}></Route>
          <Route path='/accommodation' element={<Accommodation />}></Route>
          <Route path='/menu' element={<MenuC />}></Route>
          <Route path='/tourtravel' element={<TourTravel />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/contact' element={<Contact />}>
            <Route path='update-contact' element={<UpdateContact />} />
            <Route path='list-contact' element={<ListContact />} />
          </Route>
          <Route path='/bookaroom' element={<Bookaroom />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
