import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export default function PricingCard({ title, price, features, recommended }: PricingCardProps) {
  return (
    <div className={`bg-gray-800 rounded-xl p-8 ${recommended ? 'ring-2 ring-purple-500' : ''}`}>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-4xl font-bold text-purple-500 mb-6">${price}<span className="text-gray-400 text-lg">/mo</span></p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <FaCheck className="h-5 w-5 text-purple-500 mr-3" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
        Get Started
      </button>
    </div>
  );
}