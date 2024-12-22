import React from 'react';
import { Github, MessageCircle, Book, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">OpenBullet</h3>
            <p className="text-sm">
              A powerful, open-source web automation framework for developers and security researchers.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#documentation" className="hover:text-white flex items-center">
                  <Book size={16} className="mr-2" />
                  Documentation
                </a>
              </li>
              <li>
                <a href="#github" className="hover:text-white flex items-center">
                  <Github size={16} className="mr-2" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-white flex items-center">
                  <MessageCircle size={16} className="mr-2" />
                  Community Forum
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#terms" className="hover:text-white">Terms of Service</a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#license" className="hover:text-white">License</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Security</h4>
            <div className="flex items-start space-x-2">
              <Shield size={20} className="text-indigo-400 mt-1" />
              <p className="text-sm">
                OpenBullet is designed for security testing and automation purposes only. Users are responsible for complying with applicable laws and regulations.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} OpenBullet. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#github" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="#discord" className="text-gray-400 hover:text-white">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;