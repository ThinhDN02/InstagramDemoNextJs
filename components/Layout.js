import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, HeartOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="3" icon={<HeartOutlined />}>
            Activity
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Instagram Clone ©2024 Created by You</Footer>
    </Layout>
  );
};

export default AppLayout;
