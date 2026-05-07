import {
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import gsap from 'gsap';

import {
    FaBell,
    FaBars,
    FaMagnifyingGlass,
} from 'react-icons/fa6';

import {
    useAppDispatch,
    useAppSelector,
} from '../../store/hooks';

import {
    toggleDrawer,
} from '../../redux/slices/notificationSlice';

import {
    setSearchQuery,
} from '../../redux/slices/searchSlice';

import {
    searchData,
} from '../../utils/searchData';

interface Props {
    setMobileMenuOpen: (
        value: boolean
    ) => void;
}

export default function Topbar({
    setMobileMenuOpen,
}: Props) {
    const dispatch = useAppDispatch();

    const dropdownRef =
        useRef<HTMLDivElement>(null);

    const [isFocused, setIsFocused] =
        useState(false);

    const { query } = useAppSelector(
        (state) => state.search
    );

    /*
      FILTER RESULTS
    */

    const filteredResults = useMemo(() => {
        if (!query) return [];

        return searchData.filter((item) =>
            item.name
                .toLowerCase()
                .includes(query.toLowerCase())
        );
    }, [query]);

    /*
      GSAP
    */

    useEffect(() => {
        if (
            filteredResults.length &&
            dropdownRef.current
        ) {
            gsap.fromTo(
                dropdownRef.current,
                {
                    opacity: 0,
                    y: -10,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                }
            );
        }
    }, [filteredResults]);

    return (
        <div
            className="
        border-b
        border-slate-800
        bg-slate-900
        px-4
        sm:px-6
        py-4
      "
        >
            <div
                className="
          flex
          flex-col
          lg:flex-row
          gap-4
          lg:items-center
          lg:justify-between
        "
            >
                {/* LEFT SECTION */}

                <div
                    className="
            flex
            items-center
            gap-3
            w-full
          "
                >
                    {/* MOBILE MENU */}

                    <button
                        onClick={() =>
                            setMobileMenuOpen(true)
                        }
                        className="
              lg:hidden
              min-w-[48px]
              h-12
              rounded-2xl
              bg-slate-800
              flex
              items-center
              justify-center
            "
                    >
                        <FaBars />
                    </button>

                    {/* SEARCH */}

                    <div className="relative flex-1">
                        <div
                            className={`
                bg-slate-800
                px-4
                sm:px-5
                py-3
                rounded-2xl
                flex
                items-center
                gap-3
                border
                transition
                w-full

                ${isFocused
                                    ? 'border-cyan-500'
                                    : 'border-slate-700'
                                }
              `}
                        >
                            <FaMagnifyingGlass className="text-slate-400 shrink-0" />

                            <input
                                value={query}
                                onFocus={() =>
                                    setIsFocused(true)
                                }
                                onBlur={() =>
                                    setTimeout(
                                        () =>
                                            setIsFocused(
                                                false
                                            ),
                                        200
                                    )
                                }
                                onChange={(e) =>
                                    dispatch(
                                        setSearchQuery(
                                            e.target.value
                                        )
                                    )
                                }
                                placeholder="Search..."
                                className="
                  bg-transparent
                  outline-none
                  flex-1
                  text-white
                  min-w-0
                "
                            />
                        </div>

                        {/* DROPDOWN */}

                        {isFocused &&
                            filteredResults.length >
                            0 && (
                                <div
                                    ref={dropdownRef}
                                    className="
                    absolute
                    top-16
                    left-0
                    w-full
                    bg-slate-900
                    border
                    border-slate-700
                    rounded-2xl
                    overflow-hidden
                    shadow-2xl
                    z-50
                  "
                                >
                                    {filteredResults.map(
                                        (item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => {
                                                    dispatch(
                                                        setSearchQuery(
                                                            item.name
                                                        )
                                                    );

                                                    setIsFocused(
                                                        false
                                                    );
                                                }}
                                                className="
                          w-full
                          text-left
                          px-4
                          py-4
                          border-b
                          border-slate-800
                          hover:bg-slate-800
                          transition
                        "
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="text-white truncate">
                                                        {
                                                            item.name
                                                        }
                                                    </span>

                                                    <span className="text-xs text-cyan-400 ml-3 shrink-0">
                                                        {
                                                            item.type
                                                        }
                                                    </span>
                                                </div>
                                            </button>
                                        )
                                    )}
                                </div>
                            )}
                    </div>
                </div>

                {/* RIGHT SECTION */}

                <div
                    className="
            flex
            items-center
            justify-between
            sm:justify-end
            gap-4
          "
                >
                    {/* NOTIFICATION */}

                    <button
                        onClick={() =>
                            dispatch(
                                toggleDrawer()
                            )
                        }
                        className="
              relative
              w-12
              h-12
              rounded-2xl
              bg-slate-800
              flex
              items-center
              justify-center
              hover:bg-slate-700
              transition
              shrink-0
            "
                    >
                        <FaBell />

                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    </button>

                    {/* PROFILE */}

                    <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center font-bold shrink-0">
                            S
                        </div>

                        <div className="min-w-0">
                            <h3 className="font-semibold text-white truncate">
                                Satya
                            </h3>

                            <p className="text-sm text-slate-400 truncate">
                                ISC Engineer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}