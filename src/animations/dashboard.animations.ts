import gsap from 'gsap';

export const animateDashboardCards = () => {
  gsap.fromTo(
    '.dashboard-card',
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 30.1,
      ease: 'power3.out',
    }
  );
};

export const animateInsightFeed = () => {
  gsap.fromTo(
    '.insight-card',
    {
      opacity: 0,
      x: 50,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    }
  );
};