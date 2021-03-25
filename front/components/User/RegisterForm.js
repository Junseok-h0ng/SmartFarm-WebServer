import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form,Input,Button,message} from 'antd';
import { register } from '../../_redux/_reducer/userReducer';

function RegisterForm() {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const onChangeName = (event) =>{
        setName(event.target.value);
    }    
    const onChangeEmail = (event) =>{
        setEmail(event.target.value);
    }
    const onChangePassword = (event) =>{
        setPassword(event.target.value);
    }
    const onChangePassword2 = (event) =>{
        setPassword2(event.target.value);
    }

    const onSubmitRegister = ()=>{

        // if(password != password2){
            
        // }
        const data ={
            name,
            email,
            password,
            password2
        }
        dispatch(register(data));
    }

    return (
        <div>
            <Form style={{padding:'10px',margin:'0 autox'}} onFinish={onSubmitRegister}>
            <div>
                <label htmlFor="name">이름</label>
                <br/>
                <Input name="name" value={name} onChange={onChangeName} required/>
            </div>
            <div>
                <label htmlFor="email">이메일</label>
                <br/>
                <Input name="email" value={email} onChange={onChangeEmail} required/>
            </div>
            <div>
                <label htmlFor="password">패스워드</label>
                <br/>
                <Input name="password" type="password" value={password} onChange={onChangePassword} required/>
            </div>
            <div>
                <label htmlFor="password2">패스워드 재입력</label>
                <br/>
                <Input name="password2" type="password" value={password2} onChange={onChangePassword2} required/>
            </div>
            <div style={{marginTop:'10px'}}>
                <Button style={{marginRight:'10px'}} type="primary" htmlType="submit" loading={false}>확인</Button>
            </div>
        </Form>
        </div>
    )
}

export default RegisterForm
