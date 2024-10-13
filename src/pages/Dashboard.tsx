import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Zap, DollarSign, Leaf, Lightbulb, ThermometerSnowflake, Plug } from 'lucide-react';

const data = [
  { name: 'Mon', usage: 4000 },
  { name: 'Tue', usage: 3000 },
  { name: 'Wed', usage: 2000 },
  { name: 'Thu', usage: 2780 },
  { name: 'Fri', usage: 1890 },
  { name: 'Sat', usage: 2390 },
  { name: 'Sun', usage: 3490 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Energy Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Current Usage"
          value="2,345 kWh"
          icon={<Zap className="h-8 w-8 text-yellow-400" />}
        />
        <MetricCard
          title="Projected Savings"
          value="$523"
          icon={<DollarSign className="h-8 w-8 text-green-400" />}
        />
        <MetricCard
          title="Carbon Footprint"
          value="1.2 tons CO2e"
          icon={<Leaf className="h-8 w-8 text-green-600" />}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Energy Consumption</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="usage" fill="#4ade80" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Personalized Recommendations</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-yellow-400" />
            <span>Replace office lighting with LED bulbs to save up to 75% on lighting costs.</span>
          </li>
          <li className="flex items-center space-x-2">
            <ThermometerSnowflake className="h-5 w-5 text-blue-400" />
            <span>Adjust HVAC settings to optimize for occupancy patterns and save energy during off-hours.</span>
          </li>
          <li className="flex items-center space-x-2">
            <Plug className="h-5 w-5 text-gray-400" />
            <span>Implement smart power strips to reduce standby power consumption from office equipment.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="bg-green-100 rounded-full p-3">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;