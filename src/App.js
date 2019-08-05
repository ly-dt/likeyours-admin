import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Stations from './components/stations';

const { Header, Content, Sider } = Layout;

const TestComponent = () => <div>TEST</div>;

const App = () => (
  <Router>
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1">
              Stations
              <Link to={'/'}>Components</Link>
            </Menu.Item>
            <Menu.Item key="2">Users</Menu.Item>
            <Menu.Item key="3">Rentables</Menu.Item>
          </Menu>
        </Sider>

        <Layout style={{ padding: '24px 24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Route exact path="/" component={Stations} />
            <Route path="/users" component={TestComponent} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </Router>
);

export default App;
