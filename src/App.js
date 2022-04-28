import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes} from 'react-router';
import LandingPage from './pages/home/LandingPage';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';
import ScrollToTop from './helpers/ScrollToTop';
import Books from './pages/books/Books';
import SignUp from './pages/signup/SignUp';
import SampleReader from './pages/reader/SampleReader'

function App() {
  const [color, setColor] = useState("white")
  const [fontColor, setFontColor] = useState("")
  const [bgColor, setBgColor] = useState("#e5e4e2")

  useEffect(() => {
    const setTheme = () => {
      localStorage.getItem('color') ? setColor(localStorage.getItem('color')) : setColor("white")
      localStorage.getItem('fontColor') ? setFontColor(localStorage.getItem('fontColor')) : setFontColor("")
      localStorage.getItem('bgColor') ? setBgColor(localStorage.getItem('bgColor')) : setBgColor("#e5e4e2")
    }

    setTheme()
  }, [])

  // useEffect(() => {
  //   console.log(color)
  // }, [color])

  return (
    <div className="app-container" >
      <Router>
        <NavBar bgColor={bgColor} setBgColor={setBgColor} fontColor={fontColor} color={color} setColor={setColor} setFontColor={setFontColor}/>
        <ScrollToTop />
        <Routes>
            <Route exact path="" element={<LandingPage fontColor={fontColor} color={color} setColor={setColor} setFontColor={setFontColor} bgColor={bgColor} setBgColor={setBgColor}/>}/>
            <Route exact path="/books" element={<Books fontColor={fontColor} color={color} setColor={setColor} setFontColor={setFontColor}/>}/>
            <Route exact path="/signup" element={<SignUp fontColor={fontColor} color={color} setColor={setColor} setFontColor={setFontColor}/>}/>
            <Route exact path="/samplereader" element={<SampleReader fontColor={fontColor} color={color} setColor={setColor} setFontColor={setFontColor} bgColor={bgColor} setBgColor={setBgColor}/>}/>
        </Routes>
        <Footer bgColor={bgColor} setBgColor={setBgColor}/>
      </Router> 
    </div>
  );
}

export default App;
