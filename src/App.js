import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headernavbar from "./components/Headernavbar";
import HomeBody from "./components/HomeBody";
import ProjectList from "./components/ProjectList";
import AboutMe from "./components/AboutMe";
import WorkExpreiences from "./components/WorkExpreiences";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headernavbar />
      </div>
      <Routes>
        <Route path="/" element={<HomeBody />} />
        <Route path="/projectList" element={<ProjectList />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/workExpreiences" element={<WorkExpreiences />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
