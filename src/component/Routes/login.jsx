import React, { useState, useRef } from "react";
import "./styles/loginStyle.scss";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Joi from "joi-browser";
function Login() {
  const dropped = useRef();
  const inputuser = useRef();
  const inputpass = useRef();
  const [passwordShown, setPasswordShown] = useState(false);
  const [login, setLogin] = useState({
    account: {
      username: "",
      password: "",
    },
  });
  const [error, setError] = useState({});

  let userSchema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(6).max(14).label("Password"),
  };

  const validationOnChange = ({ value, name }) => {
    let object = { [name]: value };
    let schema = { [name]: userSchema[name] };
    let { error } = Joi.validate(object, schema);
    return error ? error.details[0].message : null;

    // if(name === "username") {
    //   if(value.trim()=== "") return "username is required"
    // }
    // if(name === "password") {
    //   if(value.trim()=== "") return "Password is required"
    // }
    // return null
  };

  const ChangeHandler = ({ target }) => {
    const errorobject = { ...error };
    const errormessage = validationOnChange(target);
    // console.log(errormessage);
    if (errormessage) errorobject[target.name] = errormessage;
    else delete errorobject[target.name];

    const account = { ...login.account };
    account[target.name] = target.value;
    setLogin({ account });
    setError({ ...errorobject });
  };

  const onChangePass = (e) => {
    setPasswordShown(!passwordShown);
  };

  const validation = (e) => {
    // console.log(login);
    const errors = {};
    let result = Joi.validate(login.account, userSchema, { abortEarly: false });
    if (!result.error) return null;
    for (let item of result.error.details) {
      console.log(item);
      errors[item.path[0]] = item.message;
    }

    if (login.account.username.trim() === "") {
      // errors.username = "username is required";
      inputuser.current.classList.add("is-invalid");
    }

    if (login.account.password.trim() === "") {
      // errors.password = "password is required";
      inputpass.current.classList.add("is-invalid");
    }

    if (!Object.keys(errors).includes("username")) {
      inputuser.current.classList.remove("is-invalid");
    }
    if (!Object.keys(errors).includes("password")) {
      inputpass.current.classList.remove("is-invalid");
    }
    if (Object.keys(errors).length === 0) {
      return null;
    }

    return errors;
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const errors = validation(e);
    setError(errors || {});
    console.log(error);
    if (errors) return;
    console.log("submitted");
    setTimeout(() => {
      dropped.current.style.top = "-45em";
    }, 1000);
    dropped.current.style.top = "-24em";
  };

  return (
    <div className="containerbox">
      <div className="accountbox">
        <div className="topcontainer">
          <div className="h2 welcome logintitle">Welcome</div>
          <div className="h2 logintitle">Back</div>
          <div className="h4 subtitle">Please login to continue!</div>
          <div ref={dropped} className="dropcolor"></div>
        </div>
        <form onSubmit={SubmitHandler} className="login-form">
          <div className="form-group1 ">
            <input
              autoFocus
              ref={inputuser}
              name="username"
              value={login.account.username}
              onChange={ChangeHandler}
              className="inputstyle form-control "
              placeholder="User"
              id="username"
              type="text"
            />
          </div>
          <div className="form-group2">
            <input
              className="inputstyle form-control"
              name="password"
              ref={inputpass}
              placeholder="Password"
              value={login.account.password}
              onChange={ChangeHandler}
              id="password"
              type={passwordShown ? "text" : "password"}
            />
            <FaEye
              onClick={onChangePass}
              className="btn-show "
              // className={" btn-show " + (inputpass.current.classList.contains('is-invalid'))? "d-none" : ''}
            />
          </div>
          <div className="createaccount">
            <p style={{ paddingRight: "5px" }} disabled>
              {" "}
              Don't have an account?
            </p>
            <br />
            <NavLink className="navlink" to="/Signup">
              Sign Up
            </NavLink>
          </div>

          <button disabled={Object.keys(error).length !== 0}  className="submitbtn btn btn-lg" type="submit">
            Login
          </button>
        </form>
      </div>
      <div className="errorbox">
        {error.username && (
          <div className="showerror alert alert-danger" role="alert">
            {error.username}
          </div>
        )}
        {error.password && (
          <div className="showerror alert alert-danger" role="alert">
            {error.password}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
