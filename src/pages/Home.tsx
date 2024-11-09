import React from 'react';
import { Link } from 'react-router-dom';
import { FaServer, FaShieldAlt, FaBolt, FaHeadset, FaRocket, FaCloud } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=2000&q=80"
            alt="Server room"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
        </div>
        
        <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6">
                <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                  High Performance
                  <span className="text-purple-500"> Minecraft Hosting</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Experience premium Minecraft hosting with instant setup, 24/7 support, and powerful hardware. Start your server in seconds.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/pricing" className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                    Get Started
                  </Link>
                  <Link to="/templates" className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                    View Templates
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block lg:col-span-6">
                <img
                  src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=800&q=80"
                  alt="Minecraft server"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose jeekie.host?</h2>
            <p className="text-xl text-gray-400">Experience the difference with our premium features</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRocket className="h-8 w-8" />,
                title: "Instant Setup",
                description: "Get your server running in under 60 seconds with our automated deployment system"
              },
              {
                icon: <FaShieldAlt className="h-8 w-8" />,
                title: "DDoS Protection",
                description: "Enterprise-grade protection against attacks, keeping your server online 24/7"
              },
              {
                icon: <FaHeadset className="h-8 w-8" />,
                title: "24/7 Support",
                description: "Expert support team available around the clock to help you with any issues"
              },
              {
                icon: <FaBolt className="h-8 w-8" />,
                title: "High Performance",
                description: "Powered by latest gen processors and NVMe SSDs for maximum speed"
              },
              {
                icon: <FaCloud className="h-8 w-8" />,
                title: "Automatic Backups",
                description: "Daily backups of your server with easy restore options"
              },
              {
                icon: <FaServer className="h-8 w-8" />,
                title: "Custom Control Panel",
                description: "Intuitive control panel for easy server management and monitoring"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all">
                <div className="text-purple-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "99.9%", label: "Uptime" },
              { number: "10K+", label: "Active Servers" },
              { number: "<15ms", label: "Average Latency" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-purple-500 mb-2">{stat.number}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-400">Join thousands of satisfied server owners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Best Minecraft hosting I've ever used. The performance is incredible!",
                author: "Alex M.",
                role: "Network Owner"
              },
              {
                quote: "Setup was instant and the support team is always helpful. Highly recommended!",
                author: "Sarah K.",
                role: "Community Manager"
              },
              {
                quote: "The custom control panel makes managing my server so much easier.",
                author: "Mike R.",
                role: "Server Admin"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8">
                <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-purple-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Server?</h2>
          <p className="text-xl text-gray-400 mb-8">Get started in minutes with our instant setup process</p>
          <Link to="/pricing" className="inline-block bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
            View Plans
          </Link>
        </div>
      </div>
    </div>
  );
}