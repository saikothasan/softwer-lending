import React from 'react';
import { Monitor, Database, Cpu } from 'lucide-react';

const Setup = () => {
  return (
    <section id="setup" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            System Requirements & Setup
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with OpenBullet in minutes. Here's everything you need to know.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gray-50 rounded-xl">
            <Monitor className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-4">Operating System</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Windows 10/11 (64-bit)</li>
              <li>macOS 10.15 or later</li>
              <li>Linux (with .NET support)</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <Cpu className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-4">Hardware</h3>
            <ul className="space-y-2 text-gray-600">
              <li>4GB RAM (8GB recommended)</li>
              <li>2GHz dual-core processor</li>
              <li>1GB free disk space</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <Database className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-4">Prerequisites</h3>
            <ul className="space-y-2 text-gray-600">
              <li>.NET 6.0 Runtime</li>
              <li>SQLite (included)</li>
              <li>Internet connection</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6">Installation Steps</h3>
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold mr-4">1</span>
              <div>
                <p className="font-medium">Download the latest release</p>
                <p className="text-gray-600">Get the latest stable version from our GitHub releases page</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold mr-4">2</span>
              <div>
                <p className="font-medium">Extract the archive</p>
                <p className="text-gray-600">Unzip the downloaded file to your preferred location</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold mr-4">3</span>
              <div>
                <p className="font-medium">Run OpenBullet.exe</p>
                <p className="text-gray-600">Launch the application and complete the initial setup wizard</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Setup;