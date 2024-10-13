import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

// Datos de ventas ajustados para ser coherentes en millones
const salesData = {
	"This Week": [
		{ day: "Mon", sales: 0.5 },
		{ day: "Tue", sales: 0.3 },
		{ day: "Wed", sales: 0.6 },
		{ day: "Thu", sales: 0.7 },
		{ day: "Fri", sales: 0.8 },
		{ day: "Sat", sales: 0.9 },
		{ day: "Sun", sales: 1.0 },
	],
	"This Month": [
		{ month: "Jan", sales: 1.5 },
		{ month: "Feb", sales: 1.3 },
		{ month: "Mar", sales: 1.8 },
		{ month: "Apr", sales: 1.5 },
		{ month: "May", sales: 2.0 },
		{ month: "Jun", sales: 1.7 },
		{ month: "Jul", sales: 2.1 },
	],
	"This Quarter": [
		{ quarter: "Q1", sales: 4.5 },
		{ quarter: "Q2", sales: 5.0 },
		{ quarter: "Q3", sales: 6.0 },
	],
	"This Year": [
		{ year: "2023", sales: 15 },
		{ year: "2024", sales: 20 },
	],
};

const SalesOverviewChart = () => {
	const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

	// Determina el conjunto de datos a usar según la selección
	const data = salesData[selectedTimeRange];

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Sales Overview</h2>

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

			<div className='w-full h-80'>
				<ResponsiveContainer>
					<AreaChart data={data}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey={selectedTimeRange === "This Week" ? "day" : selectedTimeRange === "This Month" ? "month" : selectedTimeRange === "This Quarter" ? "quarter" : "year"} stroke='#9CA3AF' />
						<YAxis
							stroke='#9CA3AF'
							tickFormatter={(value) => `${value} M`} // Formato para mostrar en millones
						/>
						<Tooltip
							contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}
							formatter={(value) => `${value} M`} // Formato de tooltip
						/>
						<Area type='monotone' dataKey='sales' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default SalesOverviewChart;
