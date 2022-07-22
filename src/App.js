import React from "react";
import Candidatedashboard from "./Components/Candidatedashboard";
import Copyrightfooter from "./Components/Copyrightfooter";
import Footer from "./Components/Footer";
import Interviewtech from "./Components/Interviewtech";
import Interviewer from "./Components/Interviewer";
import Hrrequirementdetail from "./Components/Hrrequirementdetail";
import Hrcompanydetail from "./Components/Hrcompanydetail";
import Hrpersonaldetail from "./Components/Hrpersonaldetail";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Verification from "./Components/Verification";
import Aboutus from "./Components/Aboutus";
import Blog from "./Components/Blog";
import Contactus from "./Components/Contactus";
import Blogdetail from "./Components/Blogdetail";
import Features from "./Components/Features";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Hrdashboard from "./Components/Hrdashboard";
import Candidateprofile from "./Components/Candidateprofile";
import Candidateacademicdetail from "./Components/Candidateacademicdetail";
import Candidatesalary from "./Components/Candidatesalary";
import Interviewdashboard from "./Components/Interviewdashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Aboutus" element={<Aboutus />} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="/Blogdetail" element={<Blogdetail />} />
          <Route exact path="/Features" element={<Features />} />

          <Route exact path="/Contactus" element={<Contactus />} />

          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Verification" element={<Verification />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Hrdashboard" element={<Hrdashboard />} />
          <Route
            exact
            path="/Hrpersonaldetail"
            element={<Hrpersonaldetail />}
          />
          <Route
            exact
            path="/Hrrequirementdetail"
            element={<Hrrequirementdetail />}
          />
          <Route exact path="/Hrcompanydetail" element={<Hrcompanydetail />} />

          <Route
            exact
            path="/Candidatedashboard"
            element={<Candidatedashboard />}
          />

          <Route
            exact
            path="/Candidateprofile"
            element={<Candidateprofile />}
          />
          <Route
            exact
            path="/Candidateacademicdetail"
            element={<Candidateacademicdetail />}
          />
          <Route exact path="/Candidatesalary" element={<Candidatesalary />} />
          <Route
            exact
            path="/Interviewdashboard"
            element={<Interviewdashboard />}
          />
          <Route exact path="/Interviewer" element={<Interviewer />} />

          <Route exact path="/Interviewtech" element={<Interviewtech />} />
        </Routes>
      </Router>

      <Footer />
      <Copyrightfooter />
    </div>
  );
}

export default App;
