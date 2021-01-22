import React from 'react';
import ReactDOM from 'react-dom';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: 0}
    this.click = this.click.bind(this);
  }
  click() {
    if (this.state.id === parseInt(event.target.id)) {
      this.setState({id: 0})
    } else {
    this.setState({id: parseInt(event.target.id)})
    }
    console.log(this.state.id);
    console.log(event.target.id);
  }
  render() {
    return (
    this.props.contents.map(content => {
      let showClass = 'hidden text';
      if (this.state.id === content.id) {
        showClass = 'active text';
      }
      return (
          <div className="lang" onClick={this.click} id={content.id}>
           <div onClick={this.click} id={content.id}>
            <p onClick={this.click} id={content.id}>{content.title}</p>
            </div>
            <div className={showClass}>
              <p>{content.content}</p>
             </div>
            </div>
             )
           })
           )
          }


     }


export default Accordion;


// htmlRender() {
//   return <div>
//     <div class="lang" onClick={this.click}>
//       <p>HyperText Markup Language</p>
//     </div>
//     <div class="text">
//       <p>{this.props.text[0].html}</p>
//     </div>
//     <div class="lang" onClick={this.click}>
//       <p>Cascading Style Sheets</p>
//     </div>
//     <div class="lang" onClick={this.jsOn}>
//       <p>JavaScript</p>
//     </div>
//   </div>
