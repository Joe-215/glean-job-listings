import React from "react";
import "./App.css";
import { Header } from "./containers/Header";
import { JobsList } from "./containers/JobsList";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <JobsList />
    </div>
  );
};
