import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Automate Your Web Operations with Precision
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              OpenBullet is a powerful, open-source web automation framework that helps developers and security researchers streamline their workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#download" 
                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700">
                Download Now
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#documentation" 
                 className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-50">
                View Documentation
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-2xl p-4">
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <Terminal className="text-white mb-4" size={32} />
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`> OpenBullet initialized
> Loading configuration...
> Config loaded successfully
> Starting automation sequence...
> Progress: ██████████ 100%
> Task completed successfully`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;