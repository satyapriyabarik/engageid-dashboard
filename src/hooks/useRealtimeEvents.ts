import { useEffect } from 'react';

export default function useRealtimeEvents() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('NEW_AI_INSIGHT');
    }, 3000);

    return () => clearInterval(interval);
  }, []);
}