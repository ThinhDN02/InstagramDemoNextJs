import React from 'react';
import InstagramIcon from './InstagramIcon';
import { Layout, Menu } from 'antd';
import { HomeOutlined, CompassOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Sider } = Layout;

const AppLayout = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout style={{ flex: 1 }}>
                <Sider width={250} className="site-layout-background" style={{ background: '#fff' }}>
                    <Menu mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0, color: '#000', fontSize: '18px' }}>
                        <Link href="/" legacyBehavior>
                            <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px' }}>
                                <InstagramIcon style={{ color: '#000', width: '120px', height: 'auto' }} />
                            </a>
                        </Link>
                        <Menu.Item key="1" icon={<HomeOutlined style={{ color: '#000', fontSize: '24px' }} />}>
                            Home
                        </Menu.Item>
                        <Menu.Item key="2" icon={<CompassOutlined style={{ color: '#000', fontSize: '24px' }} />}>
                            Explore
                        </Menu.Item>
                        <Menu.Item key="3" icon={<HeartOutlined style={{ color: '#000', fontSize: '24px' }} />}>
                            Notifications
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined style={{ color: '#000', fontSize: '24px' }} />}>
                            Profile
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '24px' }}>
                    <Content
                        style={{
                            padding: '32px',
                            margin: 0,
                            minHeight: 280,
                            background: '#fff',
                            color: '#000'
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
