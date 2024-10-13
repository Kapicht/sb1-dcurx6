import React from 'react';
import { Lightbulb, ThermometerSnowflake, Plug, Sun, Recycle } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    title: 'Switch to LED Lighting',
    description: 'Replace all traditional bulbs with LED alternatives to reduce energy consumption by up to 75%.',
    savings: '15,000 kWh annually',
    cost: '$5,000',
    roi: '18 months',
    icon: Lightbulb,
  },
  {
    id: 2,
    title: 'Optimize HVAC System',
    description: 'Implement smart thermostats and adjust settings based on occupancy patterns.',
    savings: '20,000 kWh annually',
    cost: '$8,000',
    roi: '24 months',
    icon: ThermometerSnowflake,
  },
  {
    id: 3,
    title: 'Install Smart Power Strips',
    description: 'Use smart power strips to eliminate standby power consumption from office equipment.',
    savings: '5,000 kWh annually',
    cost: '$1,500',
    roi: '12 months',
    icon: Plug,
  },
  {
    id: 4,
    title: 'Solar Panel Installation',
    description: 'Install rooftop solar panels to generate clean energy and reduce reliance on the grid.',
    savings: '50,000 kWh annually',
    cost: '$30,000',
    roi: '5 years',
    icon: Sun,
  },
  {
    id: 5,
    title: 'Implement Recycling Program',
    description: 'Start a comprehensive recycling program to reduce waste and energy used in waste management.',
    savings: 'Indirect energy savings',
    cost: '$2,000',
    roi: 'Varies',
    icon: Recycle,
  },
];

const Recommendations: React.FC = () => {
  // ... rest of the component remains unchanged
};

export default Recommendations;