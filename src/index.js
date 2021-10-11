import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import configureStore from "./Store/consfigureStore";

import App from "./App";
import { Provider } from "react-redux";
const store = configureStore();

console.log("Before Update", store.getState());

store.subscribe(() => {
  console.log("After Update", store.getState());
});

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);