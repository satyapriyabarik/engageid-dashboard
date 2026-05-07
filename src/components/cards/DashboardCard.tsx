interface Props {
    title: string;
    value: number;
    icon: React.ReactNode;
    growth: string;
}

export default function DashboardCard({
    title,
    value,
    icon,
    growth,
}: Props) {
    return (
        <div className="dashboard-card bg-slate-900 border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
            {/* GLOW EFFECT */}

            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl" />

            <div className="flex justify-between relative z-10">
                <div>
                    <p className="text-slate-400 text-sm">
                        {title}
                    </p>

                    <h2 className="text-4xl font-bold mt-3">
                        {value}
                    </h2>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl">
                    {icon}
                </div>
            </div>

            <div className="mt-6 flex justify-between relative z-10">
                <span className="text-slate-500 text-sm">
                    Last 30 Days
                </span>

                <span className="text-emerald-400 font-semibold">
                    {growth}
                </span>
            </div>
        </div>
    );
}