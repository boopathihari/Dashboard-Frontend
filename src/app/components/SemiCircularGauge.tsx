import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

type SemiCircularGaugeProps = {
  endpoint: string;
  labels: string[];
  backgroundColors: string[];
  hoverBackgroundColors: string[];
  size?: number;
  cutoutPercentage?: string;
};

const SemiCircularGauge: React.FC<SemiCircularGaugeProps> = ({
  endpoint,
  labels,
  backgroundColors,
  hoverBackgroundColors,
  size = 300,
  cutoutPercentage = '70%',
}) => {
  const [data, setData] = useState<{ received: number; accepted: number } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const result = await response.json();

        const accepted = result.find((item: any) => item.status === 'Accepted')?.count || 0;
        const received = result.find((item: any) => item.status === 'Received')?.count || 0;

        setData({ received, accepted });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [endpoint]);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Connection Request',
        data: data ? [data.received, data.accepted] : [0, 0],
        backgroundColor: backgroundColors,
        hoverBackgroundColor: hoverBackgroundColors,
        borderWidth: 0,
        cutout: cutoutPercentage,
        rotation: 270,
        circumference: 180,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        color: '#f1f3f5',
        borderRadius: 5,
        padding: {
          top: 6,
          right: 6,
          bottom: 6,
          left: 6,
        },
        font: {
          weight: 'bold',
          size: 12,
        },
        formatter: (value: number) => value,
        anchor: 'center',
        align: 'center',
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    layout: {
      padding: {
        bottom: 10,
      },
    },
    cutout: cutoutPercentage,
  };

  return (
    <div style={{ position: 'relative', width: `${size}px`, height: `${size}px`, margin: '0 auto' }}>
      {data ? <Doughnut data={chartData} options={options} /> : <p>Loading...</p>}
    </div>
  );
};

export default SemiCircularGauge;
