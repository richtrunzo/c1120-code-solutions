import React from "react";
import ReactDOM from "react-dom";

class HotButton extends React.Component {
      constructor(props) {
        super(props);
        this.state = {clicked: 0};
        this.incrementClick = this.incrementClick.bind(this);
      };
      incrementClick() {
        this.setState({clicked: this.state.clicked + 1})
      };
      render() {
      if(this.state.clicked < 3) {
        return <button onClick={this.incrementClick} className="btn">{'Hot Button'}</button>;
      } else if (this.state.clicked < 6) {
        return <button onClick={this.incrementClick} className="three btn">{'Hot Button'}</button>;
      } else if (this.state.clicked < 9) {
        return <button onClick={this.incrementClick} className="six btn">{'Hot Button'}</button>;
      } else if (this.state.clicked < 12) {
        return <button onClick={this.incrementClick} className="nine btn">{'Hot Button'}</button>;
      } else if (this.state.clicked < 15) {
        return <button onClick={this.incrementClick} className="twelve btn">{'Hot Button'}</button>;
      } else if (this.state.clicked < 18) {
        return <button onClick={this.incrementClick} className="fifteen btn">{'Hot Button'}</button>;
      } else {
        return <button onClick={this.incrementClick} className="eighteen btn">{'Hot Button'}</button>;
      };
  };
};


export default HotButton;
