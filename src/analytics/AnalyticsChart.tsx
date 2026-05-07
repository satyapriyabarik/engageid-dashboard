import {
    useMemo,
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
    RadialLinearScale,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

import {
    Bar,
    Line,
    Doughnut,
    Radar,
    PolarArea,
    Bubble,
    Pie,
    Scatter,
} from 'react-chartjs-2';

import ChartTabs from './ChartTabs';

import {
    barChartData,
    lineChartData,
    doughnutChartData,
    radarChartData,
    polarAreaChartData,
    bubbleChartData,
    pieChartData,
    scatterChartData,
    chartOptions,
} from './chart.config';

ChartJS.register(
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Tooltip,
    Legend,
    Filler
);

export default function AnalyticsChart() {
    const [activeChart, setActiveChart] =
        useState('bar');

    /*
      CHART REGISTRY
    */

    const chartRegistry = useMemo(
        () => ({
            bar: (
                <Bar
                    key="bar"
                    data={barChartData}
                    options={chartOptions}
                />
            ),

            line: (
                <Line
                    key="line"
                    data={lineChartData}
                    options={chartOptions}
                />
            ),

            doughnut: (
                <div className="h-full flex items-center justify-center">
                    <Doughnut
                        key="doughnut"
                        data={doughnutChartData}
                        options={{
                            responsive: true,

                            maintainAspectRatio: false,

                            cutout: '70%',

                            plugins: {
                                legend: {
                                    position: 'bottom',

                                    labels: {
                                        color: '#94a3b8',
                                        padding: 20,
                                        boxWidth: 12,
                                    },
                                },
                            },
                        }}
                    />
                </div>
            ),

            radar: (
                <Radar
                    key="radar"
                    data={radarChartData}
                    options={chartOptions}
                />
            ),

            polarArea: (
                <PolarArea
                    key="polarArea"
                    data={polarAreaChartData}
                    options={chartOptions}
                />
            ),

            bubble: (
                <Bubble
                    key="bubble"
                    data={bubbleChartData}
                    options={chartOptions}
                />
            ),

            pie: (
                <Pie
                    key="pie"
                    data={pieChartData}
                    options={{
                        responsive: true,

                        maintainAspectRatio: false,

                        plugins: {
                            legend: {
                                position: 'bottom',

                                labels: {
                                    color: '#94a3b8',
                                    padding: 20,
                                    boxWidth: 12,
                                },
                            },
                        },
                    }}
                />
            ),

            scatter: (
                <Scatter
                    key="scatter"
                    data={scatterChartData}
                    options={chartOptions}
                />
            ),
        }),
        []
    );

    return (
        <div
            className="
        bg-slate-900
        rounded-3xl
        p-4
        sm:p-6
        border
        border-slate-800
        h-full
      "
        >
            {/* HEADER */}

            <div className="mb-6">
                <h2
                    className="
            text-lg
            sm:text-xl
            lg:text-2xl
            font-bold
            text-white
          "
                >
                    AI Analytics Center
                </h2>

                <p className="text-sm sm:text-base text-slate-400 mt-2">
                    Realtime operational intelligence
                    and predictive analytics
                </p>
            </div>

            {/* TABS */}

            <ChartTabs
                activeChart={activeChart}
                setActiveChart={
                    setActiveChart
                }
            />

            {/* CHART */}

            <div
                className="
          h-[300px]
          sm:h-[350px]
          lg:h-[420px]
          overflow-hidden
        "
            >
                {chartRegistry[
                    activeChart as keyof typeof chartRegistry
                ]}
            </div>
        </div>
    );
}