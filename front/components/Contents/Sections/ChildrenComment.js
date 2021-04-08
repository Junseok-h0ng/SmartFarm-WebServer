import React,{useState,useEffect} from 'react'
import { Comment, Avatar } from 'antd';
import ReplyComment from './ReplyComment';
import {DownOutlined, UpOutlined} from '@ant-design/icons';
import SingleComment from './SingleComment';

function ChildrenComment(props) {

  const [openReply, setOpenReply] = useState(false)

  const [childrenCommentNumber, setChildrenCommentNumber] = useState(null);

  useEffect(() => {
    let commentNumber = 0;
    props.commentLists.map((comment)=>{
      if(comment.responseTo === props.parentCommentId){
        commentNumber++;
      }
      setChildrenCommentNumber(commentNumber);
    })
  }, [props.commentLists,props.parentCommentId]);

  const renderReplyComment = (parentCommentId)=>
    props.commentLists.map((comment,index)=>
      <React.Fragment>
        <div></div>
        {comment.responseTo == parentCommentId &&
        <div>
            <SingleComment key={index} comment={comment} user={props.user} refereshFunction={props.refereshFunction}/>
            <ChildrenComment commentLists={props.commentLists} parentCommentId={comment.author.id} user={props.user} refereshFunction={props.refereshFunction}/>
        </div>
        }
      </React.Fragment>
      )
  
  

  const onHandleChange =() =>{
    setOpenReply(!openReply)
  }

  return (
      <div>

        {childrenCommentNumber != 0 &&
        
        <>
          {!openReply ?
            <div > 
              <DownOutlined/>
              <span onClick={onHandleChange}>답글 보기 ({childrenCommentNumber})</span>
            </div>
            :
            <div> 
              <UpOutlined/>
              <span onClick={onHandleChange}> 답글 숨기기</span>
              {renderReplyComment(props.parentCommentId)}
            </div> 
            }
        </>
        
        }         
      </div>
  )
}

export default ChildrenComment
