interface Props {
    title: string;
    value: number;
    icon?: React.ReactNode;
}

export default function KpiCard({ title, value, icon }: Props) {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-100 hover:shadow-md transition">
            <div className="flex items-center justify-between">
                <h3 className="text-gray-500 text-sm">
                    {title}
                </h3>

                <div className="text-cyan-600 text-xl">
                    {icon}
                </div>
            </div>

            <p className="text-3xl font-bold mt-2">
                {value}
            </p>
        </div>
    );
}