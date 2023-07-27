import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/config/configureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 어플리케이션 최상위에 Provider 두고 위의 store를 props로 넣어주기 */}
    <Provider store={store}>
      {/* Routes, Route 태그 및 react-router-dom을 사용하기 위해선 최상단에 BrowserRouter로 감싸줘야한다 */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
