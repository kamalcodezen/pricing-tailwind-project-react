import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PricingSection from "./components/PricingSection/PricingSection";



function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <PricingSection></PricingSection>
      </main>
    </>
  );
}

export default App;
