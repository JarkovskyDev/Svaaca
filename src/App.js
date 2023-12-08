import About from "./components/About";
import Bakery from "./components/Bakery";
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
    </div>
  );
}

export default App;
