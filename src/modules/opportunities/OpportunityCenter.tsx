import {
    useEffect,
} from 'react';

import gsap from 'gsap';

import {
    FaArrowTrendUp,
    FaCircleExclamation,
} from 'react-icons/fa6';

import {
    useAppDispatch,
    useAppSelector,
} from '../../store/hooks';

import {
    setLoading,
    setOpportunities,
    addOpportunity,
} from '../../redux/slices/opportunitySlice';

import {
    getOpportunities,
    createOpportunity,
} from '../../services/opportunity.service';

export default function OpportunityCenter() {
    const dispatch =
        useAppDispatch();

    const {
        opportunities,
        loading,
    } = useAppSelector(
        (state) => state.opportunities
    );

    /*
      FETCH API DATA
    */

    useEffect(() => {
        const fetchData =
            async () => {
                try {
                    dispatch(
                        setLoading(true)
                    );

                    const data =
                        await getOpportunities();

                    dispatch(
                        setOpportunities(data)
                    );
                } catch (error) {
                    console.log(error);
                } finally {
                    dispatch(
                        setLoading(false)
                    );
                }
            };

        fetchData();
    }, []);

    /*
      GSAP ANIMATION
    */

    useEffect(() => {
        gsap.fromTo(
            '.opportunity-card',
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power3.out',
            }
        );
    }, [opportunities]);

    /*
      REALTIME CREATE
    */

    const handleCreate =
        async () => {
            try {
                const payload = {
                    id: Date.now(),

                    title:
                        'AI Infrastructure Upgrade',

                    customer: 'GlobalFin',

                    score: 94,

                    urgency: 'Critical',

                    revenue: 32000,
                };

                const response =
                    await createOpportunity(
                        payload
                    );

                dispatch(
                    addOpportunity(response)
                );
            } catch (error) {
                console.log(error);
            }
        };

    return (
        <div className="space-y-6">
            {/* HEADER */}

            <div className="flex items-center justify-between">
                <div>
                    <h1 className=" text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
                        Opportunity Center
                    </h1>

                    <p className="text-slate-400 mt-2">
                        AI-prioritized opportunities
                    </p>
                </div>

                <button
                    onClick={handleCreate}
                    className="
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
                    Generate AI Opportunity
                </button>
            </div>

            {/* LOADING */}

            {loading && (
                <div className="text-cyan-400">
                    Loading opportunities...
                </div>
            )}

            {/* GRID */}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {opportunities.map((item) => (
                    <div
                        key={item.id}
                        className="
              opportunity-card
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-6
              relative
              overflow-hidden
            "
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl" />

                        <div className="flex justify-between relative z-10">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                                        <FaArrowTrendUp />
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-bold text-white">
                                            {item.title}
                                        </h2>

                                        <p className="text-slate-400 mt-1">
                                            {item.customer}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                <h3 className="text-4xl font-bold text-cyan-400">
                                    {item.score}
                                </h3>

                                <p className="text-xs text-slate-500">
                                    AI Score
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8 relative z-10">
                            <div className="bg-slate-800 rounded-2xl p-4">
                                <p className="text-slate-400 text-sm">
                                    Revenue
                                </p>

                                <h3 className="text-2xl font-bold text-white mt-2">
                                    $
                                    {item.revenue.toLocaleString()}
                                </h3>
                            </div>

                            <div className="bg-slate-800 rounded-2xl p-4">
                                <p className="text-slate-400 text-sm">
                                    Urgency
                                </p>

                                <div className="flex items-center gap-2 mt-3">
                                    <FaCircleExclamation className="text-red-400" />

                                    <span className="text-red-400 font-semibold">
                                        {item.urgency}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}