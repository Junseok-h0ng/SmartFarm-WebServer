import React from 'react'
import {Result} from 'antd';
 import {FrownOutlined} from '@ant-design/icons'
function NoContents(props) {
    return (
        <Result
        icon={<FrownOutlined />}
        title={props.message}
        />
    )
}
export default NoContents
