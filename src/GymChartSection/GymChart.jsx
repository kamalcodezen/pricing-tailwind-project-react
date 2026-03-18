import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts";

const GymChart = ({ gymData }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20">
      
      <h2 className="text-xl font-bold mb-4 text-center text-white">
        Gym Membership Analytics
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={gymData}>
          
          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />

          {/* Axis */}
          <XAxis dataKey="month" stroke="#aaa" />
          <YAxis stroke="#aaa" />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#111",
              border: "none",
              borderRadius: "10px",
            }}
          />

          {/* Legend */}
          <Legend />

          {/* Lines */}
          <Line
            type="monotone"
            dataKey="activeMembers"
            stroke="#8884d8"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />

          <Line
            type="monotone"
            dataKey="male"
            stroke="#00C49F"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="female"
            stroke="#FF6B6B"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GymChart;