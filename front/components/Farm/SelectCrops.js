import React,{useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';
import { Button,Select } from 'antd';
import { getCrops, getCropsInfo } from '../../_redux/slices/farm';


function SelectCrops() {

    const dispatch = useDispatch();
    const [crops, setCrops] = useState([]);
    const [info,setInfo] = useState("");

    useEffect(() => {
        dispatch(getCrops({id:210005}))
        .then((res)=>{
            selectMenu(res.payload);
        });
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

    const onChangeCrops = (id)=>{
        dispatch(getCropsInfo({id:id}))
        .then((res=>{
            setInfo(res.payload);
        }))
    }
   
    return (
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
                <div dangerouslySetInnerHTML={{__html:info}}></div>
            }
            
        </div>
    )
}

export default SelectCrops
