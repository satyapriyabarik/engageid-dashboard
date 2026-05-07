import { useEffect, useState } from 'react';

export default function useRealtimeDashboard() {
  const [liveCustomers, setLiveCustomers] =
    useState(120);

  const [liveTasks, setLiveTasks] =
    useState(42);

  const [liveRevenue, setLiveRevenue] =
    useState(18);

  const [liveAlerts, setLiveAlerts] =
    useState(32);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCustomers(
        (prev) => prev + Math.floor(Math.random() * 3)
      );

      setLiveTasks(
        (prev) => prev + Math.floor(Math.random() * 2)
      );

      setLiveRevenue(
        (prev) => prev + Math.floor(Math.random() * 2)
      );

      setLiveAlerts(
        (prev) => prev + Math.floor(Math.random() * 2)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return {
    liveCustomers,
    liveTasks,
    liveRevenue,
    liveAlerts,
  };
}