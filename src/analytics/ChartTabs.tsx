interface Props {
    activeChart: string;

    setActiveChart: (
        value: string
    ) => void;
}

const tabs = [
    'bar',
    'line',
    'doughnut',
];

export default function ChartTabs({
    activeChart,
    setActiveChart,
}: Props) {
    return (
        <div className="flex items-center gap-3 mb-6">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() =>
                        setActiveChart(tab)
                    }
                    className={`
            px-4
            py-2
            rounded-xl
            text-sm
            capitalize
            transition

            ${activeChart === tab
                            ? 'bg-cyan-500 text-slate-950'
                            : 'bg-slate-800 text-slate-300'
                        }
          `}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}