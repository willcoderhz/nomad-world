// src/pages/Web3Zone.js 或 src/components/Web3Zone.js
import React from 'react';

const Web3Zone = () => {
  const web3Jobs = [
    { id: 1, title: '区块链开发工程师', company: 'ChainCorp', location: '远程', type: '全职' },
    { id: 2, title: '智能合约开发者', company: 'DAppDev', location: '远程', type: '合同工' },
    { id: 3, title: 'Web3 前端开发', company: 'FrontierTech', location: '远程', type: '全职' },
    { id: 4, title: 'Web3 产品经理', company: 'InnovateX', location: '远程', type: '全职' },
    { id: 5, title: '区块链安全工程师', company: 'SecureBlock', location: '远程', type: '兼职' },
    { id: 6, title: '加密货币分析师', company: 'CryptoAnalytics', location: '远程', type: '全职' },
    { id: 7, title: '去中心化金融专家', company: 'DeFiSolutions', location: '远程', type: '合同工' },
    { id: 8, title: 'NFT项目经理', company: 'NFTArt', location: '远程', type: '全职' },
    { id: 9, title: '区块链内容创作者', company: 'ContentChain', location: '远程', type: '兼职' },
    { id: 10, title: 'Web3 社区经理', company: 'CommunityChain', location: '远程', type: '全职' },
    { id: 11, title: '区块链数据科学家', company: 'DataBlock', location: '远程', type: '全职' },
    { id: 12, title: '加密货币交易员', company: 'TradeCrypto', location: '远程', type: '兼职' }
  ];

  return (
    <div className="container mt-16 lg:mr-64  mx-auto px-4 py-16 lg:px-64 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Web3 职业机会</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {web3Jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg border border-gray-300 shadow hover:shadow-md transition-shadow duration-300 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">{job.title}</h2>
            <p className="text-gray-700">{job.company}</p>
            <p className="text-gray-600">{job.location}</p>
            <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-4">{job.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Web3Zone;
