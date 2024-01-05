import React from 'react';
import { 
    CodeOutlined, ProjectOutlined, FileTextOutlined, DatabaseOutlined, 
    SketchOutlined, BulbOutlined, BarChartOutlined, AppstoreOutlined, 
    TeamOutlined, AndroidOutlined, AppleOutlined, LinkOutlined 
} from '@ant-design/icons';

const CommunityBoard = () => {
    const communities = [
        { id: 1, name: '前端开发者社群', region: '北京', specialty: '前端开发', icon: <CodeOutlined /> },
        { id: 2, name: '产品经理圈', region: '上海', specialty: '产品管理', icon: <ProjectOutlined /> },
        { id: 3, name: '文案创作群', region: '深圳', specialty: '内容创作', icon: <FileTextOutlined /> },
        { id: 4, name: '后端技术交流', region: '杭州', specialty: '后端开发', icon: <DatabaseOutlined /> },
        { id: 5, name: 'UI/UX 设计师沙龙', region: '广州', specialty: 'UI/UX 设计', icon: <SketchOutlined /> },
        { id: 6, name: '市场营销专业群', region: '南京', specialty: '市场营销', icon: <BulbOutlined /> },
        { id: 7, name: '数据分析师论坛', region: '武汉', specialty: '数据分析', icon: <BarChartOutlined /> },
        { id: 8, name: '全栈开发者社区', region: '成都', specialty: '全栈开发', icon: <AppstoreOutlined /> },
        { id: 9, name: '人力资源管理', region: '西安', specialty: '人力资源', icon: <TeamOutlined /> },
        { id: 10, name: '安卓开发者集合', region: '重庆', specialty: '安卓开发', icon: <AndroidOutlined /> },
        { id: 11, name: 'iOS 开发者交流', region: '苏州', specialty: 'iOS 开发', icon: <AppleOutlined /> },
        { id: 12, name: '区块链技术圈', region: '上海', specialty: '区块链技术', icon: <LinkOutlined /> }
    ];

    return (
        <div className="container mx-auto mt-16 lg:mr-64 px-4 py-16 lg:px-64 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">远程工作社群</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {communities.map((community) => (
                    <div key={community.id} className="bg-white rounded-lg border border-gray-300 shadow hover:shadow-md transition-shadow duration-300 p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">{community.icon}<span className="ml-2">{community.name}</span></h2>
                        <p className="text-gray-700">{community.region}</p>
                        <p className="text-gray-600 mb-4">{community.specialty}</p>
                        <button 
                            className="bg-green-200 hover:bg-green-300 text-green-800 font-bold py-2 px-4 rounded inline-flex items-center"
                            onClick={() => console.log(`Joining ${community.name}`)}
                        >
                            加入社群
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunityBoard;
