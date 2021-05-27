import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import Router from 'next/router';
import {Form,Input, message,Button,Modal} from 'antd';
import {logIn } from '../../_redux/slices/user';
import Link from 'next/link';

function LoginForm(props) {

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

    const changeLoginMode = ()=>{
        props.changeLoginMode(false);
    }



    return (
        <div>
        <style jsx>{`
        #right {
            float: right;
            margin-right: 20px;
          }
          #left {
            margin-left: 15px;
          }
          th,
          td {
            text-align: center;
            vertical-align: top;
            width:300px;
          }
          #flex-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 18vh;
          }
          #line {
            border: 2.2px solid #a0a0a0;
            border-radius: 1.2em;
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

        <div id='line'>
        <Button style={{position: 'absolute', top: 20, right: 20,color:'#5cb85c', borderColor: "#5cb85c",borderRadius: '8px' }}onClick={changeLoginMode}>회원가입</Button> 
                <br/>
                    <div>        
                    <Form style={{padding:'10px',margin:'0 auto',width:'60%'}} onFinish={onSubmitLogin}>         
                        <div id='flex-container'>             
                            <table>
                                <tr>
                                    <th>
                                        <div>
                                            <label htmlFor="email">이메일</label>
                                            <br/>
                                            <Input name="email" value={email} onChange={onChangeEmail} required/>
                                        </div>          
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <div>
                                            <label htmlFor="password">비밀번호</label>
                                            <br/>
                                            <Input name="password" type="password" value={password} onChange={onChangePassword} required/>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div align="center" >
                                            <Button style={{width:'100%' ,marginTop:'10px',color:'#5cb85c', borderColor: "#5cb85c",borderRadius: '8px' }} htmlType="submit" loading={false}>로그인</Button>
                                        </div>                                            
                                    </td>
                                </tr>
                                <tr>
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
                                        <Link href="http://localhost:3000/api/auth/google">
                                            <a>
                                                <img src="https://i.ibb.co/GJgtxdr/google.jpg" width="66" alt="구글 로그인"></img>                      
                                            </a>
                                        </Link>
                                        </li>
                                    </ul>
                                </tr>
                            </table>
                        </div>   
                        </Form>   
                    </div>
                    <br/>
                </div>
        </div>
    )
}

export default LoginForm
