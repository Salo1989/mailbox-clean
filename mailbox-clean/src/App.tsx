import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AdminPage from "./AdminPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}