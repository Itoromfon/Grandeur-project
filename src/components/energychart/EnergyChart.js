// components/TemperatureChart.js
import { Line } from 'react-chartjs-2';
import styles from './EnergyChart.module.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EnergyChart = () => {
  const data = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    datasets: [
      {
        label: 'Temperature (°C)',
        data: [15, 17, 20, 22, 19, 18, 16],
        borderColor: '#5C755E', // Line color
        backgroundColor: '#5C755E', // Fill under line
        yAxisID: 'y1',
      },
      {
        label: 'Humidity (%)',
        data: [85, 80, 75, 70, 65, 60, 55],
        borderColor: 'rgba(185, 124, 13)',
        backgroundColor: 'rgba(185, 124, 13)',
        yAxisID: 'y2',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { 
        position: 'top', 
        labels: { 
          color: '#5C755E', // Legend text color
          font: { size: 14 }
        }
      },
      title: { 
        display: true, 
        text: 'Temperature and Humidity Over Time', 
        font: { size: 20 },
        color: '#5C755E'
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark tooltip background
        titleFont: { size: 16 },
        bodyFont: { size: 14 },
      },
    },
    scales: {
      y1: {
        type: 'linear',
        position: 'left',
        title: { display: true, text: 'Temperature (°C)', color: 'rgb(185, 124, 13)' },
        ticks: {
          color: '#5C755E',
          callback: (value) => `${value}°C`,
        },
      },
      y2: {
        type: 'linear',
        position: 'right',
        title: { display: true, text: 'Humidity (%)', color: '#5C755E' },
        ticks: {
          color: 'rgb(185, 124, 13)',
          callback: (value) => `${value}%`,
        },
        grid: { drawOnChartArea: false },
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartTitle}>Temperature and Humidity</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default EnergyChart;
