import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // 导入react-quill样式

const PostJob = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (content) => {
    setContent(content);
  }

  const handleSubmit = () => {
    console.log(content); // 这里可以替换为提交内容的逻辑
  }

  return (
    <div className="mt-16 lg:mr-64 container mx-auto px-4 py-16 lg:px-64 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">发布职位</h1>
      
      <div className="bg-white border border-gray-300 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
        <ReactQuill 
          theme="snow" 
          value={content} 
          onChange={handleContentChange} 
          className="mb-6 text-gray-700 h-96" // 设置了高度
        />

        <div className="flex justify-center"> {/* 添加flex容器以居中按钮 */}
          <button 
            onClick={handleSubmit} 
            className="mt-6 bg-green-200 hover:bg-green-300 text-green-800 font-bold py-2 px-4 rounded inline-flex items-center transition duration-300"
          >
            提交
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
