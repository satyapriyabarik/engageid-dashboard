import { motion } from 'framer-motion';

interface Props {
    title: string;
    severity: string;
    confidence: number;
    description: string;
}

export default function AIInsightCard({
    title,
    severity,
    confidence,
    description,
}: Props) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-5"
        >
            <div className="flex items-center justify-between">
                <span className="text-red-400 text-sm">
                    {severity}
                </span>

                <span className="text-cyan-400 text-sm">
                    {confidence}% Confidence
                </span>
            </div>

            <h2 className="text-xl font-bold mt-4">
                {title}
            </h2>

            <p className="text-slate-400 mt-3">
                {description}
            </p>

            <div className="flex gap-3 mt-5">
                <button className="bg-cyan-500 px-4 py-2 rounded-xl">
                    Accept
                </button>

                <button className="bg-slate-800 px-4 py-2 rounded-xl">
                    Reject
                </button>
            </div>
        </motion.div>
    );
}