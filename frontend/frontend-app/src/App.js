import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ApplicationForm from "./components/ApplicationForm";
import DocumentUpload from "./components/DocumentUpload";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/apply" element={<ApplicationForm />} />

        <Route path="/upload" element={<DocumentUpload />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    </Router>
  );
}

export default App;