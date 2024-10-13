import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const energyConsumptionData = [
    { name: "Air Conditioning", value: 6.5 },
    { name: "Lighting (LED bulbs)", value: 2.3 },
    { name: "Electronic Devices", value: 3.5 },
    { name: "Water Heater", value: 8.5 },
    { name: "Electric Stove", value: 4 },
    { name: "Refrigerator", value: 5.0 },
    { name: "Microwave", value: 1.2 },
    { name: "Dishwasher", value: 2.5 },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B", "#4B5563", "#D1FAE5", "#FBBF24", "#FCA5A5", "#F472B6", "#60A5FA", "#A5B4FC", "#D1D5DB"];

const CategoryDistributionChart = () => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Energy Consumption by Category</h2>
            <div className='h-80'>
                <ResponsiveContainer
                    width={"100%"}
                    height={"100%"}
                >
                    <PieChart>
                        <Pie
                            data={energyConsumptionData}
                            cx={"50%"}
                            cy={"50%"}
                            labelLine={false}
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey='value'
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {energyConsumptionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                            formatter={(value) => `${value} kWh`}
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default CategoryDistributionChart;
