import './index.css'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './components/Home';
import Residential from './components/Residential';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route exact path='residential' element={<Residential/>}/>
          <Route exact path='/contact' element={<ContactForm/>}></Route>
          <Route exact path='/' element={<Home/>}></Route>
        </Routes>
      </>
    </Router>
  );
}



export default App;
