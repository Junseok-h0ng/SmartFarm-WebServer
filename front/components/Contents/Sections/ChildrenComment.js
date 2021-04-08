import React from 'react'
import { Comment, Avatar } from 'antd';
import ReplyComment from './ReplyComment';
import {DownOutlined, UpOutlined} from '@ant-design/icons';

function ChildrenComment() {
    const onHandleChange =() =>{

    }

    return (
        <div>
          <p style={{ margin: 0, color: 'gray' }} onClick={onHandleChange}>
            <DownOutlined />  답글 보기
            {/* <UpOutlined/> 답글 숨기기 */}
          </p>
        </div>
    )
}

export default ChildrenComment
