import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./redux/reducer/globalReducer";

// Store Redux
// const store = createStore(rootReducer);

// Redux State Management
// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,

//   document.getElementById("root")
// );

// Context API State Management
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Episode 23 Menit nol
