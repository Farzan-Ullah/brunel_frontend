import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/register" Component={RegisterPage} />
      </Routes>
    </Router>
  );
}
