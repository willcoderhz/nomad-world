import React from 'react';
import { BookOutlined, SoundOutlined, ClockCircleOutlined, BugOutlined, WechatOutlined, BorderOutlined } from '@ant-design/icons';

const DiscoveryZone = () => {
  return (
    <div className="mt-16 lg:mr-64 container mx-auto px-4 py-16 lg:px-64 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">发现区</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectSection 
          title="水浒叶子" 
          icon={<BookOutlined />} 
          content="探索中国古典文学的魅力。" 
          link="https://willcoderhz.github.io/shuihu/"
        />
        <ProjectSection 
          title="白噪音" 
          icon={<SoundOutlined />} 
          content="提供舒缓的白噪音，帮助集中注意力或放松身心。" 
          link="https://willcoderhz.github.io/white-noise/"
        />
        <ProjectSection 
          title="番茄时钟" 
          icon={<ClockCircleOutlined />} 
          content="使用番茄工作法提高工作效率。" 
          link="https://willcoderhz.github.io/tomato-timer/"
        />
        {/* 可以继续添加更多项目区块 */}
        <ProjectSection 
          title="贪吃蛇" 
          icon={<BugOutlined />} 
          content="经典游戏贪吃蛇的现代化复刻版本。" 
          link="https://willcoderhz.github.io/Hungry-Snake/"
        />
        <ProjectSection 
          title="威聊" 
          icon={<WechatOutlined />} 
          content="一个简洁的即时通讯应用。" 
          link="https://github.com/willcoderhz/WeiChat"
        />
        <ProjectSection 
          title="五子棋" 
          icon={<BorderOutlined />} 
          content="传统五子棋游戏的数字版本，挑战你的智力。" 
          link="https://willcoderhz.github.io/gomoku/"
        />
      </div>
    </div>
  );
};

const ProjectSection = ({ title, icon, content, link }) => (
  <section className="bg-white rounded-lg border border-gray-300 shadow hover:shadow-md transition-shadow duration-300 p-6">
    <div className="flex items-center mb-3">
      <div className="text-2xl mr-2">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-700 mb-3">{content}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">访问项目</a>
  </section>
);

export default DiscoveryZone;
