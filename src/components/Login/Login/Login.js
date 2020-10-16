import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";
//import LoginBg from "../../../images/loginBg.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <div className="login-page container text-center">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className=" shadow p-5">
          <h3>Login With</h3>
          <div className="from-group mt-5">
            <button className="btn btn-brand" onClick={handleGoogleSignIn}>
              Continue With Google
            </button>
          </div>
          <div className="form-group" onClick={handleGoogleSignIn}>
            Don't have an account ?<Link> Create an account</Link>
          </div>
        </div>
        {/* <div className="col-md-6 d-none d-md-block align-self-end">
           <img className="img-fluid" src={LoginBg} alt="" /> 
        </div>  */}
      </div>
    </div>
  );
};

export default Login;
