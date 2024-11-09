import React from 'react';
import PricingCard from '../components/PricingCard';

export default function Pricing() {
  const plans = [
    {
      title: 'SMP',
      price: '9.99',
      features: [
        '4GB RAM',
        '2 CPU Cores',
        '30GB SSD Storage',
        'Unlimited Bandwidth',
        'Daily Backups',
        'DDoS Protection'
      ]
    },
    {
      title: 'FORGE',
      price: '19.99',
      features: [
        '8GB RAM',
        '4 CPU Cores',
        '50GB SSD Storage',
        'Unlimited Bandwidth',
        'Daily Backups',
        'DDoS Protection',
        'Mod Support'
      ],
      recommended: true
    },
    {
      title: 'BUNGEE',
      price: '29.99',
      features: [
        '16GB RAM',
        '6 CPU Cores',
        '80GB SSD Storage',
        'Unlimited Bandwidth',
        'Daily Backups',
        'DDoS Protection',
        'Network Support',
        'Priority Support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400">Choose the perfect plan for your Minecraft server</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}