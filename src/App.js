import {BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from './components/HomePage';
import Nav from './components/NavBar';
function App() {
  return (
    <div className="App">
       <div>
    <BrowserRouter>
          <Nav/>
              <Routes>
                  <Route path='/HomePage' element={<HomePage/>}/>
                 </Routes>
          </BrowserRouter>
    </div>
    </div>
  );
}
export default App;