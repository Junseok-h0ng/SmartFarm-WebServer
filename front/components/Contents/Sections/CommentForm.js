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
           <ReplyComment user={user}/>
           {props.commentLists.map((comment,index)=>(
             (!comment.responseTo &&
            <>
              <SingleComment key={index} user={user} comment={comment} refereshFunction={props.refereshFunction}/>
              <ChildrenComment user={user} commentLists={props.commentLists} parentCommentId={comment.author.id} refereshFunction={props.refereshFunction}/>
            </>
            )
           ))}
        </div>
    )
}

export default CommentForm