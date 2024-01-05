// src/components/Sidebar/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-75screen fixed right-0 top-24 right-8 w-46 bg-blue-300 shadow-lg rounded-xl">
      <div className="px-6 py-4">
      <div className="flex justify-center items-center">
      <div className="text-white text-lg font-semibold">菜单</div>
      </div>
        <div className="flex justify-center items-center">
        <nav className="mt-6">
          <Link className="block text-white py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" to="/postjob">发布招聘</Link>
          <Link className="block text-white py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" to="/posttopic">发布话题</Link>
          <Link className="block text-white py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" to="/postresume">上传简历</Link>
          {/* 更多链接或功能按钮 */}
        </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
