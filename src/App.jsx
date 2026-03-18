import { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PricingSection from "./components/PricingSection/PricingSection";

const pricingFetch = fetch("pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-spinner loading-lg flex items-center justify-center mt-50 mx-auto text-yellow-300 font-medium"></span>}>
          <PricingSection pricingFetch={pricingFetch}></PricingSection>
        </Suspense>
      </main>
    </>
  );
}

export default App;
