import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  // console.log(pricing)
  const { name, price, features } = pricing;

  return (
    <div className="bg-purple-700 border p-3 space-y-2.5 rounded-lg">
        
      {/* header */}
      <div>
        <h1 className="text-lg font-medium">{name}</h1>
        <h4 className="text-2xl font-semibold">{price}</h4>
      </div>
      
      {/* body */}
      <div className="space-y-2">
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}

      </div>
    </div>
  );
};

export default PricingCard;
