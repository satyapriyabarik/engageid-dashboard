export default function ProjectDetail() {
    return (
        <div className="space-y-6">
            {/* HEADER */}

            <div
                className="
          bg-slate-900
          rounded-3xl
          p-4
          sm:p-6
          border
          border-slate-800
        "
            >
                <div
                    className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-4
          "
                >
                    <div>
                        <h1
                            className=" text-2xl sm:text-3xl lg:text-5xl font-bold text-white"
                        >

                            Project Intelligence
                        </h1>

                        <p className="text-slate-400 mt-2 text-sm sm:text-base">
                            AI-generated maintenance insights
                            and recommendations
                        </p>
                    </div>

                    {/* STATUS */}

                    <div
                        className="
              flex
              items-center
              gap-3
              bg-slate-800
              px-4
              py-3
              rounded-2xl
              w-fit
            "
                    >
                        <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

                        <span className="text-emerald-400 font-medium text-sm">
                            AI Engine Active
                        </span>
                    </div>
                </div>
            </div>

            {/* GRID */}

            <div
                className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
            >
                {/* PARTS */}

                <div
                    className="
            bg-slate-900
            rounded-3xl
            p-4
            sm:p-6
            border
            border-slate-800
          "
                >
                    <div className="flex items-center justify-between">
                        <h2
                            className="
                text-lg
                sm:text-xl
                font-bold
                text-white
              "
                        >
                            Recommended Parts
                        </h2>

                        <span className="text-xs sm:text-sm text-cyan-400">
                            AI Suggested
                        </span>
                    </div>

                    <div className="mt-5 space-y-4">
                        {/* ITEM */}

                        <div
                            className="
                bg-slate-800
                rounded-2xl
                p-4
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-3
              "
                        >
                            <div>
                                <h3 className="font-semibold text-white">
                                    SSD Upgrade
                                </h3>

                                <p className="text-sm text-slate-400 mt-1">
                                    AI recommends replacing
                                    storage cluster
                                </p>
                            </div>

                            <div
                                className="
                  bg-emerald-500/10
                  text-emerald-400
                  px-3
                  py-2
                  rounded-xl
                  text-sm
                  w-fit
                "
                            >
                                Available
                            </div>
                        </div>

                        {/* ITEM */}

                        <div
                            className="
                bg-slate-800
                rounded-2xl
                p-4
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-3
              "
                        >
                            <div>
                                <h3 className="font-semibold text-white">
                                    RAM Module
                                </h3>

                                <p className="text-sm text-slate-400 mt-1">
                                    Performance optimization
                                    recommendation
                                </p>
                            </div>

                            <div
                                className="
                  bg-yellow-500/10
                  text-yellow-400
                  px-3
                  py-2
                  rounded-xl
                  text-sm
                  w-fit
                "
                            >
                                Limited Stock
                            </div>
                        </div>
                    </div>
                </div>

                {/* ACTIONS */}

                <div
                    className="
            bg-slate-900
            rounded-3xl
            p-4
            sm:p-6
            border
            border-slate-800
          "
                >
                    <div className="flex items-center justify-between">
                        <h2
                            className="
                text-lg
                sm:text-xl
                font-bold
                text-white
              "
                        >
                            Suggested Actions
                        </h2>

                        <span className="text-xs sm:text-sm text-red-400">
                            Priority High
                        </span>
                    </div>

                    <div className="space-y-4 mt-5">
                        {/* ACTION CARD */}

                        <div className="bg-slate-800 rounded-2xl p-4">
                            <h3 className="font-semibold text-white">
                                Infrastructure Upgrade
                            </h3>

                            <p className="text-sm text-slate-400 mt-2 leading-6">
                                AI detected increasing failure
                                probability in production
                                storage systems.
                            </p>

                            <div
                                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                  mt-5
                "
                            >
                                <button
                                    className="
                    flex-1
                    bg-cyan-500
                    hover:bg-cyan-400
                    transition
                    px-5
                    py-3
                    rounded-2xl
                    font-semibold
                    text-slate-950
                  "
                                >
                                    Approve
                                </button>

                                <button
                                    className="
                    flex-1
                    bg-slate-700
                    hover:bg-slate-600
                    transition
                    px-5
                    py-3
                    rounded-2xl
                    font-semibold
                    text-white
                  "
                                >
                                    Reject
                                </button>
                            </div>
                        </div>

                        {/* TIMELINE */}

                        <div className="bg-slate-800 rounded-2xl p-4">
                            <h3 className="font-semibold text-white">
                                Maintenance Timeline
                            </h3>

                            <div className="mt-4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-cyan-400" />

                                    <p className="text-sm text-slate-300">
                                        AI recommendation generated
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />

                                    <p className="text-sm text-slate-300">
                                        Awaiting engineer approval
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-slate-500" />

                                    <p className="text-sm text-slate-400">
                                        Deployment pending
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}