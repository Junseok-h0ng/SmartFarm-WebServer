import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form,Input,Button} from 'antd';
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
       dispatch(logIn(data));
    }
    const onChangeEmail = (event) =>{
        setEmail(event.target.value);
    }
    const onChangePassword = (event) =>{
        setPassword(event.target.value);
    }

    return (
        <Form style={{padding:'10px',margin:'0 autox'}} onFinish={onSubmitLogin}>
            <div>
                <label htmlFor="email">이메일</label>
                <br/>
                <Input name="email" value={email} onChange={onChangeEmail} required/>
            </div>
            <div>
                <label htmlFor="password">비밀번호</label>
                <br/>
                <Input name="password" value={password} onChange={onChangePassword} required/>
            </div>
            <div style={{marginTop:'10px'}}>
                <Button style={{marginRight:'10px'}} type="primary" htmlType="submit" loading={false}>로그인</Button>
            </div>
        </Form>

    )
}

export default LoginForm
