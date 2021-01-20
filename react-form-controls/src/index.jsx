import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: " "};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(){
    this.setState({value: event.target.value});
  }
  handleSubmit(){
    event.preventDefault();
    console.log('state:', this.state);
  }
  render(){
    return <form onSubmit={this.handleSubmit}>
            <label>
              Email:
              <input type="email" value={this.state.value} onChange={this.handleChange}></input>
            </label>
              <input type="submit" value="Sign Up"></input>
           </form>
  }
}

ReactDOM.render(<NewsletterForm />, document.querySelector('#root'));
