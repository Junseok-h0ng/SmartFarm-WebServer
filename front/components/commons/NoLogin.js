import React from 'react'
import { Result, Button} from 'antd';
import Link from 'next/link';

function NoLogin() {
    return (
        <div>
              <Result
                status="error"
                title="로그인이 되어있지 않습니다."
                subTitle="로그인을 다시해주세요."
                extra={[
                    <Link href="/login">
                        <Button type="primary">
                        Login
                        </Button>
                    </Link>,
                    <Link href="/">
                        <Button>
                            Go Home
                        </Button>
                    </Link>
                ]}
            ></Result>
        </div>
    )
}

export default NoLogin
