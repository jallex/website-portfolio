import React, { Component } from 'react';
import './App.css';
import { Header, Layout, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="content">
    <Layout>
        <Header className="header" transparent title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>} scroll>
            <Navigation>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/about">About</Link>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/demoReel">Demo Reel</Link>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/code">Code</Link>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/work3D">3D Modeling and Animation</Link>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/artwork">Artwork</Link>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Content>
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
