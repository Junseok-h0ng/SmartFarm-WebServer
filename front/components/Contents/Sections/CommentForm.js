import React,{useState,createElement} from 'react';
import {useSelector} from 'react-redux';
import ReplyComment from './ReplyComment';
import ChildrenComment from './ChildrenComment';
import SingleComment from './SingleComment';
import Moment from 'moment';


function CommentForm() {

  const user = useSelector(state => state.user);
  const commentLists = [
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
      datetime:(
        <Moment format="YYYY/MM/DD">
        "2021-04-05"
        </Moment>
      ),
    },
    {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully and
            efficiently.
          </p>
        ),
        datetime:(
          <Moment format="YYYY/MM/DD">
          "2021-04-05"
          </Moment>
        )
    }
  ]

    return (
        <div>
           <ReplyComment user={user}/>
           {commentLists.map((comment,index)=>(
            <>
            <SingleComment key={index} user={user} comment={comment}/>
            <ChildrenComment user={user}/>
            </>
           ))}

        </div>
    )
}

export default CommentForm
