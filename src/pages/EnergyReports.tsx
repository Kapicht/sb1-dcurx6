import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2023-01', consumption: 4000, cost: 2400 },
  { date: '2023-02', consumption: 3000, cost: 1398 },
  { date: '2023-03', consumption: 2000, cost: 9800 },
  { date: '2023-04', consumption: 2780, cost: 3908 },
  { date: '2023-05', consumption: 1890, cost: 4800 },
  { date: '2023-06', consumption: 2390, cost: 3800 },
];

const EnergyReports: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Energy Reports</h2>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Energy Consumption and Cost Trends</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="consumption" stroke="#4ade80" name="Consumption (kWh)" />
            <Line yAxisId="right" type="monotone" dataKey="cost" stroke="#3b82f6" name="Cost ($)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Energy Breakdown by Department</h3>
          {/* Add a pie chart or bar chart here for department breakdown */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Peak Usage Times</h3>
          {/* Add a heatmap or line chart for peak usage times */}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Efficiency Metrics</h3>
        {/* Add a table or cards with various efficiency metrics */}
      </div>
    </div>
  );
};

export default EnergyReports;