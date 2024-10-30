// pages/index.js
"use client";

import SemiCircularGauge from '../components/SemiCircularGauge';


export default function Home() {
  return (
        <div className="p-6 bg-[#f8f9fa]">
            <div className="flex flex-wrap gap-6">
                <div className='flex w-full gap-4'>
                <div className="w-full md:w-1/2 lg:w-1/4 bg-white p-4 shadow-md rounded-lg flex flex-col">
                    <h2 className="text-xl font-bold mb-4 text-center">Connection Request</h2>
                    <SemiCircularGauge
                        endpoint="http://localhost:8000/api/connection-requests/"
                        labels={['Total Requests', 'Successful Connections']}
                        backgroundColors={['#4dabf7', '#dee2e6']}
                        hoverBackgroundColors={['#4dabf7', '#dee2e6']}
                        size={350}
                        cutoutPercentage="80%"
                    />
                    </div>
                </div>
            </div>
        </div>
  );
}
