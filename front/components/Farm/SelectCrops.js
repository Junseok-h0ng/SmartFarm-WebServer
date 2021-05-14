import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Button,Select,message } from 'antd';
import { addCropsInfo, getCrops, getCropsInfo, loadFarmInfo } from '../../_redux/slices/farm';
import Router from 'next/router';


function SelectCrops(props) {

    const dispatch = useDispatch();
    const [crops, setCrops] = useState([]);
    const [info,setInfo] = useState("");
    const [cropsInfo,setCropsInfo] = useState({});

    const user = useSelector(state => state.user);

    useEffect(() => {
        if(!user.isLogin){
            return Router.push('/');
        }
        dispatch(getCrops({id:210005}))
        .then((res)=>{
            selectMenu(res.payload);
        });
        // 농장에 등록된 정보를 가져온다.
        dispatch(loadFarmInfo({userId:user.data._id}))
        .then((res=>{
            
            // 작물Id정보가 있는지 확인
            if(res.payload[0]){
                let crops;
                res.payload.map((payload)=>{
                    console.log(payload);
                    if(payload._id === props.pid){
                        crops = payload.crops;
                    }
                })
                onChangeCrops(crops.id,{children:crops.name});
            }
        }))
    }, [])

    const onClickButton = (id)=>{
      dispatch(getCrops({id:id}))
      .then((res)=>{
          selectMenu(res.payload);
      });
    }

    const selectMenu = (crops) =>{
        let data =[];
        crops.map((crops)=>{
            data.push(<Select.Option value={crops.id}>{crops.name}</Select.Option>)
        });
        setCrops(data);
    }

    const onChangeCrops = (id,value)=>{
        setCropsInfo({
            id:id,
            name:value.children
        });

        dispatch(getCropsInfo({id:id}))
        .then((res=>{
            setInfo(res.payload);
        }));
    }

    const onSumbitCropsInfo = ()=>{
        dispatch(addCropsInfo({
                _id:props.pid,
                crops:cropsInfo
            }
        ))
        .then(res=>{
            if(res.payload.success){
                message.success('농작물 정보를 변경했습니다.');
            }
        })
    }

    return (
        <div>
            {user.isLogin &&
                <div>
                    <Button onClick={()=>onClickButton(210005)}>밭농사</Button>
                    <Button onClick={()=>onClickButton(210001)}>채소</Button>
                    <Button onClick={()=>onClickButton(210002)}>과수</Button>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a Crops"
                        onChange={onChangeCrops}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {crops && 
                            crops
                        }
                    </Select>
                    {info &&
                        <div>
                            <h1>{cropsInfo.name}</h1>
                            <div dangerouslySetInnerHTML={{__html:info}}/>
                            <Button onClick={onSumbitCropsInfo}>확인</Button>
                        </div>
                    }  
                </div>
            }
            
        </div>
    )
}

export default SelectCrops
