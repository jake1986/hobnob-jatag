import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Our Components
import { AuthProvider } from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage/FrontPage";
import Reservation from "./components/Reservation/Reservation";
import JoinOurTeam from "./components/JoinOurTeam/JoinOurTeam";
import Contact from "./components/Contact/Contact";
import MenuItems from "./components/MenuItems";
// import Menu from "./components/Menu"
import Starters from "./components/Starters";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import Location from "./components/Location/Location";
import Pickup from "./pages/Pickup";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            {<ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>}
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/frontpage">
              <FrontPage />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/reservation">
              <Reservation />
            </Route>
            <Route exact path="/joinourteam">
              <JoinOurTeam />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
<<<<<<< HEAD
            <Route exact path="/location">
              <Location />
            </Route>
=======
            <Route exact path="/menu">
              <Menu />
            </Route>
            <Route exact path="/location">
              <Location />
            </Route>
            <Route exact path="/pickup">
              <Pickup />
            </Route>
>>>>>>> 4278b899939e848d58d009ecf25c14157c3f0a8d
            <ProtectedRoute exact path="/profile">
              <Profile />
            </ProtectedRoute>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
