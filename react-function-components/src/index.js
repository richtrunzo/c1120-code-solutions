import React from "react";
import ReactDOM from "react-dom";


function Click(props) {
  return <button>{props.text}</button>;
}

const customButton = <Click text="Click Me!" />;

ReactDOM.render(customButton, document.querySelector('#root'));
