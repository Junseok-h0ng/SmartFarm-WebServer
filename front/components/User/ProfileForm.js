import React from 'react';
import Link from 'next/link';
import {Avatar,Button,Card} from 'antd';
import {MenuOutlined,EditOutlined,UserOutlined} from '@ant-design/icons'


function ProfileForm(props) {
    const user = props.user;
    return (
        <div>
        <style jsx>{`
        #right {
            float: right;
            margin-right: 20px;
          }
          #left {
            margin-left: 15px;
          }
          th,
          td {
            text-align: center;
            vertical-align: top;
          }
          #flex-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 18vh;
          }
          #line {
            border: 2.2px solid #a0a0a0;
            border-radius: 1.2em;
          }
          
        `}</style>
        <div>   
            <div id='line'>
            <br/>    
                <div>                 
                    <div id='flex-container'>
                        <table>
                            <tr>
                                <th><Avatar size={99} icon={<UserOutlined />} /></th>
                            </tr>
                            <tr>
                                <td><h4>{user.data.name}</h4></td>
                            </tr>
                            <tr>
                                <td><h5>{user.data.email}</h5></td>
                            </tr>
                            <br/>
                            <tr>
                                <Button>
                                    <Link href="/user"><a><EditOutlined /></a></Link>
                                </Button>
                                &ensp;
                                <Button>
                                    <Link href="/farm"><a><MenuOutlined /></a></Link>
                                </Button> 
                            </tr>
                        </table>     
                    </div>   
                </div>
                <br/>
            </div>
        </div>
    </div>
    )
}

export default ProfileForm
