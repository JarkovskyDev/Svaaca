import About from "./components/About";
import Bakery from "./components/Bakery";
import Contacts from "./components/Contacts";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sweet from "./components/Sweet";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Sweet/>
        <Bakery/>
        <FAQ/>
        <Contacts/>
    </div>
  );
}

export default App;
