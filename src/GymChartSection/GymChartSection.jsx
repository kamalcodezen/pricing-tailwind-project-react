import React, { use } from "react";
import { Line, LineChart } from "recharts";
import GymChart from "./GymChart";

const GymChartSection = ({ gymDataPromise }) => {
  const gymChartData = use(gymDataPromise);
  console.log(gymChartData);
  return (
    <div>
     <GymChart gymData={gymChartData} />
    </div>
  );
};

export default GymChartSection;
