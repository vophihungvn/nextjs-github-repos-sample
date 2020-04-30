import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import { Spin } from "antd";
import { initializeStore } from "./store/index";
import "antd/dist/antd.css";
import "./App.css";

const store = initializeStore();

const Home = lazy(() => import("./views/Home"));
const RepoList = lazy(() => import("./views/RepoList"));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spin />}>
        <Router>
          <Home path="/" />
          <RepoList path="/repo-list" />
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
