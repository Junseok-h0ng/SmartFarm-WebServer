import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Modal,Button,Card,Checkbox,Row,Col,Tabs,Pagination } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import { loadFarmImages } from '../../../_redux/_reducer/farmReducer';

function UploadForm() {

  const dispatch = useDispatch();
  const farm = useSelector(state => state.farm);
  const [img, setImg] = useState(null);

  useEffect(() => {
    dispatch(loadFarmImages())
    .then(result=>{
      console.log(result);
      if(result.payload){
        setImg("data:image/png;base64,"+result.payload)
      }
      
    })
  }, [])

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
          <Col span={6}>
            <Card
            hoverable
            style={{ width: 120 }}
            cover={<img alt="example" src={img?img:null}/>}
            >
              <Checkbox>1</Checkbox>
            </Card>
          </Col>
          <Col span={6}>
            <Card
            hoverable
            style={{ width: 120 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Checkbox>1</Checkbox>
            </Card>
          </Col>
        </Row>
        <Pagination style={{paddingTop:'20px',display:'flex', justifyContent:'center',alignItems:'center',
          width:'100%'}} defaultCurrent={1} total={50}/>
      </Modal>
    </>
  );
};

export default UploadForm
