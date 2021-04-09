import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import ReplyComment from './ReplyComment';
import ChildrenComment from './ChildrenComment';
import SingleComment from './SingleComment';
import Moment from 'moment';


function CommentForm(props) {


  const user = useSelector(state => state.user);
  

    return (
        <div>
           <ReplyComment postId={props.postId} user={user}/>
           {props.commentLists.map((comment,index)=>(
             (!comment.responseTo &&
            <>
              <SingleComment key={index} user={user} comment={comment} refereshFunction={props.refereshFunction} postId={props.postId} />
              <ChildrenComment  key={index} user={user} parentAuthor={comment.author.name}  commentLists={props.commentLists} parentCommentId={comment._id} refereshFunction={props.refereshFunction} postId={props.postId}/>
            </>
            )
           ))}
        </div>
    )
}

export default CommentForm