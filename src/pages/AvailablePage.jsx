import { motion } from "framer-motion";
import { Zap, Users, BatteryCharging, BarChart } from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import ProductTable from "../components/products/ProductTable";
import SalesTrendChart from "../components/products/SalesTrendChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";



const AvailablePage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Energy Available' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}  
				>
					<StatCard
            name="Total Energy (in kWh)" icon={Zap} value='14.600' color='#6366F1'
          />
					<StatCard
            name="Top Sellings" icon={Users} value='Residential Energy' color='#8B5CF6'
          />
					<StatCard
            name="Low Stock" icon={BatteryCharging} value='3 types of energy' color='#EC4899'
          />
					<StatCard
            name="Total Revenue" icon={BarChart} value='$20.560.000' color='#10B981'
          />
				</motion.div>

        <ProductTable/>

        {/* CHARTS */}
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart/>
          <CategoryDistributionChart/>
        </div>
			</main>
		</div>
	);
};
export default AvailablePage;