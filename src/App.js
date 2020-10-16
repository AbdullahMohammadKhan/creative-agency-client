import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
//import Appointment from "./components/Appointment/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import AddDoctor from "./components/AddDoctor/AddDoctor";
//import Order from "./components/Dashboard/Order/Order";
import ServiceList from "./components/ServiceList/ServiceList/ServiceList";
import Review from "./components/Review/Review/Review";
import Order from "./components/Order/Order/Order";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          {/* <Route path="/appointment">
            <Appointment></Appointment>
          </Route> */}
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/servicelist">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/makeadmin">
            <MakeAdmin />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* <PrivateRoute path="/dashborad/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/dashborad/servicelist">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/dashborad/review">
            <Review />
          </PrivateRoute> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
