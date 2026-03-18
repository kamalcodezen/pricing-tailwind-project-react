import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  const { name, price, popular, description, features } = pricing;

  return (
    <div className="bg-purple-700 border p-3 space-y-2.5 rounded-lg flex flex-col">
      {/* header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium">{name}</h1>
          <h4 className="text-3xl font-semibold">{price}</h4>
        </div>
        {popular && (
          <span className="text-lg text-amber-400 bg-blue-600 px-3 rounded-xl">
            Popular
          </span>
        )}
      </div>

      {/* body */}
      <div className="space-y-2 bg-purple-800 rounded-sm p-4 border shadow-xl flex-1">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}
      </div>
      <button className="btn bg-blue-700 w-full hover:opacity-80">
        Subscribe
      </button>
    </div>
  );
};

export default PricingCard;
