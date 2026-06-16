import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./About";
import ParticlesComponent from "./Background";
import FestivalProgrammePage from "./festival/FestivalProgrammePage";

function Principal() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-amber-300/40 via-amber-300/10 to-black">
      <ParticlesComponent id="particles" />
      <div className="relative z-10 w-full min-h-screen bg-black/90">
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/festival-2026" element={<FestivalProgrammePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default Principal;
