import React from 'react';
import { Cpu, Shield, Zap, Code2, Puzzle, GitBranch } from 'lucide-react';

const features = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Custom Scripting',
    description: 'Write powerful automation scripts using our intuitive LoliCode or C# syntax.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure & Private',
    description: 'Built with security in mind, ensuring your operations remain private and protected.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Optimized performance with multi-threading support for efficient task execution.'
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: 'Modular Design',
    description: 'Easily extend functionality with plugins and custom modules.'
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Resource Efficient',
    description: 'Minimal system footprint while maintaining high performance.'
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: 'Version Control',
    description: 'Built-in configuration management and version control support.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Advanced Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            OpenBullet comes packed with everything you need to automate complex web operations efficiently and securely.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl border border-gray-100 hover:border-indigo-500 transition-colors duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;