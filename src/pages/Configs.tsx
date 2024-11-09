import React from 'react';
import { Server } from 'lucide-react';

export default function Configs() {
  const configs = [
    {
      category: 'Minigames',
      templates: [
        { name: 'Bedwars', players: '8-32', version: '1.8.9 - 1.20.1' },
        { name: 'SkyWars', players: '8-16', version: '1.8.9 - 1.20.1' },
        { name: 'KitPvP', players: '20-100', version: '1.8.9 - 1.20.1' }
      ]
    },
    {
      category: 'Modpacks',
      templates: [
        { name: 'RLCraft', players: '1-10', version: '1.12.2' },
        { name: 'Better Minecraft', players: '1-20', version: '1.18.2' },
        { name: 'All The Mods 6', players: '1-15', version: '1.16.5' }
      ]
    },
    {
      category: 'Survival',
      templates: [
        { name: 'Vanilla+', players: '1-50', version: '1.20.1' },
        { name: 'Paper Optimized', players: '50-200', version: '1.20.1' },
        { name: 'Survival Games', players: '24', version: '1.20.1' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Premade Configurations</h2>
          <p className="text-xl text-gray-400">Get started instantly with our optimized server templates</p>
        </div>

        <div className="space-y-12">
          {configs.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.templates.map((template) => (
                  <div key={template.name} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
                    <div className="flex items-center mb-4">
                      <Server className="h-6 w-6 text-purple-500 mr-3" />
                      <h4 className="text-xl font-semibold text-white">{template.name}</h4>
                    </div>
                    <div className="space-y-2 text-gray-400 mb-6">
                      <p>Players: {template.players}</p>
                      <p>Version: {template.version}</p>
                    </div>
                    <button className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                      Deploy Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}