import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Stations from './components/stations';
import Users from './components/users';
import Categories from './components/categories';
import Rentables from './components/rentables';

const { Header, Content, Sider } = Layout;

const App = () => {
  const [selectedMenuKey, setSelectedMenuKey] = useState('1');

  const handleClick = value => setSelectedMenuKey(value.key);

  useEffect(() => {
    switch (window.location.pathname) {
      case '/users':
        setSelectedMenuKey('2');
        break;
      case '/categories':
        setSelectedMenuKey('3');
        break;
      case '/rentables':
        setSelectedMenuKey('4');
        break;
      default:
        setSelectedMenuKey('1');
    }
  }, []);

  return (
    <Router>
      <Layout>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              selectedKeys={[selectedMenuKey]}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1" onClick={handleClick}>
                Stations
                <Link to={'/'} />
              </Menu.Item>
              <Menu.Item key="2" onClick={handleClick}>
                Users
                <Link to={'/users'} />
              </Menu.Item>
              <Menu.Item key="3" onClick={handleClick}>
                Categories
                <Link to={'/categories'} />
              </Menu.Item>
              <Menu.Item key="4" onClick={handleClick}>
                Rentables
                <Link to={'/rentables'} />
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout style={{ padding: '10px 10px' }}>
            <Content
              style={{
                background: '#fff',
                margin: 0,
                minHeight: 280,
              }}
            >
              <Route exact path="/" component={Stations} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/rentables" component={Rentables} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
