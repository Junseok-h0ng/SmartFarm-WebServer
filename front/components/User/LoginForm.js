import React from 'react';
import Link from 'next/link';
import {Form,Input,Button} from 'antd';

function LoginForm() {
    return (
        <Form style={{padding:'10px',margin:'0 autox'}}>
            <div>
                <label htmlFor="userId">아이디</label>
                <br/>
                <Input name="userId" value onChange required/>
            </div>
            <div>
                <label htmlFor="password">비밀번호</label>
                <br/>
                <Input name="password" value onChange required/>
            </div>
            <div style={{marginTop:'10px'}}>
                <Button style={{marginRight:'10px'}} type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>

    )
}

export default LoginForm
