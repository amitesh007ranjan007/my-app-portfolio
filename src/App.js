import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';
import Menu from './components/menu/menu';

class App extends Component {

  state= {
    smallDevice: false,
    section: 'introduction'
  }

  smallDeviceHandler = () => {
    this.setState({smallDevice: !this.state.smallDevice})
  }

  sectionChangeHandler = (section) => {
    this.setState({section: section,
      smallDevice: !this.state.smallDevice})
  }

  render() {
  return (
<Container style={{height:"100vh"}} fluid>
    <Menu clicked={() => this.smallDeviceHandler()} smallDevice={this.state.smallDevice} />
    <Sidebar smallDevice={this.state.smallDevice} clicked={(section) => this.sectionChangeHandler(section)}/>
    <Main smallDevice={this.state.smallDevice} section={this.state.section}/>
  </Container>

  );
  }
}

export default App;
