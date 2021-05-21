import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Router from 'next/router';
import Link from 'next/link';
import {Menu,Row,Col,message} from 'antd';
import {logOut } from '../../_redux/slices/user';

function AppLayout({children}) {
    const dispatch = useDispatch();
    const {isLoading,isLogin} = useSelector(state => state.user);

    const onLogout = () =>{
        dispatch(logOut());
    }
    
    return (
        <div>
            <Menu mode="horizontal" style={{
                padding:'0 30px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center'
                }}>
                <Menu.Item key="home"><Link href="/"><img src='https://i.postimg.cc/YSdBB0CY/smartfarm-icon.png' width='130px' alt='자체아이콘'></img></Link></Menu.Item>
                {/* {!isLoading &&
                <>
                {!isLogin ?
                    <>
                        <Menu.Item style={{marginRight:'12%'}} key="login"><Link href="/login"><a>Login</a></Link></Menu.Item>
                        <Menu.Item key="register"><Link href="/register"><a>Register</a></Link></Menu.Item>
                    </>
                    :
                    <>
                        <Menu.Item style={{float:'right'}} key="logout"><a onClick={onLogout}>Logout</a></Menu.Item>
                    </>
                }
                </>
                } */}
            

            </Menu>
            <Row style={{marginTop:'15px'}} gutter={8}>
                <Col xs={24} md={4}  lg={5} xl={7} xxl={8}/>
                <Col xs={24}  md={16} lg={14} xl={10} xxl={8}>
                    {!isLoading &&
                    <>
                        {children}
                    </>   
                    }
                </Col>
                <Col xs={24}  md={4} lg={5} xl={7} xxl={8}/>
            </Row>
            
        </div>
    )
}

export default AppLayout
