import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import Counter from './component/counter'
// import Movies from "./component/Routes/movies";
import MainRoute from "./mainroute";
// import Counters from './component/counters'
// import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'font-awesome/css/font-awesome.min.css';
// import App from './app';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainRoute />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
