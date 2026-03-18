import React, { use } from "react";
import PricingCard from "./PricingCard";
import DaisyPricingSection from "../DaisyUI_PricingSecttion/DaisyPricingSection";

const PricingSection = ({ pricingFetch }) => {
  const pricingData = use(pricingFetch);

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))} */}
        {pricingData.map((pricing) => (
          <DaisyPricingSection
            key={pricing.id}
            pricing={pricing}
          ></DaisyPricingSection>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
