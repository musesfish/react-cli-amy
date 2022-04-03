import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Routers from "./router";
import { Provider } from "react-redux";
import store from "./store/index.js";
import * as serviceWorker from "./serviceWorker";
import Loading from "./components/Loading";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";
import 'antd-mobile/dist/antd-mobile.css'

// 测试
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <Routers />
      </ErrorBoundary>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
