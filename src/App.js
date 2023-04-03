import "semantic-ui-css/semantic.min.css"
import './App.css';
import {BrowserRouter, Routes, Route, } from "react-router-dom"
import HomePage from './components/HomePage';
import Nav from './components/NavBar';
import LoginPage from './components/LoginPage';
import Movies from './components/Movies';
import ReviewPage from './components/ReviewPage';



function App() {

  return (

    <div className="App">
       <div>
    <BrowserRouter>
          <Nav/>
              <Routes>
                  <Route path='/HomePage' element={<HomePage/>}/>
                  <Route path='/LoginPage' element={<LoginPage/>}/>
                  <Route path='/Movies' element={<Movies/>}/>
                 </Routes>
          </BrowserRouter>

          <ReviewPage/>

    </div>
  
    </div>
  );
}

export default App;
