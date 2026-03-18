import React, { use } from "react";
import PricingCard from "./PricingCard";
import DaisyPricingSection from "../DaisyUI_PricingSecttion/DaisyPricingSection";

const PricingSection = ({ pricingFetch }) => {
  const pricingData = use(pricingFetch);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 px-2">
      {pricingData.map((pricing) => (
        <DaisyPricingSection
          key={pricing.id}
          pricing={pricing}
        ></DaisyPricingSection>
      ))}

      {pricingData.map((pricing) => (
        <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
      ))}
    </div>
  );
};

export default PricingSection;
