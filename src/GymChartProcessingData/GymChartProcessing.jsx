import React, { use } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const GymChartProcessing = ({ gymAxiosFetchData }) => {
  const getAxiosDataRes = use(gymAxiosFetchData);
  const getAxiosData = getAxiosDataRes.data;

  // Data Processing Axios
  const axiosGymData = getAxiosData.map((gymData) => {
    const changeData = {
      members: gymData.members,
      name: gymData.name,
      city: gymData.location.city,
      country: gymData.location.country,
    };
    // const avg =
    //   (changeData.members + changeData.city + changeData.country) / 3;
    // changeData.avg = avg;
    return changeData;
  });

  return (
    <div className="w-full max-w-4xl  rounded-2xl mx-auto shadow-2xl backdrop-blur-lg border border-pink-400 p-6 bg-pink-800">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Best Gym Location 
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={axiosGymData}>
          {/* Grid line */}
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />

          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis />

          <Tooltip
            contentStyle={{
              backgroundColor: "black",
              borderRadius: "10px",
              border: "none",
            }}
          />
          <Legend />

          <Bar dataKey="members" fill="#00C49F" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GymChartProcessing;
