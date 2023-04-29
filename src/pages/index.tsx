import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-center mb-8">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 p-4 rounded-xl shadow-md text-white">
              <h2 className="text-xl font-semibold mb-2">Card 1</h2>
              <p>Some content goes here.</p>
            </div>
            <div className="bg-gradient-to-br from-red-400 to-yellow-500 p-4 rounded-xl shadow-md text-white">
              <h2 className="text-xl font-semibold mb-2">Card 2</h2>
              <p>Some content goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
