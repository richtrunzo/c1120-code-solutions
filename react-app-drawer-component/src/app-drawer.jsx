import React from 'react';
import ReactDOM from 'react-dom';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {burger: true};
    this.menu = this.menu.bind(this);
    this.burgerOn = this.burgerOn.bind(this);
    this.drawer = this.drawer.bind(this);
    this.menuOn = this.menuOn.bind(this);
  }
  menu() {
    this.setState({burger: false});
  }
  burgerOn() {
    this.setState({burger: true});
  }
  drawer() {
    return <i class="fas fa-bars" onClick={this.menu}></i>
  }
  menuOn() {
    return <div class="filter" onClick={this.burgerOn}>
            <div class="modal">
              <h1 class="text">Menu</h1>
              <p class="text" onClick={this.burgerOn}><a href="#">About</a></p>
              <p class="text" onClick={this.burgerOn}><a href="#">Get Started</a></p>
              <p class="text" onClick={this.burgerOn}><a href="#">Sign In</a></p>
            </div>
          </div>
  }
  render() {
    if (this.state.burger === true) {
      return this.drawer();
    } else {
      return this.menuOn();
    }
  }
}

export default Drawer;
