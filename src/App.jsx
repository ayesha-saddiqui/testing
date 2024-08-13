import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytic from "./components/Analytic";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />;
      <Hero />
      <Analytic />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
