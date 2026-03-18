import { Circle, CircleCheckBig } from "lucide-react";
import React from "react";

const PricingFeature = ({ feature }) => {
  console.log(feature);
  return (
   
      <p className="flex gap-2 "><CircleCheckBig className=""></CircleCheckBig> {feature}</p>
    
  );
};

export default PricingFeature;
