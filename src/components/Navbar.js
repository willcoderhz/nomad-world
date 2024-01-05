import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';

const { Search } = Input;

const Navbar = () => {

  const onSearch = value => console.log(value);

  return (
    <nav className="bg-blue-400 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold tracking-widest">Nomad Land</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/job-board" className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">求职区</Link>
                <Link to="/learning-zone" className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">学习区</Link>
                <Link to="/web3-zone" className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Web3区</Link>
                <Link to="/community-board" className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">社群</Link>
                <Link to="/discover" className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">发现</Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Ant Design 搜索栏 */}
            <Search
              placeholder="搜索"
              allowClear
              enterButton
              size="large"
              onSearch={onSearch}
            />
          </div>

          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm">登录</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm ml-6">注册</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
