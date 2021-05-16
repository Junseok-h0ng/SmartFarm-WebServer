import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import Router from 'next/router';
import {Form,Input, message,Button} from 'antd';
import {logIn } from '../../_redux/slices/user';
import Link from 'next/link';
import config from '../../config/config';


function LoginForm() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitLogin = () =>{
        const data = {
            email,
            password,
            usertype:'db'
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
            min-height: 55vh;
            border: 3px solid #a0a0a0;
            border-radius: 1.1em;
            margin-top: 15%;
            // background-color: #5cb85c;
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
            <div id="flex-container">
                <Form style={{padding:'10px',margin:'0 auto',width:'60%'}} onFinish={onSubmitLogin}>
                    <div>
                        <label htmlFor="email">이메일</label>
                        <br/>
                        <Input name="email" value={email} onChange={onChangeEmail} required/>
                    </div>
                    <div>
                        <label htmlFor="password">비밀번호</label>
                        <br/>
                        <Input name="password" type="password" value={password} onChange={onChangePassword} required/>
                    </div>
                    <div align="center" >
                        <Button style={{width:'100%' ,marginTop:'20px',color:'#5cb85c', borderColor: "#5cb85c",borderRadius: '8px' }} htmlType="submit" loading={false}>로그인</Button>  
                    </div>
                    <ul>
                        <li>
                            <Link href="http://localhost:3000/api/auth/naver" >
                                <a>
                                    <img src="https://i.ibb.co/0DSXsm8/Naver-icon.png" width="66" alt="네이버 로그인"></img>
                                </a>  
                            </Link>
                        </li>
                        <li>
                        <Link href="http://localhost:3000/api/auth/kakao">
                            <a>
                                <img src="https://i.ibb.co/k0djP8x/img.jpg" width="66" alt="카카오톡 로그인"></img>
                            </a>
                        </Link>
                        </li>
                        <li>
                        <Link href="http://api.eouleuda.kro.kr/api/auth/google">
                            <a>
                                <img src="https://i.ibb.co/GJgtxdr/google.jpg" width="66" alt="구글 로그인"></img>                      
                            </a>
                        </Link>
                        </li>
                    </ul>
                </Form>
            </div>          
        </div>
    )
}

export default LoginForm
