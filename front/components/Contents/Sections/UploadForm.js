import React,{useState} from 'react';
import {Modal,Button,Card} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

function UploadForm() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
        setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    return (
      <>
        <Button type="primary" onClick={showModal} icon={<PlusOutlined />}/>
        <Modal title="Upload" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Card
          hoverable
          style={{ width: 120 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
          </Card>
          <Card
          hoverable
          style={{ width: 120 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
          </Card>
          <Card
          hoverable
          style={{ width: 120 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
          </Card>
        </Modal>
      </>
    );
  };

export default UploadForm
