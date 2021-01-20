import React from "react";
import ReactDOM from "react-dom";

class Stopwatch extends React.Component {
  constructor(props){
    super(props);
    this.state = {second: 0, timer: false};
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  };
  play(){
    this.intervalId = setInterval(() => {
      this.setState({
        second: this.state.second + 1,
        timer: true
      });
    }, 1000);
  };
  pause(){
    clearInterval(this.intervalId);
    this.setState({timer: false});
  };
  reset() {
    this.setState({second: 0,
    timer: false
  });
  };
  render() {
    if (this.state.second === 0) {
        return <div className="flex-vert">
                <div className="circle flex">
                  <p className="text">{this.state.second}</p>
                </div>
                <i className="fas fa-play" onClick={this.play}></i>
              </div>
    } else if (this.state.second > 0 && this.state.timer === true) {
      return <div className="flex-vert">
        <div className="circle flex">
          <p className="text">{this.state.second}</p>
        </div>
        <i className="fas fa-pause" onClick={this.pause}></i>
      </div>
    } else if (this.state.timer === false && this.state.second !== 0) {
      return <div className = "flex-vert" >
        <div className="circle flex" onClick={this.reset}>
          <p className="text">{this.state.second}</p>
        </div>
        <i className="fas fa-play" onClick={this.play}></i>
      </div>
    }
  }
}

export default Stopwatch;
