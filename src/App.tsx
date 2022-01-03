import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routing } from "./Routing";

//const getBasename = (path: string) => path.substr(0, path.lastIndexOf('/'));

const App: React.FC = () => (
  <Router>
    <Routing />
  </Router>
)
export default App;

