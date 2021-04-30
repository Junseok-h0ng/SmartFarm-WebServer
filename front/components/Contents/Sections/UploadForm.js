import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Modal,Button,Card,Checkbox,Row,Col,Tabs,Pagination,Image,DatePicker,TimePicker } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import { loadFarmImages } from '../../../_redux/slices/farm';

function UploadForm(props) {

  const dispatch = useDispatch();
  const [img, setImg] = useState([]);
  const [pageKey, setPageKey] = useState(1)

  useEffect(() => {
    dispatch(loadFarmImages())
    .then(result=>{
      if(result.payload){
        result.payload.map((payload,key)=>{
          const data = {
            key,
            name: key,
            src: "data:image/jpg;base64,"+payload,
            checked:false
          }
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
      const images = img.map((img)=> img.checked ? img : null);
      const filterImages = images.filter((img)  =>{
        return img != null;
      });
      props.handleCheckedImages(filterImages)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeCheckBox = (key) =>{
   img[key].checked = !img[key].checked
  }

  const onChangePage = (page,pageSize)=>{

    dispatch(loadFarmImages())
    .then(res=>{
      if(res.payload.length != 0){
        res.payload.map((payload,key)=>{
          const data = {
            key,
            name: key,
            src: "data:image/jpg;base64,"+payload,
            checked:false
          }

          setImg(prevImg => [...prevImg,data]);
      });
     }
    });
  }

  const currentPage = (key) =>{
    console.log(key);
    setPageKey(key)
  }

  const renderData = () =>(
    <Row>

    </Row>
  )
  const renderImage = ()=>(
      <Row>
        {img && img.map((img,index)=>(
          <Col span={6} key={index}>
            <Card
              hoverable
              style={{width:120}}
              cover={<Image width={120} height={90} src={img.src}/>} 
            >
              <Checkbox  onChange={()=>onChangeCheckBox(index)}>{index}</Checkbox>
            </Card>
          </Col>
        ))}
      </Row>
  )

  return (
    <>
      <Button type="primary" onClick={showModal} icon={<PlusOutlined />}/>
      <Modal
      visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Tabs onChange={currentPage}>
        <Tabs.TabPane tab="Images" key="1">
        <Row>
          {img && img.map((img,index)=>(
            <Col span={6} key={index}>
              <Card
                hoverable
                style={{width:120}}
                cover={<Image width={120} height={90} src={img.src}/>} 
              >
                <Checkbox  onChange={()=>onChangeCheckBox(index)}>{index}</Checkbox>
              </Card>
            </Col>
          ))}
        </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="data" key="2">
          <div className="card-container">
              <Tabs type="card">
                <Tabs.TabPane tab="week" key="1">
                  <DatePicker.RangePicker/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="today" key="2">
                  <TimePicker format={'HH'}/>
                </Tabs.TabPane>
              </Tabs>
          </div>
          
        </Tabs.TabPane>
      </Tabs>
        {/* {pageKey == 1 ?
          1
        :
          renderData()
        } */}
        {/* <Pagination style={{paddingTop:'20px',display:'flex', justifyContent:'center',alignItems:'center',
          width:'100%'}} pageSize={8} onChange={onChangePage} defaultCurrent={1} total={50}/> */}
      </Modal>
    </>
  );
};

export default UploadForm
