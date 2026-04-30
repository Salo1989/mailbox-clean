import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SpanishPage from "./SpanishPage";
import AdminPage from "./AdminPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/spanish" element={<SpanishPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}