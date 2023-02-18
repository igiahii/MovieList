import React, { useState } from "react";
import "./styles/loginStyle.scss";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Login() {
  const [pass, setPass] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const onChangePass = (e) => {
    e.preventDefault();
    //  document.querySelector('#password').type = "text"
    setPasswordShown(!passwordShown);
  };
  const SubmitHandler = (e) => {
    e.preventDefault() ;
    setTimeout(() => {
      document.querySelector(".dropcolor").style.top ="-45em";
    }, 1000);
    document.querySelector(".dropcolor").style.top ="-24em" ;      

     
  };

  return (
    <div className="containerbox">
      <div className="accountbox">
        <div className="topcontainer">
          <div className="h2 welcome logintitle">Welcome</div>
          <div className="h2 logintitle">Back</div>
          <div className="h4 subtitle">Please login to continue!</div>
          <div className="dropcolor"></div>
        </div>
        <form onSubmit={SubmitHandler} className="login-form">
          <div className="form-group1">
            <input autoFocus className="inputstyle form-control" placeholder="User" id="username" type="username" />
          </div>
          <div className="form-group2">
            <input
              className="inputstyle form-control"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              id="password"
              type={passwordShown ? "text" : "password"}
            />
            <FaEye onClick={onChangePass} className="btn-show"/>
            {/* <button >
              show
            </button> */}
          </div>
          <div className="createaccount">
            <p style={{paddingRight:'5px'}}disabled> Don't have an account?</p>
            <br/>
            <NavLink className="navlink" to="/Signup">Sign Up</NavLink>
          </div>
           
            <button className="submitbtn btn btn-lg" type="submit">Login </button>
          
        </form>
      </div>
    </div>
  );
}

export default Login;
