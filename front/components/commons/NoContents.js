import React from 'react'
import {Result} from 'antd';
 import {FrownOutlined} from '@ant-design/icons'
function NoContents() {
    return (
        <Result
        icon={<FrownOutlined />}
        title="작성된 포스트가 없습니다."
        />
    )
}
export default NoContents
