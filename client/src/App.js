import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NavBar from "./pages/NavBar";
import RegisterPage from "./pages/RegisterPage";
import CompanyMyPage from './pages/CompanyMyPage'
import JobSeekerMyPage from './pages/JobSeekerMyPage'
import Register from "./components/register";
import LandingPage from "./pages/LandingPage.js"

function App() {
  return (
    <>
      <NavBar />
      <Switch>
      <Route exact path="/" component={LandingPage} />
        <Route exact path="/mypage/company" component={CompanyMyPage} />
        <Route exact path="/mypage/jobseeker" component={JobSeekerMyPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
