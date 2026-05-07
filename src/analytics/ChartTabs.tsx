import {
    useEffect,
    useRef,
} from 'react';

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
    'radar',
    'polarArea',
    'bubble',
    'pie',
    'scatter',
];

export default function ChartTabs({
    activeChart,
    setActiveChart,
}: Props) {
    const scrollRef =
        useRef<HTMLDivElement>(null);

    /*
      ENABLE MOUSE WHEEL
      FOR HORIZONTAL SCROLL
    */

    useEffect(() => {
        const container =
            scrollRef.current;

        if (!container) return;

        const handleWheel = (
            e: WheelEvent
        ) => {
            if (
                Math.abs(e.deltaY) >
                Math.abs(e.deltaX)
            ) {
                e.preventDefault();

                container.scrollLeft +=
                    e.deltaY;
            }
        };

        container.addEventListener(
            'wheel',
            handleWheel,
            {
                passive: false,
            }
        );

        return () => {
            container.removeEventListener(
                'wheel',
                handleWheel
            );
        };
    }, []);

    /*
      KEYBOARD SUPPORT
    */

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLDivElement>
    ) => {
        if (!scrollRef.current) return;

        if (e.key === 'ArrowRight') {
            scrollRef.current.scrollLeft += 120;
        }

        if (e.key === 'ArrowLeft') {
            scrollRef.current.scrollLeft -= 120;
        }
    };

    return (
        <div className="relative">
            {/* LEFT FADE */}

            <div
                className="
          absolute
          left-0
          top-0
          bottom-0
          w-8
          bg-gradient-to-r
          from-slate-900
          to-transparent
          z-10
          pointer-events-none
        "
            />

            {/* RIGHT FADE */}

            <div
                className="
          absolute
          right-0
          top-0
          bottom-0
          w-8
          bg-gradient-to-l
          from-slate-900
          to-transparent
          z-10
          pointer-events-none
        "
            />

            {/* SCROLL AREA */}

            <div
                ref={scrollRef}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="
          overflow-x-auto
          scrollbar-hide
          scroll-smooth
          pb-2
          outline-none
        "
            >
                <div className="flex items-center gap-3 min-w-max">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() =>
                                setActiveChart(tab)
                            }
                            className={`
                px-4
                py-2.5
                rounded-2xl
                text-sm
                capitalize
                whitespace-nowrap
                transition-all
                duration-300
                shrink-0

                ${activeChart === tab
                                    ? `
                      bg-cyan-500
                      text-slate-950
                      shadow-lg
                      shadow-cyan-500/20
                    `
                                    : `
                      bg-slate-800
                      text-slate-300
                      hover:bg-slate-700
                    `
                                }
              `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}