import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Modalities } from "./components/Modalities";
import { Authority } from "./components/Authority";
import { Testimonials } from "./components/Testimonials";
import { WhatsappFloat } from "./components/WhatsappFloat";
import { Footer } from "./components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-[var(--brand-accent)] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Modalities />
        <Authority />
        <Testimonials />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
