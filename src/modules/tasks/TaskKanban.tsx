const columns = [
    {
        title: 'Open',
        color: 'bg-cyan-400',
    },
    {
        title: 'In Progress',
        color: 'bg-yellow-400',
    },
    {
        title: 'Completed',
        color: 'bg-emerald-400',
    },
];

const tasks = [
    {
        id: 1,
        title: 'Server Maintenance',
        priority: 'Critical',
        engineer: 'Satya',
        status: 'Open',
    },
    {
        id: 2,
        title: 'Database Upgrade',
        priority: 'Medium',
        engineer: 'Rahul',
        status: 'In Progress',
    },
    {
        id: 3,
        title: 'Security Patch',
        priority: 'Low',
        engineer: 'Anjali',
        status: 'Completed',
    },
];

export default function TaskKanban() {
    return (
        <div className="space-y-6">
            {/* HEADER */}

            <div
                className="
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-4
          sm:p-6
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
                            Task Operations Center
                        </h1>

                        <p className="text-slate-400 mt-2 text-sm sm:text-base">
                            AI-driven engineering workflow
                            management
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

                        <span className="text-sm text-emerald-400 font-medium">
                            Live Task Sync
                        </span>
                    </div>
                </div>
            </div>

            {/* KANBAN */}

            <div
                className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
            >
                {columns.map((column) => {
                    const filteredTasks =
                        tasks.filter(
                            (task) =>
                                task.status ===
                                column.title
                        );

                    return (
                        <div
                            key={column.title}
                            className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-4
                sm:p-5
                min-h-[400px]
              "
                        >
                            {/* COLUMN HEADER */}

                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`
                      w-3
                      h-3
                      rounded-full
                      ${column.color}
                    `}
                                    />

                                    <h2
                                        className="
                      text-lg
                      sm:text-xl
                      font-bold
                      text-white
                    "
                                    >
                                        {column.title}
                                    </h2>
                                </div>

                                <div
                                    className="
                    bg-slate-800
                    px-3
                    py-1
                    rounded-xl
                    text-sm
                    text-slate-400
                  "
                                >
                                    {
                                        filteredTasks.length
                                    }
                                </div>
                            </div>

                            {/* TASKS */}

                            <div className="space-y-4">
                                {filteredTasks.map(
                                    (task) => (
                                        <div
                                            key={task.id}
                                            className="
                        bg-slate-800
                        border
                        border-slate-700
                        rounded-2xl
                        p-4
                        hover:border-cyan-500/40
                        transition
                      "
                                        >
                                            {/* TOP */}

                                            <div className="flex items-start justify-between gap-3">
                                                <h3
                                                    className="
                            font-semibold
                            text-white
                            leading-6
                          "
                                                >
                                                    {task.title}
                                                </h3>

                                                <div
                                                    className={`
                            px-3
                            py-1
                            rounded-xl
                            text-xs
                            shrink-0

                            ${task.priority ===
                                                            'Critical'
                                                            ? 'bg-red-500/10 text-red-400'
                                                            : task.priority ===
                                                                'Medium'
                                                                ? 'bg-yellow-500/10 text-yellow-400'
                                                                : 'bg-emerald-500/10 text-emerald-400'
                                                        }
                          `}
                                                >
                                                    {
                                                        task.priority
                                                    }
                                                </div>
                                            </div>

                                            {/* DETAILS */}

                                            <div className="mt-4 space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-slate-400">
                                                        Assigned Engineer
                                                    </span>

                                                    <span className="text-sm text-white">
                                                        {
                                                            task.engineer
                                                        }
                                                    </span>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-slate-400">
                                                        SLA Status
                                                    </span>

                                                    <span className="text-sm text-cyan-400">
                                                        Active
                                                    </span>
                                                </div>
                                            </div>

                                            {/* ACTIONS */}

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
                            py-2.5
                            rounded-xl
                            font-medium
                            text-slate-950
                          "
                                                >
                                                    View
                                                </button>

                                                <button
                                                    className="
                            flex-1
                            bg-slate-700
                            hover:bg-slate-600
                            transition
                            py-2.5
                            rounded-xl
                            font-medium
                            text-white
                          "
                                                >
                                                    Assign
                                                </button>
                                            </div>
                                        </div>
                                    )
                                )}

                                {/* EMPTY STATE */}

                                {filteredTasks.length ===
                                    0 && (
                                        <div
                                            className="
                      border
                      border-dashed
                      border-slate-700
                      rounded-2xl
                      p-8
                      text-center
                    "
                                        >
                                            <p className="text-slate-500">
                                                No tasks available
                                            </p>
                                        </div>
                                    )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}