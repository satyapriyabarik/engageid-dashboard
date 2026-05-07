import {
    FaBell,
    FaMagnifyingGlass,
} from 'react-icons/fa6';

export default function DashboardHeader() {
    return (
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
                {/* LEFT */}

                <div>
                    <h1 className=" text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-800 leading-tight color-slate-800 ">
                        engageIQ Dashboard
                    </h1>

                    <p className="text-slate-500 mt-2">
                        AI-powered maintenance intelligence platform
                    </p>
                </div>

                {/* RIGHT */}

                <div className="flex items-center gap-4">
                    {/* SEARCH */}

                    <div className="hidden md:flex items-center gap-3 bg-slate-100 px-4 py-3 rounded-2xl">
                        <FaMagnifyingGlass className="text-slate-400" />

                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-sm"
                        />
                    </div>

                    {/* NOTIFICATION */}

                    <button className="relative w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                        <FaBell className="text-slate-700" />

                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    </button>

                    {/* PROFILE */}

                    <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-2xl">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500 text-white flex items-center justify-center font-bold">
                            S
                        </div>

                        <div className="hidden md:block">
                            <h3 className="font-semibold text-sm">
                                Satya
                            </h3>

                            <p className="text-xs text-slate-500">
                                ISC Engineer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
