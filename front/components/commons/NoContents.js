import React from 'react'
import {Result} from 'antd';
 import {FrownOutlined} from '@ant-design/icons'
function NoContents(props) {
    return (
        <div>
            <Result
            icon={<FrownOutlined />}
            title={props.message}
            />
        </div>
    )
}
export default NoContents
