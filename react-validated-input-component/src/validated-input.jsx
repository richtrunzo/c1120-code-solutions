import React from 'react';
import ReactDom from 'react-dom';

class Password extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.noPass = this.noPass.bind(this);
    this.wrongPass = this.wrongPass.bind(this);
    this.correctPass = this.correctPass.bind(this);
  }
  handleChange() {
    this.setState({value: event.target.value});
  }
  handleSubmit(){
    event.preventDefault();
  }
  noPass() {
    return <form>
            <p>Password</p>
            <input type="password" value={this.state.value} onChange={this.handleChange}></input>
            <i class="fas fa-times red"></i>
            <p class="red">A password is required</p>
          </form>
  }
  wrongPass() {
    return <form>
            <p>Password</p>
      <input type="password" value={this.state.value} onChange={this.handleChange}></input>
            <i class="fas fa-times red"></i>
            <p class="red">Your password is too short</p>
          </form>
  }
  correctPass() {
    return <form>
            <p>Password</p>
            <input type="password" value={this.state.value} onChange={this.handleChange}></input>
            <i class="fas fa-check green"></i>
          </form>
  }
  render() {
     if (this.state.value === null) {
       return <form>
         <p>Password</p>
         <input type="password" value={this.state.value} onClick={this.handleChange} onChange={this.handleChange}></input>
       </form>
     } else if (this.state.value.length === 0) {
       return this.noPass();
     } else if (this.state.value.length < 8 && this.state.value.length > 0) {
      return this.wrongPass();
    } else if (this.state.value.length >= 8) {
      return this.correctPass();
    }
  }
}

export default Password;
