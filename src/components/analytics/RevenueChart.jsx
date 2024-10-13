import { useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const revenueData = {
  "This Week": [
    { month: "Mon", revenue: 2000000, target: 1800000 },
    { month: "Tue", revenue: 3000000, target: 2500000 },
    { month: "Wed", revenue: 1000000, target: 1200000 },
    { month: "Thu", revenue: 1500000, target: 1400000 },
    { month: "Fri", revenue: 4000000, target: 3500000 },
    { month: "Sat", revenue: 2000000, target: 2500000 },
    { month: "Sun", revenue: 3000000, target: 2700000 },
  ],
  "This Month": [
    { month: "Jan", revenue: 4000000, target: 3800000 },
    { month: "Feb", revenue: 3000000, target: 3200000 },
    { month: "Mar", revenue: 5000000, target: 4500000 },
    { month: "Apr", revenue: 4500000, target: 4200000 },
    { month: "May", revenue: 6000000, target: 5500000 },
    { month: "Jun", revenue: 5500000, target: 5800000 },
    { month: "Jul", revenue: 7000000, target: 6500000 },
  ],
  "This Quarter": [
    { month: "Q1", revenue: 15000000, target: 14000000 },
    { month: "Q2", revenue: 20000000, target: 18000000 },
    { month: "Q3", revenue: 18000000, target: 19000000 },
  ],
  "This Year": [
    { month: "2024", revenue: 70000000, target: 65000000 },
  ],
};

const RevenueChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>Revenue vs Target</h2>
        <select
          className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <AreaChart data={revenueData[selectedTimeRange]}>
            <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
            <XAxis dataKey='month' stroke='#9CA3AF' />
            <YAxis
              stroke='#9CA3AF'
              tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} // Formato en millones
            />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
              itemStyle={{ color: "#E5E7EB" }}
              formatter={(value) => [`$${(value / 1000000).toFixed(1)}M`, "Revenue"]} // Formato en millones
            />
            <Legend />
            <Area type='monotone' dataKey='revenue' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
            <Area type='monotone' dataKey='target' stroke='#10B981' fill='#10B981' fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueChart;
