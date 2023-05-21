import './index.css'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route exact path='logoClick' element={<Home/>}></Route>
        </Routes>
      </>
    </Router>
  );
}



export default App;
