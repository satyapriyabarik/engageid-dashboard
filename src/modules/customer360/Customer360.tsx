import { lazy, Suspense } from 'react';
export default function Customer360() {
    const GeoMap = lazy(
        () =>
            import(
                '../../maps/GeoMap'
            )
    );
    return (
        <div className="space-y-6">
            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
                <h1 className="text-3xl font-bold">
                    Customer 360
                </h1>

                <p className="text-slate-400 mt-2">
                    Unified customer intelligence
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
                    <h2 className="text-xl font-bold">
                        Engagement Score
                    </h2>

                    <div className="text-6xl text-cyan-400 font-bold mt-6">
                        82
                    </div>
                </div>

                <div className="col-span-2">
                    <Suspense
                        fallback={
                            <div className="h-full bg-slate-900 flex items-center justify-center text-cyan-400">
                                Loading map...
                            </div>
                        }
                    >
                        <GeoMap />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}