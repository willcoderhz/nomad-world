// src/pages/JobBoard.js 或 src/components/JobBoard.js
import React, { useState } from 'react';
import JobDetail from '../subpages/JobDetail';

const JobBoard = () => {
  const [selectedJob, setSelectedJob] = useState(null); 
  const jobs = [
    { id: 1, title: '前端开发工程师', company: 'XYZ 公司', location: '北京', type: '全职' },
    { id: 2, title: '产品经理', company: 'ABC 公司', location: '上海', type: '兼职' },
    { id: 3, title: '文案编辑', company: '123 公司', location: '深圳', type: '远程' },
    { id: 4, title: '后端开发工程师', company: 'DEF 公司', location: '杭州', type: '全职' },
    { id: 5, title: 'UI/UX 设计师', company: 'GHI 公司', location: '广州', type: '合同工' },
    { id: 6, title: '市场营销专员', company: 'JKL 公司', location: '南京', type: '兼职' },
    { id: 7, title: '数据分析师', company: 'MNO 公司', location: '武汉', type: '全职' },
    { id: 8, title: '全栈开发工程师', company: 'PQR 公司', location: '成都', type: '远程' },
    { id: 9, title: 'HR 经理', company: 'STU 公司', location: '西安', type: '兼职' },
    { id: 10, title: '安卓开发工程师', company: 'VWX 公司', location: '重庆', type: '全职' },
    { id: 11, title: 'iOS 开发工程师', company: 'YZ 公司', location: '苏州', type: '合同工' },
    { id: 12, title: '区块链开发工程师', company: 'ABC 公司', location: '上海', type: '全职' }
  ];

  const firstJob = jobs.length > 0 ? jobs[0] : null; 

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleBackClick = () => {
    setSelectedJob(null);
  };

  
   return (
    <div className="mt-16 lg:mr-64 container mx-auto px-4 py-16 lg:px-64">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">工作信息板</h1>
      {selectedJob ? (
        <JobDetail job={selectedJob} onBackClick={handleBackClick} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg border border-gray-300 shadow hover:shadow-md transition-shadow duration-300 p-6 cursor-pointer" onClick={() => handleJobClick(job)}>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{job.title}</h2>
              <p className="text-gray-700 font-medium">{job.company}</p>
              <p className="text-gray-600">{job.location}</p>
              <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-4">{job.type}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobBoard;
