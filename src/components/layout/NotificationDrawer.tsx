import {
    useEffect,
    useRef,
} from 'react';

import gsap from 'gsap';

import {
    FaXmark,
} from 'react-icons/fa6';

import {
    useAppDispatch,
    useAppSelector,
} from '../../store/hooks';

import {
    toggleDrawer,
} from '../../redux/slices/notificationSlice';

export default function NotificationDrawer() {
    const drawerRef =
        useRef<HTMLDivElement>(null);

    const dispatch =
        useAppDispatch();

    const {
        isOpen,
        notifications,
    } = useAppSelector(
        (state) => state.notifications
    );

    /*
      OPEN / CLOSE ANIMATION
    */

    useEffect(() => {
        if (!drawerRef.current) return;

        if (isOpen) {
            gsap.to(drawerRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power3.out',
            });
        } else {
            gsap.to(drawerRef.current, {
                x: 420,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.in',
            });
        }
    }, [isOpen]);

    return (
        <div
            ref={drawerRef}
            className="
        fixed
        top-0
        right-0
        h-screen
w-full sm:w-[400px]  
      bg-slate-900
        border-l
        border-slate-800
        z-50
        p-5
        shadow-2xl
        translate-x-[420px]
        opacity-0
      "
        >
            {/* HEADER */}

            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Notifications
                    </h2>

                    <p className="text-sm text-slate-400 mt-1">
                        Realtime AI system alerts
                    </p>
                </div>

                {/* CLOSE BUTTON */}

                <button
                    onClick={() =>
                        dispatch(toggleDrawer())
                    }
                    className="
            w-10
            h-10
            rounded-2xl
            bg-slate-800
            hover:bg-slate-700
            transition
            flex
            items-center
            justify-center
          "
                >
                    <FaXmark />
                </button>
            </div>

            {/* LIVE STATUS */}

            <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

                <span className="text-sm text-emerald-400">
                    AI Engine Active
                </span>
            </div>

            {/* NOTIFICATIONS */}

            <div className="space-y-4 overflow-y-auto h-[calc(100vh-180px)] pr-2">
                {notifications.map((item) => (
                    <div
                        key={item.id}
                        className="
              bg-slate-800
              border
              border-slate-700
              rounded-2xl
              p-4
              hover:border-cyan-400
              transition
            "
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-white">
                                {item.title}
                            </h3>

                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        </div>

                        <p className="text-sm text-slate-400 mt-3 leading-6">
                            {item.description}
                        </p>

                        <div className="mt-4 text-xs text-cyan-400">
                            Just now
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}