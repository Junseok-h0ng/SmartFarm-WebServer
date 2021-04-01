import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Modal,Button,Card,Checkbox,Row,Col,Tabs,Pagination,Image } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import { loadFarmImages } from '../../../_redux/_reducer/farmReducer';

function UploadForm() {

  const dispatch = useDispatch();
  const [img, setImg] = useState([]);

  useEffect(() => {
    dispatch(loadFarmImages())
    .then(result=>{
      if(result.payload){
        result.payload.map((payload)=>{
          const data = "data:image/jpg;base64,"+payload
          setImg(prevImg => [...prevImg,data]);
        });
      }
    });
  }, []);

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
      <Modal title={
        <Tabs>
        <Tabs.TabPane tab="Images" key="1">
        </Tabs.TabPane>
        <Tabs.TabPane tab="data" key="2">
        </Tabs.TabPane>
      </Tabs>
      }
      visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Row>
          {img && img.map((img,index)=>(
            <Col span={6}>
              <Card
                key={index}
                hoverable
                style={{width:120}}
                cover={<Image width={120} height={90} src={img}/>} 
              >
                <Checkbox>{index}</Checkbox>
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination style={{paddingTop:'20px',display:'flex', justifyContent:'center',alignItems:'center',
          width:'100%'}} defaultCurrent={1} total={50}/>
      </Modal>
    </>
  );
};

export default UploadForm
