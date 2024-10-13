import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";


const userGrowthData = [
	{ month: "Jan", users: 2500 },  // Residential Solar Energy
	{ month: "Feb", users: 3000 },  // Commercial Wind Energy
	{ month: "Mar", users: 4000 },  // Hydroelectric Plant
	{ month: "Apr", users: 1200 },  // Geothermal Power
	{ month: "May", users: 1000 },  // Biomass Energy
	{ month: "Jun", users: 1500 },  // Tidal Energy Project
	{ month: "Jul", users: 2800 },  // Offshore Wind Energy
	{ month: "Aug", users: 5000 },  // Nuclear Power
	{ month: "Sep", users: 2200 },  // Hydrogen Energy
	{ month: "Oct", users: 1900 },  // Wave Energy
	{ month: "Nov", users: 1400 },  // Geothermal District Heating
	{ month: "Dec", users: 1600 }   // Solar Thermal Energy
];

const UsersGrowthChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Sales Growth Fluctuations</h2>
			<div className='h-[320px]'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart data={userGrowthData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='month' stroke='#9CA3AF' interval={0} />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='users'
							stroke='#8B5CF6'
							strokeWidth={2}
							dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default UsersGrowthChart;