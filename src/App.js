import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Footer from './components/Footer';
import EventHandling from './components/EventHandling';
import ManageUser from './components/ManageUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='home' element={ <Home/> }/>
          <Route path='login' element={ <Login/> }/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='event' element={<EventHandling/>}/>
          <Route path='manage' element={<ManageUser/>}/>
          <Route path='Update/:userid' element={<UpdateUser/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
