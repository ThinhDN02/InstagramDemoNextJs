import React from 'react';
import { Layout, Menu, Input } from 'antd';
import { HomeOutlined, SearchOutlined, CompassOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Sider } = Layout;
const { Search } = Input;

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', padding: '0 50px' }}>
        <div className="logo">
          <Link href="/">Instagram</Link>
        </div>
        <Search
          placeholder="Search"
          enterButton={<SearchOutlined />}
          style={{ maxWidth: '300px' }}
        />
        <Menu mode="horizontal" style={{ flex: 1, justifyContent: 'flex-end', background: 'none', borderBottom: 'none' }}>
          <Menu.Item key="home" icon={<HomeOutlined />} />
          <Menu.Item key="explore" icon={<CompassOutlined />} />
          <Menu.Item key="notifications" icon={<HeartOutlined />} />
          <Menu.Item key="profile" icon={<UserOutlined />} />
        </Menu>
      </Header>
      <Layout>
        <Sider width={80} className="site-layout-background">
          <Menu mode="vertical" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
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
