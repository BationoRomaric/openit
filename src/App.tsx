import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Formations from "./pages/Formations";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import APropos from "./pages/APropos";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Equipe from "./pages/Equipe";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/formations" element={<Formations />} />
              <Route path="/services" element={<Services />} />
              <Route path="/realisations" element={<Realisations />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/demander-un-devis" element={<Quote />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;