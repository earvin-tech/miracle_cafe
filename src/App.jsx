import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Location from "./pages/Location";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<About/>} />
      <Route path="/location" element={<Location />} />

    </Routes>
  );
}