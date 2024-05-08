import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes> 
       <Route path="/" exact Component={Home}/>
      </Routes>
    </Router>
  );
}
