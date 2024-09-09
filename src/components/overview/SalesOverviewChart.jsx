import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from 'framer-motion';

const salesData = [
    { name: "Jul", sales: 2500000 },
    { name: "Aug", sales: 1800000 },
    { name: "Sep", sales: 3200000 },
    { name: "Oct", sales: 1900000 },
    { name: "Nov", sales: 2700000 },
    { name: "Dec", sales: 2300000 },
    { name: "Jan", sales: 2000000 },
    { name: "Feb", sales: 1500000 },
    { name: "Mar", sales: 1800000 },
    { name: "Apr", sales: 2600000},
    { name: "May", sales: 1700000 },
    { name: "Jun", sales: 2000000 },
];

const formatMillions = (value) => {
  return `${(value / 1000000).toFixed(1)}M`;
};

const SalesOverviewChart = () => {
  return (
    <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y:20 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ delay: 0.2 }}
    >
        <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Overview</h2>

        <div className='h-80'>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#4B5563'/>
                    <XAxis dataKey={"name"} stroke="#9ca3af"/>
                    <YAxis stroke="#9ca3af" tickFormatter={formatMillions} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563",
                        }}    
                        itemStyle={{ color: "#E5E7EB"}}
                        formatter={(value, name, props) => formatMillions(value)}
                    />
                        <Line 
                            type='monotone'
                            dataKey='sales'
                            stroke='#6366F1'
                            strokeWidth={3}
                            dot={{ fill:'#6366F1', strokeWidth: 2, r: 6 }}
                            activeDot={{ r:8, strokeWidth: 2 }}
                        />
                </LineChart>
            </ResponsiveContainer>
        </div>

    </motion.div>
  )
}

export default SalesOverviewChart