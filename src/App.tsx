import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signUp" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
