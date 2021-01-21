import React from 'react';
import ReactDOM from 'react-dom';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {html: false, css: false, js: false};
    this.jsOn = this.jsOn.bind(this);
    this.jsRender = this.jsRender.bind(this);
    this.cssOn = this.cssOn.bind(this);
    this.htmlOn = this.htmlOn.bind(this);
    this.htmlRender = this.htmlRender.bind(this);
    this.cssRender = this.cssRender.bind(this);
    this.start = this.start.bind(this);
    this.startRender = this.startRender.bind(this);
  }
  jsOn() {
    this.setState({ html: false, css: false, js: true});
  }
  cssOn(){
    this.setState({html: false, css: true, js: false})
  }
  htmlOn(){
    this.setState({html: true, css: false, js: false})
  }
  start() {
    this.setState({ html: false, css: false, js: false })
  }
  htmlRender() {
    return <div>
            <div class="lang" onClick={this.start}>
              <p>HyperText Markup Language</p>
            </div>
            <div class="text">
              <p>{this.props.text[0].html}</p>
            </div>
            <div class="lang" onClick={this.cssOn}>
              <p>Cascading Style Sheets</p>
            </div>
            <div class="lang" onClick={this.jsOn}>
              <p>JavaScript</p>
            </div>
           </div>
  }
  cssRender() {
    return <div>
            <div class="lang" onClick={this.htmlOn}>
              <p>HyperText Markup Language</p>
            </div>
            <div class="lang" onClick={this.start}>
              <p>Cascading Style Sheets</p>
            </div>
            <div class="text">
             <p>{this.props.text[0].css}</p>
            </div>
            <div class="lang" onClick={this.jsOn}>
              <p>JavaScript</p>
            </div>
           </div>
  }
  jsRender() {
    return <div>
      <div class="lang" onClick={this.htmlOn}>
        <p>HyperText Markup Language</p>
      </div>
      <div class="lang" onClick={this.cssOn}>
        <p>Cascading Style Sheets</p>
      </div>
      <div class="lang" onClick={this.start}>
        <p>JavaScript</p>
      </div>
      <div class="text">
        <p>{this.props.text[0].js}</p>
      </div>
    </div>
  }
  startRender() {
    return <div>
            <div class="lang" onClick={this.htmlOn}>
              <p>HyperText Markup Language</p>
            </div>
            <div class="lang" onClick={this.cssOn}>
              <p>Cascading Style Sheets</p>
            </div>
            <div class="lang" onClick={this.jsOn}>
              <p>JavaScript</p>
            </div>
            </div>
  }
  render() {
    if (this.state.html === true) {
      return this.htmlRender();
    } else if (this.state.css === true) {
      return this.cssRender();
    } else if (this.state.js === true) {
      return this.jsRender();
    } else {
      return this.startRender();
    }
  }
}

export default Accordion;
