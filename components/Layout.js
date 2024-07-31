import React from 'react';
import InstagramIcon from './InstagramIcon';
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    SearchOutlined,
    CompassOutlined,
    VideoCameraOutlined,
    MessageOutlined,
    BellOutlined,
    PlusOutlined,
    UserOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const { Sider, Content } = Layout;

const AppLayout = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout style={{ flex: 1 }}>
                <Sider width={250} className="site-layout-background" style={{ background: '#fff' }}>
                    <Menu mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0, color: '#000', fontSize: '18px' }}>
                        <Link href="/" legacyBehavior>
                            <a style={{ display: 'flex', alignItems: 'center', height: '120px', paddingLeft: 20 }}>
                                <InstagramIcon style={{ color: '#000', width: '120px', height: 'auto' }} />
                            </a>
                        </Link>
                        <Menu.Item key="1" icon={<HomeOutlined style={{ color: '#000', fontSize: '24px' }} />}>
                            <Link href="/">Trang chủ</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<SearchOutlined style={{ color: '#000', fontSize: '24px' }} />}>
                            <Link href="/search">Tìm kiếm</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<CompassOutlined style={{ color: '#000', fontSize: '24px' }} />}>
                            Khám phá
                        </Menu.Item>
                        <Menu.Item key="4" icon={<VideoCameraOutlined style={{ color: '#000', fontSize: '24px' }} />}>
                            Reels
                        </Menu.Item>
                        <Menu.Item key="5" icon={<MessageOutlined style={{ color: '#000', fontSize: '24px' }} />}>
                            Tin nhắn
                        </Menu.Item>
                        <Menu.Item key="6" icon={<BellOutlined style={{ color: '#000', fontSize: '24px' }} />}>
                            Thông báo
                        </Menu.Item>
                        <Menu.Item key="7" icon={<PlusOutlined style={{ color: '#000', fontSize: '24px' }} />}>
                            Tạo
                        </Menu.Item>
                        <Menu.Item key="8" icon={<UserOutlined style={{ color: '#000', fontSize: '24px' }} />}>
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
