import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  // react-redux의 Provider 컴포넌트를 통해 다른 컴포넌트에서 Redux Store를 사용할 수 있음
  <Provider store={store}>
    <App />
  </Provider>
);
