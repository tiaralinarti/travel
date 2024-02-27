import React from "react";
import './app.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
    return (
        <>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
        </>
    )
}


export default App;