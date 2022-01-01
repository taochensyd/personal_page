import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headernavbar from "./components/Headernavbar";
import HomeBody from "./components/HomeBody";
import ProjectList from "./components/ProjectList";
import AboutMe from "./components/AboutMe";
import WorkExpreiences from "./components/WorkExpreiences";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ResumeData from "./Data/resumeData.json";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headernavbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={<HomeBody data={ResumeData.resume.personalInfo} />}
        />
        <Route
          path="/projectList"
          element={<ProjectList data={ResumeData.resume.projectsInfo} />}
        />
        <Route
          path="/education"
          element={<AboutMe data={ResumeData.resume.education} />}
        />
        <Route
          path="/workExpreiences"
          element={<WorkExpreiences data={ResumeData.resume.workExperiences} />}
        />
        <Route
          path="/skills"
          element={<Skills data={ResumeData.resume.skills} />}
        />
        <Route
          path="/contact"
          element={<Contact data={ResumeData.resume.personalInfo} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
