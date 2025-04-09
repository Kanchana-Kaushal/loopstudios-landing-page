import About from "./components/About";
import Creations from "./components/Creations";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="font-josefin relative min-h-screen scroll-smooth">
        <Hero />
        <About />
        <Creations />
        <Footer />
      </main>
    </>
  );
}

export default App;
