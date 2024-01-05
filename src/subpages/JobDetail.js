import React from 'react';

const JobDetail = ({ job, onBackClick }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-md p-6">
      <button onClick={onBackClick} className="text-blue-600 hover:text-blue-800 mb-4">返回</button>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">{job.company}</h2>
      <p className="text-gray-600 mb-1"><strong>地点：</strong>{job.location}</p>
      <p className="text-gray-600 mb-1"><strong>类型：</strong>{job.type}</p>
      <p className="text-gray-600 mb-1"><strong>薪资范围：</strong>面议</p>

      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">职位描述：</h3>
      <ul className="list-disc pl-5 text-gray-600 mb-4">
        <li>负责公司前端项目的开发和维护。</li>
        <li>与设计团队合作，将设计稿转化为高质量的代码。</li>
        <li>优化网站性能，提升用户体验。</li>
        {/* 这里可以根据实际情况添加更多职位描述 */}
      </ul>

      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">技能要求：</h3>
      <ul className="list-disc pl-5 text-gray-600 mb-4">
        <li>精通 HTML, CSS, JavaScript。</li>
        <li>熟悉 React 或 Vue 等现代前端框架。</li>
        <li>了解 Web 性能优化和跨浏览器兼容性问题。</li>
        {/* 这里可以根据实际情况添加更多技能要求 */}
      </ul>

      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">工作职责：</h3>
      <ul className="list-disc pl-5 text-gray-600 mb-4">
        <li>编写清晰、高效、可维护的代码。</li>
        <li>参与产品的前端设计和架构决策。</li>
        <li>与团队成员协作，共同解决技术难题。</li>
        {/* 这里可以根据实际情况添加更多工作职责 */}
      </ul>

      {/* 申请职位按钮 */}
      <div className="mt-6 flex ">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          申请职位
        </button>
      </div>
    </div>
  );
};

export default JobDetail;

