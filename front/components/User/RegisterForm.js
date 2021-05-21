import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form,Input,Button,message} from 'antd';
import { register } from '../../_redux/slices/user';
import Router from 'next/router';

function RegisterForm(props) {

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
                setName('');
                setEmail('');
                setPassword('');
                setPassword2('');
                message.success('회원가입에 성공했습니다.');
                props.changeLoginMode(true);
            }else{
                message.error('회원가입에 실패했습니다.');
            }
        });
    }

    const changeLoginMode = ()=>{
        props.changeLoginMode(true);
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
                width: 300px;
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
        <Button style={{position: 'absolute', top: 20, right: 20,color:'#5cb85c', borderColor: "#5cb85c",borderRadius: '8px' }}onClick={changeLoginMode}>로그인</Button> 
                <br/>
                    <div>        
                    <Form style={{padding:'10px',margin:'0 auto',width:'60%'}} onFinish={onSubmitRegister}>        
                        <div id='flex-container'>             
                            <table>
                                <tr>
                                    <th>
                                        <div>
                                            <label htmlFor="name">이름</label>
                                            <br/>
                                            <Input name="name" value={name} onChange={onChangeName} required/>
                                        </div>          
                                    </th>
                                </tr>
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
                                        <label htmlFor="password">패스워드</label>
                                        <br/>
                                        <Input name="password" type="password" value={password} onChange={onChangePassword} required/>                                        
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <label htmlFor="password2">패스워드 재입력</label>
                                        <br/>
                                        <Input name="password2" type="password" value={password2} onChange={onChangePassword2} required/>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div style={{marginTop:'10px'}}>
                                            <Button style={{marginRight:'10px',width:'100%',color:'#5cb85c', borderColor: "#5cb85c",borderRadius: '8px' }} htmlType="submit" loading={false}>확인</Button>
                                        </div>
                                    </td>
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

export default RegisterForm
