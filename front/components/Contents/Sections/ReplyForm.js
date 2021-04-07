import React,{useState,createElement} from 'react';
import { Comment, Avatar,Form,Input,Button,List} from 'antd';
import LikeDislikeActions from './LikeDislike';


function ReplyForm() {
    const [value, setvalue] = useState("");

    const Editor = ({onChange,onSubmit,value})=>(
        <Form style={{display:'flex'}}>

                <Input.TextArea style={{width:'100%'}} rows={2} onChange={onChange} value={value}/>

                <Button style={{widows:'20%',height:'52px',marginLeft:'5px'}} htmlType="submit" onClick={onSubmit} type="primary">
                    Add Comment
                </Button>

        </Form>
    )
    const data = [
        {
          actions: [<LikeDislikeActions/>,<span key="comment-list-reply-to-0">Reply to</span>],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: (
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully and
              efficiently.
            </p>
          ),
        },
        {
          actions: [<LikeDislikeActions/>,<span key="comment-list-reply-to-0">Reply to</span>],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: (
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully and
              efficiently.
            </p>
          ),
        },
      ];

    return (
        <div>
            <Comment
            author={<a>Han Solo</a>}
            avatar={
            <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
            />
            }
            content={
                <Editor
                    // onChange={onChangeEditor}
                    // onSubmit={onSubmitEditor}
                    value={value}
                />
            }
            >
            </Comment>
            <List
                className="comment-list"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <li>
                    <Comment
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    />
                </li>
                )}
            />
        </div>
    )
}

export default ReplyForm
