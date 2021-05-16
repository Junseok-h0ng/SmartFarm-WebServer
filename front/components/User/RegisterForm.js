import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form,Input,Button,message} from 'antd';
import { register } from '../../_redux/_reducer/userReducer';
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
            password2
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

            #flex-container { 
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 55vh;
                border: 3px solid #a0a0a0;
                border-radius: 1.1em;
                margin-top: 15%;
                // background-color: #5cb85c;
            }

            #log_btn {
                color: #5cb85c;;
                padding: 5px;
                border: 2px solid #5cb85c;
                background-color: rgba(0,0,0,0); 
                border-radius: 8px;
                width: 99%;
            }

        `}</style>

        <div id='flex-container'>
            <Form style={{padding:'10px',margin:'0 autox'}} onFinish={onSubmitRegister}>
            <div>
                <label htmlFor="name">이름</label>
                <br/>
                <Input name="name" value={name} onChange={onChangeName} required/>
            </div>
            <br/>
            <div>
                <label htmlFor="email">이메일</label>
                <br/>
                <Input name="email" value={email} onChange={onChangeEmail} required/>
            </div>
            <br/>
            <div>
                <label htmlFor="password">패스워드</label>
                <br/>
                <Input name="password" type="password" value={password} onChange={onChangePassword} required/>
            </div>
            <br/>
            <div>
                <label htmlFor="password2">패스워드 재입력</label>
                <br/>
                <Input name="password2" type="password" value={password2} onChange={onChangePassword2} required/>
            </div>
            <br/>
            <div style={{marginTop:'10px'}}>
                <button id='log_btn' htmlType="submit" loading={false}>확인</button>
            </div>
            <h2>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</h2>
        </Form>
        
        </div>
        </div>
    )
}

export default RegisterForm
