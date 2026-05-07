import {
    FaRobot,
    FaChartLine,
    FaUsers,
    FaTasks,
    FaProjectDiagram,
} from 'react-icons/fa';

import {
    NavLink,
} from 'react-router-dom';

import gsap from 'gsap';
interface Props {
    mobileMenuOpen: boolean;

    setMobileMenuOpen: (
        value: boolean
    ) => void;
}
const menus = [
    {
        label: 'Dashboard',
        path: '/',
        icon: <FaChartLine />,
    },
    {
        label: 'Customer360',
        path: '/customer360',
        icon: <FaUsers />,
    },
    {
        label: 'Projects',
        path: '/projects',
        icon: <FaProjectDiagram />,
    },
    {
        label: 'Opportunities',
        path: '/opportunities',
        icon: <FaChartLine />,
    },
    {
        label: 'Tasks',
        path: '/tasks',
        icon: <FaTasks />,
    },
];

export default function Sidebar({ mobileMenuOpen, setMobileMenuOpen }: Props) {
    return (
        <div
            className={`
    fixed
    lg:static
    top-0
    left-0
    h-screen
    z-50
    w-72
    bg-slate-900
    border-r
    border-slate-800
    p-5
    flex
    flex-col
    transition-transform
    duration-300

    ${mobileMenuOpen
                    ? 'translate-x-0'
                    : '-translate-x-full lg:translate-x-0'
                }
  `}
        >
            {/* LOGO */}

            <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <FaRobot className="text-white text-xl" />
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-white">
                        engageIQ
                    </h1>

                    <p className="text-slate-400 text-sm">
                        AI Operations
                    </p>
                </div>
            </div>

            {/* NAVIGATION */}

            <div className="space-y-3 flex-1">
                {menus.map((menu) => (
                    <NavLink
                        key={menu.label}
                        to={menu.path}
                        end={menu.path === '/'}
                        onClick={() => {
                            setMobileMenuOpen(false);
                        }}
                        onMouseEnter={(e) => {
                            gsap.to(e.currentTarget, {
                                x: 6,
                                duration: 0.2,
                            });
                        }}
                        onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, {
                                x: 0,
                                duration: 0.2,
                            });
                        }}
                        className={({ isActive }) =>
                            `
                relative
                flex
                items-center
                gap-4
                px-5
                py-4
                rounded-2xl
                transition-all
                duration-300
                overflow-hidden
                border

                ${isActive
                                ? `
                      bg-cyan-500/10
                      border-cyan-500/20
                      text-cyan-400
                      shadow-lg
                      shadow-cyan-500/10
                    `
                                : `
                      border-transparent
                      text-slate-300
                      hover:bg-slate-800
                      hover:text-white
                    `
                            }
              `
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {/* ACTIVE LEFT BAR */}

                                {isActive && (
                                    <>
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 rounded-r-full" />

                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent" />
                                    </>
                                )}

                                {/* ICON */}

                                <span className="text-xl relative z-10">
                                    {menu.icon}
                                </span>

                                {/* LABEL */}

                                <span className="font-medium relative z-10">
                                    {menu.label}
                                </span>

                                {/* ACTIVE DOT */}

                                {isActive && (
                                    <div className="ml-auto w-2 h-2 rounded-full bg-cyan-400 animate-pulse relative z-10" />
                                )}
                            </>
                        )}
                    </NavLink>
                ))}
            </div>

            {/* AI STATUS */}

            <div className="mt-8 bg-slate-800 border border-slate-700 rounded-3xl p-5">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

                    <span className="text-sm text-emerald-400 font-medium">
                        AI Engine Active
                    </span>
                </div>

                <p className="text-slate-400 text-sm mt-3 leading-6">
                    Predictive maintenance monitoring
                    enabled with realtime intelligence.
                </p>
            </div>
        </div>
    );
}