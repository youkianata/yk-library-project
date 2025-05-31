import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({ data, labels, type, colors }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Réservations mensuelles',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Reservations'
                }
            },
            x: {
                title: {
                    display: true,
                    text: type === 'daily' ? 'Dates' : 
                          type === 'monthly' ? 'Months' : 
                          'Services'
                }
            }
        },
    };

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Reservations',
                data: data,
                borderColor: type === 'by_service' && colors ? colors : 'rgb(75, 192, 192)',
                backgroundColor: type === 'by_service' && colors ? colors : 'rgba(75, 192, 192, 0.5)',
                tension: 0.1,
                fill: type === 'daily',
            },
        ],
    };

    return <Line options={options} data={chartData} />;
};

export default LineChart;