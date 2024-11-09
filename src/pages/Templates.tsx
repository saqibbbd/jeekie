import React from 'react';
import { FaGamepad, FaCubes, FaNetworkWired } from 'react-icons/fa';

export default function Templates() {
  const templates = [
    {
      title: 'Bedwars',
      icon: FaGamepad,
      description: 'Pre-configured Bedwars server with popular plugins and optimized settings',
      specs: '4GB RAM | 2 CPU Cores'
    },
    {
      title: 'FTB Modpack',
      icon: FaCubes,
      description: 'Feed The Beast modpack server with automatic mod installation',
      specs: '8GB RAM | 4 CPU Cores'
    },
    {
      title: 'Network Bundle',
      icon: FaNetworkWired,
      description: 'Complete network setup with lobby, games, and proxy configuration',
      specs: '16GB RAM | 6 CPU Cores'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Premade Configurations</h2>
          <p className="text-xl text-gray-400">Ready-to-go server templates for popular game modes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <div key={template.title} className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors">
                <Icon className="h-12 w-12 text-purple-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{template.title}</h3>
                <p className="text-gray-400 mb-6">{template.description}</p>
                <p className="text-sm text-purple-400 mb-6">{template.specs}</p>
                <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                  Deploy Template
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}