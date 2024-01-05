import React from 'react';
import { LaptopOutlined, BulbOutlined, BookOutlined, CodeOutlined, TeamOutlined, MessageOutlined } from '@ant-design/icons';

const LearningZone = () => {
  return (
    <div className="mt-16 lg:mr-64 container mx-auto px-4 py-16 lg:px-64 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">学习区</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 现有学习区块 */}
        <Section title="技术讨论" icon={<LaptopOutlined />} content="这里是关于最新技术的讨论和学习资源。" />
        <Section title="产品管理" icon={<BulbOutlined />} content="探索产品管理的最佳实践和策略。" />
        <Section title="语言学习" icon={<BookOutlined />} content="提高语言技能，探索不同语言的学习资源。" />

        {/* 新增学习区块 */}
        <Section title="编程基础" icon={<CodeOutlined />} content="深入了解各种编程语言和技术。" />
        <Section title="团队协作" icon={<TeamOutlined />} content="学习如何在团队中有效沟通和协作。" />
        <Section title="沟通技巧" icon={<MessageOutlined />} content="提升职场沟通和谈判技巧。" />
        {/* 可以继续添加更多区块 */}
      </div>
    </div>
  );
};

const Section = ({ title, icon, content }) => (
  <section className="bg-white rounded-lg border border-gray-300 shadow hover:shadow-md transition-shadow duration-300 p-6">
    <div className="flex items-center mb-3">
      <div className="text-2xl mr-2">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-700">{content}</p>
    <ul className="list-disc pl-5 mt-3 text-gray-600">
      <li>内容1</li>
      <li>内容2</li>
      <li>内容3</li>
      {/* 更多内容 */}
    </ul>
  </section>
);

export default LearningZone;

