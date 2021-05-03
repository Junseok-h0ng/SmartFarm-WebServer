import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form,Input,Button} from 'antd';
import { addFarm } from '../../_redux/slices/farm';

function AddFarm(props) {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");

    const onSubmitCommit = () =>{
        setInputValue("");
        const data={
            userId: props.userId,
            address: inputValue
        }
        dispatch(addFarm(data));
    }

    const onChangeInputValue = (event) =>{
        setInputValue(event.target.value);
    }

    return (
        <div style={{marginTop:'20px'}}>
            <Form layout="horizontal" onFinish={onSubmitCommit}>
                <Form.Item>
                    <Input style={{width:'80%'}} placeholder={"스마트팜의 IP주소를 입력해주세요."} value={inputValue} onChange={onChangeInputValue}/>
                    <Button style={{width:'20%'}} type='primary' htmlType="submit">확인</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddFarm
