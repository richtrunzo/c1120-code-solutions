import React from "react";
import ReactDOM  from "react-dom";

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isClicked: false};
    this.handleCLick = this.handleCLick.bind(this);
  };
  handleCLick() {
    this.setState({isClicked: true});
  };

  render() {
    if (this.state.isClicked === false) {
      return <button onClick={this.handleCLick}>{'Click Me!'}</button>;
    } else {
      return <button onClick={this.handleCLick}>{'Thanks!'}</button>;
    };

    };
  };



const btn = <CustomButton />;

ReactDOM.render(btn, document.querySelector('#root'));
