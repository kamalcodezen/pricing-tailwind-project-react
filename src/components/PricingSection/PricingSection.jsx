import React, { use } from "react";
import PricingCard from "./PricingCard";

const PricingSection = ({ pricingFetch }) => {
  const pricingData = use(pricingFetch);

  return (
    <div>
     
      <div className="grid grid-cols-3 gap-3">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
