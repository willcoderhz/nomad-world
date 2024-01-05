import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-widest mr-10">Nomad Land</span>
            <div className="flex space-x-4">
              <Link to="/about" className="hover:text-blue-200">关于我们</Link>
              <Link to="/contact" className="hover:text-blue-200">联系方式</Link>
              <Link to="/privacy" className="hover:text-blue-200">隐私政策</Link>
              <Link to="/terms" className="hover:text-blue-200">服务条款</Link>
            </div>
          </div>

          <div className="text-sm">
            © 2024 Nomad Land. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
