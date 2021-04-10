import React,{useState,useEffect} from 'react'
import { Comment, Avatar } from 'antd';
import ReplyComment from './ReplyComment';
import {CaretDownOutlined, CaretUpOutlined} from '@ant-design/icons';
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

  const renderReplyComment = (parentCommentId,parentAuthor)=>
    props.commentLists.map((comment,index)=>
      <React.Fragment>
        <div></div>
        {comment.responseTo == parentCommentId &&
        <div>
          <div style={{ width: '80%', marginLeft: '40px' }}>
            <SingleComment key={index} comment={comment} user={props.user} refereshFunction={props.refereshFunction} postId={props.postId} parentAuthor={parentAuthor}/>
          </div>
            <ChildrenComment commentLists={props.commentLists} parentAuthor={comment.author.name} parentCommentId={comment._id} user={props.user} refereshFunction={props.refereshFunction} postId={props.postId}/>
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
            <div>
              <span onClick={onHandleChange}><CaretDownOutlined /> 답글 보기 ({childrenCommentNumber})</span>
            </div>
            :
            <div> 
              <span onClick={onHandleChange}><CaretUpOutlined /> 답글 숨기기</span> 
              {renderReplyComment(props.parentCommentId,props.parentAuthor)}
            </div> 
          }
        </>
        
        }         
      </div>
  )
}

export default ChildrenComment
