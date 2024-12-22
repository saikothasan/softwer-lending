import React from 'react';
import { Clock, Workflow, MousePointer, Plug } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose OpenBullet?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the advantages of using a powerful, community-driven automation framework.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <Clock className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Save Valuable Time</h3>
            <p className="text-gray-600 mb-4">
              Automate repetitive tasks and reduce manual work by up to 90%. Focus on what matters most while OpenBullet handles the routine operations.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Batch process multiple tasks simultaneously
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Schedule automated workflows
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Reduce human error in repetitive tasks
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <Workflow className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Powerful Automation</h3>
            <p className="text-gray-600 mb-4">
              Create sophisticated automation workflows with our intuitive scripting language and extensive library of functions.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Custom scripting support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Advanced pattern matching
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Parallel execution capabilities
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <MousePointer className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
            <p className="text-gray-600 mb-4">
              Get started quickly with our user-friendly interface and comprehensive documentation.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Intuitive visual interface
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Step-by-step tutorials
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Active community support
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <Plug className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
            <p className="text-gray-600 mb-4">
              Connect with your existing tools and workflows through our extensive API and plugin system.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                RESTful API support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Custom plugin development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                Third-party integrations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;