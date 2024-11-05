import { motion } from 'framer-motion'
import { BarChart, BatteryCharging, Users, Zap } from 'lucide-react'

import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import SalesOverviewChart from '../components/overview/SalesOverviewChart'
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'
import SalesChannelChart from '../components/overview/SalesChannelChart'


const ConsumptionPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title="Energy Overview"/>

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

            {/* STATS */}
            <motion.div
                className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <StatCard
                    name="Total Sales" icon={Zap} value='$20,000,000' color='#6366F1'
                />
                <StatCard
                    name="New Users" icon={Users} value='1.300' color='#8B5CF6'
                />
                <StatCard
                    name="Energy Available" icon={BatteryCharging} value='38.500 kWh' color='#EC4899'
                />
                <StatCard
                    name="Market Price" icon={BarChart} value='$0,10/kWh' color='#10B981'
                />
            </motion.div>

            {/* CHARTS */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <SalesOverviewChart/>
                <CategoryDistributionChart/>
                <SalesChannelChart/>
            </div>
        </main>
    </div>
  )
}

export default ConsumptionPage