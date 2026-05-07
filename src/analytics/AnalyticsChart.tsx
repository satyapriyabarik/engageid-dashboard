import {
    useState,
} from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';

import {
    Bar,
    Line,
    Doughnut,
} from 'react-chartjs-2';

import ChartTabs from './ChartTabs';

import {
    barChartData,
    lineChartData,
    doughnutChartData,
    chartOptions,
} from './chart.config';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Tooltip,
    Legend
);

export default function AnalyticsChart() {
    const [activeChart, setActiveChart] =
        useState('bar');

    return (
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 h-full">
            {/* HEADER */}



            {/* TABS */}

            <ChartTabs
                activeChart={activeChart}
                setActiveChart={
                    setActiveChart
                }
            />

            {/* CHART */}

            <div className="h-[350px]">
                {activeChart === 'bar' && (
                    <Bar
                        data={barChartData}
                        options={chartOptions}
                    />
                )}

                {activeChart === 'line' && (
                    <Line
                        data={lineChartData}
                        options={chartOptions}
                    />
                )}

                {activeChart ===
                    'doughnut' && (
                        <Doughnut
                            data={
                                doughnutChartData
                            }
                        />
                    )}
            </div>
        </div>
    );
}