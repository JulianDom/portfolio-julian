import React from "react"
import Header from "./component/Head/Header"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App
