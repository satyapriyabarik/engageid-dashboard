export const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
];

export const barChartData = {
  labels,

  datasets: [
    {
      label: 'Opportunities',

      data: [12, 18, 24, 16, 28],

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
export const radarChartData = {
  labels: [
    'Customer Engagement',
    'Sales Performance',
    'Customer Satisfaction',
    'Revenue Growth',
    'Task Completion',
  ],

  datasets: [
    {
      label: 'Current Quarter',

      data: [82, 92, 78, 98, 86],

      backgroundColor: '#06b6d4',

      borderColor: '#06b6d4',

      borderWidth: 2,

      pointRadius: 0,

      pointHitRadius: 20,
    },
  ] }; 
  export const polarAreaChartData = {
    labels: [
      'Product A',
      'Product B',
      'Product C',
      'Product D',
      'Product E',
    ],

    datasets: [
        {
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#ef4444',
                '#f59e0b',
                '#10b981',
                '#3b82f6',
                '#8b5cf6',
            ],
        },              
    ] 
};

export const bubbleChartData = {
    datasets: [
        {
            label: 'Dataset 1',
            data: [
                { x: 10, y: 20, r: 5 },
                { x: 20, y: 30, r: 10 },
                { x: 30, y: 40, r: 15 },
            ],
            backgroundColor: '#06b6d4',
        },
    ],
};

export const pieChartData = {
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

export const scatterChartData = {
    datasets: [
        {
            label: 'Dataset 1',
            data: [
                { x: 10, y: 20 },
                { x: 20, y: 30 },
                { x: 30, y: 40 },
            ],
            backgroundColor: '#06b6d4',
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