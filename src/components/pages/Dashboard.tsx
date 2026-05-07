import { useQuery } from '@tanstack/react-query';
import {
    FaRobot,
    FaUsers,
    FaDollarSign,
    FaArrowTrendUp,
} from 'react-icons/fa6';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';


import DashboardCard from '../../components/cards/DashboardCard';

import {
    getDashboard,
    getInsights,
} from '../../services/dashboard.service';

import useRealtimeDashboard from '../../hooks/useRealtimeDashboard';
import { FaTasks } from 'react-icons/fa';
import AIInsightCard from '../cards/AIInsightCard';
import AnalyticsChart from '../../analytics/AnalyticsChart';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

export default function Dashboard() {
    const { data: dashboard } = useQuery({
        queryKey: ['dashboard'],
        queryFn: getDashboard,
    });

    const { data: insights } = useQuery({
        queryKey: ['insights'],
        queryFn: getInsights,
    });

    const {
        liveCustomers,
        liveTasks,
        liveRevenue,
        liveAlerts,
    } = useRealtimeDashboard();



    return (
        <div className="space-y-6">
            {/* <DashboardHeader /> */}

            {/* KPI SECTION */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <DashboardCard
                    title="Customers"
                    value={liveCustomers || dashboard?.totalCustomers}
                    icon={<FaUsers />}
                    growth="+12%"
                />

                <DashboardCard
                    title="Open Tasks"
                    value={liveTasks || dashboard?.openTasks}
                    icon={<FaTasks />}
                    growth="+8%"
                />

                <DashboardCard
                    title="Revenue Opportunities"
                    value={liveRevenue || dashboard?.revenueOpportunities}
                    icon={<FaDollarSign />}
                    growth="+24%"
                />

                <DashboardCard
                    title="AI Alerts"
                    value={liveAlerts || dashboard?.atRiskAccounts}
                    icon={<FaRobot />}
                    growth="+5%"
                />
            </div>

            {/* CHART + INSIGHTS */}

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* CHART */}

                <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800">
                                Opportunity Analytics
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                AI-generated engagement opportunities
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-emerald-500 font-semibold">
                            <FaArrowTrendUp />
                            18% Growth
                        </div>
                    </div>

                    <div className="h-[650px]">
                        <AnalyticsChart />
                    </div>
                </div>

                {/* AI INSIGHTS */}

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800">
                                AI Insights
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                Real-time operational alerts
                            </p>
                        </div>

                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <div className="space-y-4">
                        {insights?.map((item: any) => (
                            <AIInsightCard
                                key={item.id}
                                severity={item.severity}
                                title={item.title}
                                confidence={item.confidence}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}