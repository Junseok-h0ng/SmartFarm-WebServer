import React from 'react';
import {Form,Input,Button} from 'antd';

function RegisterForm() {
    return (
        <div>
            <Form style={{padding:'10px',margin:'0 autox'}}>
            <div>
                <label htmlFor="name">이름</label>
                <br/>
                <Input name="name" value onChange required/>
            </div>
            <div>
                <label htmlFor="email">아이디</label>
                <br/>
                <Input name="email" value onChange required/>
            </div>
            <div>
                <label htmlFor="password">패스워드</label>
                <br/>
                <Input name="password" value onChange required/>
            </div>
            <div>
                <label htmlFor="password2">패스워드 재입력</label>
                <br/>
                <Input name="password2" value onChange required/>
            </div>
            <div style={{marginTop:'10px'}}>
                <Button style={{marginRight:'10px'}} type="primary" htmlType="submit" loading={false}>확인</Button>
            </div>
        </Form>
        </div>
    )
}

export default RegisterForm
