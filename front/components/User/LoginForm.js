import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import Router from 'next/router';
import {Form,Input,Button, message} from 'antd';
import { logIn } from '../../_redux/_reducer/userReducer';

function LoginForm() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitLogin = () =>{
        const data = {
            email,
            password
        }
       dispatch(logIn(data))
       .then(res=>{
           if(res.type === 'LOG_IN/fulfilled'){
               Router.push('/');
           }else{
               message.error('로그인에 실패했습니다.')
           }
       });
    }
    const onChangeEmail = (event) =>{
        setEmail(event.target.value);
    }
    const onChangePassword = (event) =>{
        setPassword(event.target.value);
    }

    return (
        <div>
        <style jsx>{`   

         #flex-container { 
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 85vh;
            border: 3px solid #a0a0a0;
            border-radius: 1.1em;
        }

        ul {
            width: 100%;
            list-style: none;
            text-align: center;
            justify-content: space-between;
            line-width: 100%;
            padding-left: 2px;
        }

        li {
            display: inline;
        }

        `}</style>
    
        <div id='flex-container'>
        <Form style={{padding:'10px',margin:'0 autox'}} onFinish={onSubmitLogin}>

            <div>
                <label htmlFor="email">이메일</label>
                <Input name="email" value={email} onChange={onChangeEmail} required/>
            </div>
            <br/>
            <div>
                <label htmlFor="password">비밀번호</label>
                <Input name="password" type="password" value={password} onChange={onChangePassword} required/>
            </div>

            <br/>
            <br/>

            <ul>             
            <li>
                <a href="#">
                    <img src="https://i.ibb.co/0DSXsm8/Naver-icon.png" width="17%" alt="네이버 로그인"></img>
                    {/* <span id = 'font_White'>&nbsp;네이버 로그인</span> */}
                </a>  
            </li>      
            &emsp;
            <li>
                <a href="#">
                    <img src="https://i.ibb.co/k0djP8x/img.jpg" width="17%" alt="카카오톡 로그인"></img>
                    {/* <span id = 'font_Black'>&nbsp;카카오톡 로그인</span> */}
                </a>
            </li>
            &emsp;
            <li>
                <a href="#">
                    <img src="https://i.ibb.co/GJgtxdr/google.jpg" width="17%" alt="구글 로그인"></img>
                    {/* <span id = 'font_Black'>&nbsp;구글 로그인</span> */}
                </a>
            </li> 
            </ul>

            <br/> 
            <div style={{padding:'10px',margin:'0 autox'}} align='center' width='100%'>
                <Button style={{marginRight:'10px'}} type="primary" htmlType="submit" loading={false}>로그인</Button>
            </div>
        </Form>
        </div> 
        </div>

    )
}

export default LoginForm
