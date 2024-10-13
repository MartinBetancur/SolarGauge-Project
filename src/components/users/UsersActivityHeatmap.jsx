import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

// Cambié los nombres de las claves de los intervalos para que sean más consistentes.
const ActivityData = [
	{ name: "Mon", "16-20": 15, "21-24": 35, "25-28": 55, "29-32": 80, "33-36": 120, "37-40": 70 },
	{ name: "Tue", "16-20": 20, "21-24": 40, "25-28": 60, "29-32": 90, "33-36": 110, "37-40": 50 },
	{ name: "Wed", "16-20": 25, "21-24": 45, "25-28": 70, "29-32": 100, "33-36": 140, "37-40": 55 },
	{ name: "Thu", "16-20": 30, "21-24": 55, "25-28": 80, "29-32": 110, "33-36": 120, "37-40": 65 },
	{ name: "Fri", "16-20": 40, "21-24": 60, "25-28": 100, "29-32": 130, "33-36": 150, "37-40": 90 },
	{ name: "Sat", "16-20": 50, "21-24": 70, "25-28": 110, "29-32": 120, "33-36": 160, "37-40": 80 },
	{ name: "Sun", "16-20": 55, "21-24": 80, "25-28": 130, "29-32": 140, "33-36": 170, "37-40": 100 },
];

const UsersActivityHeatmap = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Weekly User Interactions</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={ActivityData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						{/* Los nombres de los dataKey deben coincidir con las claves del objeto de datos */}
						<Bar dataKey='16-20' stackId='a' fill='#F59E0B' />
						<Bar dataKey='21-24' stackId='a' fill='#3B82F6' />
						<Bar dataKey='25-28' stackId='a' fill='#6366F1' />
						<Bar dataKey='29-32' stackId='a' fill='#8B5CF6' />
						<Bar dataKey='33-36' stackId='a' fill='#EC4899' />
						<Bar dataKey='37-40' stackId='a' fill='#10B981' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default UsersActivityHeatmap;
