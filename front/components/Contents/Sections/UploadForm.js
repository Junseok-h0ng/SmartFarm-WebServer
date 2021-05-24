import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Modal,Button,Card,Checkbox,Row,Col,Tabs,Pagination,Image,DatePicker,TimePicker,Radio, message } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import { loadFarmData, loadFarmImages, loadFarmInfo } from '../../../_redux/slices/farm';
import LineCharts from '../../commons/Charts/LineCharts';
import NoContents from '../../commons/NoContents';
import FarmImage from './FarmImage';

function UploadForm(props) {

  const dispatch = useDispatch();
  const [img, setImg] = useState([]);
  const [dateString, setDateString] = useState([]);
  const [farmList, setfarmList] = useState([]);
  const [selectFarm, setSelectFarm] = useState("");

  useEffect(() => {
    dispatch(loadFarmInfo({userId:props.userId}))
    .then(response=>{
      if(response.payload){
        setfarmList(response.payload);
      }
    })
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
      dateString.name ? filterImages.push(dateString) : null;
      props.handleCheckedImages(filterImages)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeCheckBox = (key) =>{
   img[key].checked = !img[key].checked
  }

  // const renderImage = () =>(
  //  <Row>
  //           {img[0] ?
  //            img.map((img,index)=>(
  //             <Col span={6} key={index}>
  //               <Card
  //                 hoverable
  //                 style={{width:120}}
  //                 cover={<Image width={120} height={90} src={img.src}/>} 
  //               >
  //                 <Checkbox  onChange={()=>onChangeCheckBox(index)}>{index}</Checkbox>
  //               </Card>
  //             </Col>
  //           ))
  //           :
  //           <NoContents message="이미지가 없습니다."/>
  //           }
  //         </Row>
  // )

  const onChangeImageDate = (date,dateString) =>{
    // date가 빈칸이 아닌경우에만 img불러오기
    if(date != null){
      // dispatch(loadFarmImages())
      // .then(result=>{
      //   if(result.payload){
      //     result.payload.map((payload,key)=>{
      //       const data = {
      //         key,
      //         name: key,
      //         src: "data:image/jpg;base64,"+payload,
      //         checked:false
      //       }
      //       setImg(prevImg => [...prevImg,data]);
      //     });
      //   }
      // }); 
      
      dispatch(loadFarmData({pid:selectFarm,dateString,option:'image'}))
      .then(response=>{
        if(response.payload){
          response.payload.map((payload,key)=>{
            const data={
              key,
              name: payload.fields.datetime,
              src: "data:image/jpg;base64,"+payload.fields.src,
              checked:false
            }
            console.log(response);
            setImg(prevImg => [...prevImg,data]);
          })
        }else{
          message.error('농장과 연결이 실패했습니다.');
          setSelectFarm();
        }
      }) 
    }else{
      //date가 빈칸이면 이미지 초기화
      setImg([]);
    }

  }

  const onChangeChartDate = (date,dateString) =>{
    // date가 빈칸이 아닌경우에만 date를 저장
    if(date != null){
      const data = {
        name: dateString[0] != 0 ? dateString[0]+'~'+dateString[1] : dateString[1]+'시',
        start : dateString[0],
        end : dateString[1]
      }
      setDateString(data);
      dispatch(loadFarmData({pid:selectFarm,dateString,option:'chart'}))
      .then(response=>{
        if(response.payload){
          console.log(response.payload);
        }
      })
    }else{
      //date가 빈칸이면 차트 초기화
      setDateString([]);
    }
  }

  const onChageFarmInfo = (e) =>{
    const farmId = e.target.value;
    setSelectFarm(farmId);   
  }

  const renderImage = () =>(
    <Row>
      {img && img.map((img,index)=>(
          <Col span={6} key={index}>
          <Card
              hoverable
              style={{width:120}}
              cover={<Image width={120} height={90} src={img.src}/>} 
          >
              <Checkbox  onChange={()=>onChangeCheckBox(index)}>{img.name}</Checkbox>
          </Card>
          </Col>
      ))}
    </Row>
  )

  return (
    <>
      <Button type='primary' onClick={showModal} icon={<PlusOutlined />}/>
      <Modal
      visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Tabs>
        {farmList[0] &&
          <Tabs.TabPane tab="FarmList" key="1" value={0}>
            <Row>
              <Radio.Group onChange={onChageFarmInfo} value={selectFarm}>
              {farmList.map((farm,index)=>(
                <Radio value={farm._id}>{farm.name ? farm.name : farm.ipAddress}</Radio>
              ))}
              </Radio.Group>
            </Row>
          </Tabs.TabPane>
        }
        {selectFarm &&
        <>
            <Tabs.TabPane tab="Images" key="2">
              <div className="card-container">
                  <Tabs type="card">
                    <Tabs.TabPane tab="week" key="1">
                      <DatePicker.RangePicker onChange={onChangeImageDate}/>
                      {img[0] &&
                        renderImage()
                      } 
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="today" key="2">
                      <TimePicker format={'HH'} onChange={onChangeImageDate}/>
                      {img[0] &&
                        renderImage()
                      }
                    </Tabs.TabPane>
                  </Tabs>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="data" key="3">
            <div className="card-container">
                <Tabs type="card">
                  <Tabs.TabPane tab="week" key="1">
                    <DatePicker.RangePicker onChange={onChangeChartDate}/>
                    {dateString.name &&
                      <LineCharts/>
                    } 
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="today" key="2">
                    <TimePicker format={'HH'} onChange={onChangeChartDate}/>
                    {dateString.name &&
                      <LineCharts/>
                    }
                  </Tabs.TabPane>
                </Tabs>
            </div>
            
          </Tabs.TabPane>
        </>
        }
          
      </Tabs>
      </Modal>
    </>
  );
};

export default UploadForm
