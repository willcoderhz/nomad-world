import React, { useState } from 'react';
import { Upload, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const PostResume = () => {
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList }) => setFileList(fileList);

  return (
    <div className="container mx-auto px-4 py-16 lg:px-64 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">上传简历</h1>
      <p className="text-center mb-4 text-lg text-gray-700">点击下方按钮上传您的简历，支持PDF和图片格式。</p>
      
      <div className="inline-block">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76" // 替换为你的上传逻辑
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          className="upload-list-inline"
        >
          {fileList.length >= 8 ? null : (
            <div className="flex flex-col items-center justify-center p-4 border border-dashed border-gray-300 rounded-lg hover:border-gray-400">
              <UploadOutlined className="text-2xl text-gray-800" />
              <div className="mt-2 text-gray-600">上传文件</div>
            </div>
          )}
        </Upload>
      </div>

      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
        className="!p-4"
      >
        <img alt="预览" className="w-full" src={previewImage} />
      </Modal>
    </div>
  );
};

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default PostResume;
