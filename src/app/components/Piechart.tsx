"use client";

import { Pie } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

type PieChart = {
  endpoint: string;
  backgroundColors?: string[];
  size?: number;
};

const PieChart = ({
  endpoint,
  backgroundColors = ['#36A2EB', '#FFCE56', '#FF6384'],
  size = 300,
}: PieChart) => {
  const [chartData, setChartData] = useState<any>({});

  useEffect(() => {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const labels = data.map((item: any) => item.status_type);
          const counts = data.map((item: any) => item.count);

          setChartData({
            labels,
            datasets: [
              {
                data: counts,
                backgroundColor: backgroundColors,
              },
            ],
          });
        } else {
          console.error('Unexpected data format or empty data:', data);
        }
      })
      .catch(error => console.error('Fetch error:', error));
  }, [endpoint, backgroundColors]);

  const defaultOptions = {
    plugins: {
      datalabels: {
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white badge
        borderRadius: 5,
        padding: {
          top: 6,
          right: 6,
          bottom: 6,
          left: 6,
        },
        font: {
          weight: 'bold',
          size: 14, // Adjust to match the size specified in props
        },
        formatter: (value: number) => value, // Show count inside badge
        anchor: 'center', 
        align: 'center',
        display: 'auto', // Ensures labels show when they fit
        clip: false, // Prevent clipping
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div style={{ width: `${size}px`, height: `${size}px`, margin: '0 auto' }}>
      {chartData.labels ? (
        <Pie data={chartData} options={defaultOptions} width={size} height={size} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PieChart;
