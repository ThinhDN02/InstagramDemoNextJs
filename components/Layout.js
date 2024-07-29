import React from 'react';
import InstagramIcon from './InstagramIcon';
import { Layout, Menu, Input } from 'antd';
import { HomeOutlined, CompassOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Sider } = Layout;
const { Search } = Input;

const AppLayout = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout style={{ flex: 1 }}>
                <Sider width={200} className="site-layout-background">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '64px' }}>
                        <Link href="/" legacyBehavior>
                            <a>
                                <InstagramIcon />
                            </a>
                        </Link>
                    </div>
                    <Menu mode="vertical" defaultSelectedKeys={['1']} style={{ height: 'calc(100% - 64px)', borderRight: 0 }}>
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            Home
                        </Menu.Item>
                        <Menu.Item key="2" icon={<CompassOutlined />}>
                            Explore
                        </Menu.Item>
                        <Menu.Item key="3" icon={<HeartOutlined />}>
                            Notifications
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined />}>
                            Profile
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '24px' }}>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: '#fff',
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
