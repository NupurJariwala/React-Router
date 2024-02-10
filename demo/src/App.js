import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Home"
import About from "./About";
import Navbar from "./Navbar";
import Page404 from "./Page404";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Red And White</h1>
      <Navbar/>
        <Routes>
            <Route path='/' ></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/*' element={<Page404/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
