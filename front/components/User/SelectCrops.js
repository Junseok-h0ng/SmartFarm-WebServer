import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Button,Select,message } from 'antd';
// import { addCropsInfo, getCrops, getCropsInfo, loadFarmInfo } from '../../_redux/slices/farm';
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

    const mycss = `
    @media (min-width:600px){
        .inner_TextArea {
     
            border-radius: 7px;;        
            width: 43%;
            margin-left: auto;
            margin-right: auto;    
            /* text-align: center; */
        }
    }    
    
    @media (max-width:600px){
        .inner_TextArea {
            width: 98%;
            /* text-align: center; */
        }
    }
    
    .table_tit {
        font-weight: bolder;
    }
    
    caption {
        display: none;
    }
    
    p {
        font-size: 130%;
    }
    
    h6 {
        font-size: 175%;
    }
    
    h6::before {
        content: 'o ';
    }
    
    ul {
        list-style:none;
        font-size: 115%;
        padding: 15px 10px 15px 10px;  
    }
    
    
    li  li { 
        list-style-type: none;
        position: relative;
        padding: 15px;
        font-weight: normal;
        border-radius: 1.1em;
        margin-bottom: 5px;
        border: 2px solid gray;
        color: rgb(41, 23, 23);
    }
    
    .cms_table {
        display: table;
        margin: auto;
        width: 99%;
    }   
    
    .ce.NamoSE_border_show.pe_qF {
        width: 15%; padding: 10px; font-weight: bold; vertical-align: center; color: #fff; background: #5cb85c ;
    }
    
    .ce.pe_qF {
        width: 15%; padding: 10px; font-weight: bold; vertical-align: center; color: #fff; background: #5cb85c ;
    }
    .ce {
        width: 15%;  padding: 10px; font-weight: lighter; vertical-align: center; border-bottom: 1px solid #ccc; background: #eee;
    }

    
    `

    return (

        <div>
            <style jsx>{` 

            #Select_btn {
                box-shadow:inset 0px 1px 0px 0px #a4e271;
                background-color:#89c403;
                border-radius: 2px;
                border:1px solid #74b807;
                display:inline-block;
                cursor:pointer;
                color:#ffffff;
                font-weight:bold;
                padding: 4px 15px;
                text-decoration:none;
                text-shadow:0px 1px 0px #528009;
            }

            `}</style> 

            {/* {user.isLogin && */}
            {
                <div width='100%'>
                    <button id= 'Select_btn' onClick={()=>onClickButton(210005)}>밭농사</button>
                    <button id= 'Select_btn' onClick={()=>onClickButton(210001)}>채소</button>
                    <button id= 'Select_btn' onClick={()=>onClickButton(210002)}>과수</button>
                    <Select
                        showSearch
                        style={{ width: '66%' }}
                        placeholder="Select a Crops"
                        onChange={onChangeCrops}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {crops && 
                            crops}
                    </Select>
                    {info &&
                        <>
                            <h1>{cropsInfo.name}</h1>
                            <style>{mycss}</style>
                            <div dangerouslySetInnerHTML={{__html:info}}></div>
                            <div dangerouslySetInnerHTML={{__html:info}}></div>
                            <Button onClick={onSumbitCropsInfo}>확인</Button>
                        </>
                    }  
                </div>
            }
            
        </div>
    )
}

export default SelectCrops
