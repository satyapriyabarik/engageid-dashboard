export const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
];

export const barChartData = {
  labels,

  datasets: [
    {
      label: 'Opportunities',

      data: [12, 18, 24, 16, 28, 34],

      backgroundColor: '#06b6d4',

      borderRadius: 10,
    },
  ],
};

export const lineChartData = {
  labels,

  datasets: [
    {
      label: 'Revenue Trend',

      data: [
        12000,
        18000,
        24000,
        22000,
        32000,
        41000,
      ],

      borderColor: '#06b6d4',

      backgroundColor:
        'rgba(6,182,212,0.2)',

      fill: true,

      tension: 0.4,
    },
  ],
};

export const doughnutChartData = {
  labels: [
    'Critical',
    'Warning',
    'Healthy',
  ],

  datasets: [
    {
      data: [14, 22, 64],

      backgroundColor: [
        '#ef4444',
        '#f59e0b',
        '#10b981',
      ],

      borderWidth: 0,
    },
  ],
};

export const chartOptions = {
  responsive: true,

  maintainAspectRatio: false,

  plugins: {
    legend: {
      labels: {
        color: '#94a3b8',
      },
    },
  },

  scales: {
    x: {
      ticks: {
        color: '#94a3b8',
      },

      grid: {
        color: '#1e293b',
      },
    },

    y: {
      ticks: {
        color: '#94a3b8',
      },

      grid: {
        color: '#1e293b',
      },
    },
  },
};