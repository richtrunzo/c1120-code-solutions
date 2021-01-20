import React from "react";
import ReactDOM from "react-dom";

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toggle: true};
    this.toggleOff = this.toggleOff.bind(this);
    this.toggleOn = this.toggleOn.bind(this);
  };
  toggleOff() {
    this.setState({toggle: false});
  };
  toggleOn() {
    this.setState({toggle: true});
  };
  render() {
    if (this.state.toggle === true) {
      return <React.Fragment>
              <div onClick={this.toggleOff} className="flexoff oval">
               <div className="circle"></div>
             </div>
               <p className="text">{'OFF'}</p>
              </React.Fragment>
    } else {
      return <React.Fragment>
             <div onClick={this.toggleOn} className="flexon oval">
              <div className="circle"></div>
             </div>
             <p className="text">{'ON'}</p>
            </React.Fragment>
    }
  }
}

export default ToggleSwitch;
