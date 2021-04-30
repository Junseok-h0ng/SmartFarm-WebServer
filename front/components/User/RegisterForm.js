import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form,Input,Button,message} from 'antd';
import { register } from '../../_redux/slices/user';
import Router from 'next/router';

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

        if(password != password2){
            return setPassword2('');
        }

        const data ={
            name,
            email,
            password,
            password2,
            type:null
        }
        
        dispatch(register(data))
        .then(res=>{
            if(res.type === "REGISTER/fulfilled"){
                Router.push('/');
            }else{
                message.error('회원가입에 실패했습니다.');
            }
        });
    }

    return (
        <div>
            <style jsx>{`
        #container{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh;
        }   
        ul {
            width: 100%;
            list-style: none;
            text-align: center;
            justify-content: space-between;
            line-width: 100%;
            padding-left: 2px;
            margin-top:20px;
        }
        li {
            display: inline;
            margin-left: 20px;
        }
        `}</style>
            <div id="container">
                <Form style={{padding:'10px',margin:'0 auto',width:'60%'}} onFinish={onSubmitRegister}>
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
                    <div style={{marginTop:'10px', }}>
                        <Button style={{marginRight:'10px',width:'100%'}} type="primary" htmlType="submit" loading={false}>확인</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default RegisterForm
