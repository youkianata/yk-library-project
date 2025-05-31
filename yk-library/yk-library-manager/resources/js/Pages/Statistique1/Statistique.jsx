import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import './App.css';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Title from '@/Components/Title';

// Default data structure
const defaultStats = {
  clientData: { data: [], labels: [], type: 'monthly' },
  reservationData: { data: [], labels: [], type: 'monthly', colors: [] },
  serviceData: { data: [], labels: [], colors: [] },
  totalClients: 0,
  totalReservations: 0,
  totalServices: 0
};

export default function Statistique({ 
  auth, 
  stats = defaultStats
}) {
  // Safely access nested properties with fallbacks
  const clientData = stats?.clientData || defaultStats.clientData;
  const reservationData = stats?.reservationData || defaultStats.reservationData;
  const serviceData = stats?.serviceData || defaultStats.serviceData;
  const totalClients = stats?.totalClients || 0;
  const totalReservations = stats?.totalReservations || 0;
  const totalServices = stats?.totalServices || 0;

  return (
    <AuthenticatedLayout auth={auth}>
      <Title titre={'statistique'} />
      <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex flex-col gap-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800 dark:border dark:border-gray-700">
          
          {/* Header Section */}
          <div className="px-6 pt-6 pb-2">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Statistics Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Analyze your business performance
            </p>
          </div>

{/* Stats Cards */}
<div className="px-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {[
      { 
        title: 'Total Clients', 
        value: totalClients, 
        icon: (
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
        color: 'blue-500' // This defines both icon and card color
      },
      { 
        title: 'Total Reservations', 
        value: totalReservations,
        icon: (
          <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        color: 'purple-500' // This defines both icon and card color
      },
      { 
        title: 'Total Services', 
        value: totalServices,
        icon: (
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        ),
        color: 'green-500' // This defines both icon and card color
      }
    ].map((card, index) => {
      // Extract the base color name (blue, purple, green) from the color string
      const baseColor = card.color.split('-')[0];
      
      return (
        <div 
          key={index}
          className={`bg-${card.color} bg-opacity-10 rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-700 dark:bg-opacity-50`}
        >
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-${card.color} bg-opacity-30`}>
              {card.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-300">{card.title}</p>
              <p className="text-2xl font-semibold text-gray-800 dark:text-white">{card.value}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

          {/* Charts Section */}
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Client Chart */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Clients par mois
                  </h2>
                </div>
                <div className="h-64">
                  <BarChart 
                    data={clientData.data} 
                    labels={clientData.labels} 
                    type={clientData.type}
                  />
                </div>
              </div>

              {/* Service Chart */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Services
                  </h2>
                </div>
                <div className="h-80">
                  <PieChart 
                    data={serviceData.data} 
                    labels={serviceData.labels} 
                    colors={serviceData.colors}
                  />
                </div>
              </div>

              {/* Reservation Chart */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Réservations mensuelles
                  </h2>
                </div>
                <div className="h-64">
                  <LineChart 
                    data={reservationData.data} 
                    labels={reservationData.labels} 
                    type={reservationData.type}
                    colors={reservationData.colors}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}