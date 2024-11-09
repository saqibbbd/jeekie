import React, { useState } from 'react';
import { FaMemory, FaMicrochip, FaHdd, FaWifi } from 'react-icons/fa';

export default function Custom() {
  const [ram, setRam] = useState(4);
  const [cpu, setCpu] = useState(2);
  const [storage, setStorage] = useState(20);
  const price = (ram * 2.5 + cpu * 5 + storage * 0.1).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Custom Specification</h2>
          <p className="text-xl text-gray-400">Build your perfect server</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <FaMemory className="h-6 w-6 text-purple-500 mr-3" />
                <label className="text-white text-lg font-semibold">RAM (GB)</label>
              </div>
              <input
                type="range"
                min="4"
                max="32"
                value={ram}
                onChange={(e) => setRam(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-gray-400 mt-2">
                <span>4GB</span>
                <span>{ram}GB</span>
                <span>32GB</span>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <FaMicrochip className="h-6 w-6 text-purple-500 mr-3" />
                <label className="text-white text-lg font-semibold">CPU Cores</label>
              </div>
              <input
                type="range"
                min="2"
                max="8"
                value={cpu}
                onChange={(e) => setCpu(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-gray-400 mt-2">
                <span>2 Cores</span>
                <span>{cpu} Cores</span>
                <span>8 Cores</span>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <FaHdd className="h-6 w-6 text-purple-500 mr-3" />
                <label className="text-white text-lg font-semibold">Storage (GB)</label>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={storage}
                onChange={(e) => setStorage(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-gray-400 mt-2">
                <span>20GB</span>
                <span>{storage}GB</span>
                <span>100GB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Total Price</h3>
            <p className="text-3xl font-bold text-purple-500">${price}/mo</p>
          </div>
          <div className="space-y-4 mb-8">
            <div className="flex items-center text-gray-400">
              <FaWifi className="h-5 w-5 text-purple-500 mr-3" />
              <span>Unlimited Bandwidth</span>
            </div>
            <div className="flex items-center text-gray-400">
              <FaHdd className="h-5 w-5 text-purple-500 mr-3" />
              <span>NVMe SSD Storage</span>
            </div>
          </div>
          <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
            Deploy Server
          </button>
        </div>
      </div>
    </div>
  );
}