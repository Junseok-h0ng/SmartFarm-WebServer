import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Link from 'next/link';
import {Menu,Row,Col} from 'antd';
import {KeyOutlined, LogoutOutlined} from '@ant-design/icons'
import { loadUserData, logOut } from '../../_redux/_reducer/userReducer';

function AppLayout({children}) {
    const dispatch = useDispatch();
    const {isLogin,isLoading} = useSelector(state => state.user);

    useEffect(() => {
            dispatch(loadUserData())   
    }, []);

    const onLogout = () =>{
        dispatch(logOut());
    }
    
    return (
        <div>
            <Menu mode="horizontal" style={{padding:'0 20px'}}>
                <Menu.Item key="home"><Link href="/"><img src='https://i.postimg.cc/YSdBB0CY/smartfarm-icon.png' width='130px' alt='자체아이콘'></img></Link></Menu.Item>
                {!isLoading &&
                <>
                {isLogin ?
                    <>
                        <Menu.Item style={{float:'right'}}key="register"><Link href="/register"><img src='https://i.ibb.co/fY8VH6F/image.png' width='100px' alt="임시"></img></Link></Menu.Item>
                        <Menu.Item style={{float:'right'}} key="login"><Link href="/login"><a><KeyOutlined /></a></Link></Menu.Item>
                    </>
                    :
                    <>
                        <Menu.Item style={{float:'right'}} key="logout"><a onClick={onLogout}><LogoutOutlined /></a></Menu.Item>
                    </>
                }
                </>
                }
                <Menu.Item style={{float:'right'}} key="dashboard"><Link href="/dashboard"><a>Board</a></Link></Menu.Item>
                {/* <Menu.Item style={{float:'right'}} key="list"><Link href="/list"><a>List</a></Link></Menu.Item> */}

            </Menu>
            <Row style={{marginTop:'15px'}} gutter={8}>
                <Col xs={24} md={4}  lg={5} xl={6} xxl={7}/>
                <Col xs={24}  md={16} lg={14} xl={12} xxl={10}>
                    {!isLoading &&
                    <>
                        {children}
                    </>   
                    }
                </Col>
                <Col xs={24}  md={4} lg={5} xl={6} xxl={7}/>
            </Row>
            
        </div>
    )
}

export default AppLayout
