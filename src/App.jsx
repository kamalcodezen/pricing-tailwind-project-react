import { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PricingSection from "./components/PricingSection/PricingSection";
import GymChartSection from "./GymChartSection/GymChartSection";

import GymChartProcessing from "./GymChartProcessingData/GymChartProcessing";

import axios from "axios";

const pricingFetch = fetch("pricingData.json").then((res) => res.json());

const gymDataPromise = fetch("gymChartData.json").then((res) => res.json());

const gymAxiosFetchData = axios.get("chartProcessingData.json");

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>

      <main>
        {/* Pricing Cart */}
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg flex items-center justify-center mt-50 mx-auto text-yellow-300 font-medium"></span>
          }
        >
          <PricingSection pricingFetch={pricingFetch}></PricingSection>
        </Suspense>

        {/* Gym Chart Added */}
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg flex items-center justify-center mt-50 mx-auto text-yellow-300 font-medium"></span>
          }
        >
          <GymChartSection gymDataPromise={gymDataPromise}></GymChartSection>
        </Suspense>

        {/* Gym Axios Fetch Data */}
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg flex items-center justify-center mt-50 mx-auto text-yellow-300 font-medium"></span>
          }
        >
          <GymChartProcessing
            gymAxiosFetchData={gymAxiosFetchData}
          ></GymChartProcessing>
        </Suspense>
      </main>
    </>
  );
}

export default App;
