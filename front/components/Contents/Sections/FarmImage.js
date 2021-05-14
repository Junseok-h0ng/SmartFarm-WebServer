import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {Modal,Button,Card,Checkbox,Row,Col,Tabs,Pagination,Image,DatePicker,TimePicker } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import { loadFarmImages } from '../../../_redux/slices/farm';
import LineCharts from '../../commons/Charts/LineCharts';

function FarmImage() {

    
  const dispatch = useDispatch();
  const [img, setImg] = useState([]);
  const [dateString, setDateString] = useState([]);

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
    }, [])

    const onChangeCheckBox = (key) =>{
        img[key].checked = !img[key].checked
    }

    return (
        <div>
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
        </div>
    )
}

export default FarmImage
