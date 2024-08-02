import React from 'react';
import { useRouter } from 'next/router';
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
import InstagramIcon from './InstagramIcon';

const { Sider, Content } = Layout;

const AppLayout = ({ children }) => {
    const router = useRouter();
    const currentPath = router.pathname;

    const getMenuKey = (path) => {
        switch (path) {
            case '/':
                return '1';
            case '/search':
                return '2';
            case '/explore':
                return '3';
            case '/reels':
                return '4';
            case '/messages':
                return '5';
            case '/notifications':
                return '6';
            case '/create':
                return '7';
            case '/profile':
                return '8';
            default:
                return '1';
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout style={{ flex: 1 }}>
                <Sider width={250} className="site-layout-background" style={{ background: '#fff' }}>
                    <Menu
                        mode="vertical"
                        selectedKeys={[getMenuKey(currentPath)]}
                        style={{
                            height: '100%',
                            borderRight: 0,
                            fontSize: '18px',
                            background: '#fff',
                            color: '#000',
                        }}
                        theme="light"
                    >
                        <Link href="/" legacyBehavior>
                            <a style={{ display: 'flex', alignItems: 'center', height: '120px', paddingLeft: 20 }}>
                                <InstagramIcon style={{ color: '#000', width: '120px', height: 'auto' }} />
                            </a>
                        </Link>
                        <Menu.Item key="1" icon={<HomeOutlined style={{ fontSize: '24px' }} />}>
                            <Link href="/">Trang chủ</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<SearchOutlined style={{ fontSize: '24px' }} />}>
                            <Link href="/searchdemo">Tìm kiếm</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<CompassOutlined style={{ fontSize: '24px' }} />}>
                            <Link href="/explore">Khám phá</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<VideoCameraOutlined style={{ fontSize: '24px' }} />}>
                            <Link href="/reels">Reels</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<MessageOutlined style={{ fontSize: '24px' }} />}>
                            <Link href="/messages">Tin nhắn</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<BellOutlined style={{ fontSize: '24px' }} />}>
                            <Link href="/notifications">Thông báo</Link>
                        </Menu.Item>
                        <Menu.Item key="7" icon={<PlusOutlined style={{ fontSize: '24px' }} />}>
                            <Link href="/create">Tạo</Link>
                        </Menu.Item>
                        <Menu.Item key="8" icon={<UserOutlined style={{ fontSize: '24px' }} />}>
                            <Link href="/profile">Profile</Link>
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
                            color: '#000',
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
