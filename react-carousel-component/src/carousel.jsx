import React from 'react';
import ReactDOM from 'react-dom';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      num: [0, 1, 2, 3, 4]
    };
    this.position = this.position.bind(this);
  };
  componentDidMount() {
    this.intervalId = setInterval(() => {
      if(this.state.current === 4) {
        this.setState({ current: 0 })
        return;
        }
        this.setState({ current: this.state.current + 1})
    }, 3000);
  };
  position() {
    for (let i = this.state.current; i < this.state.num.length; i++) {
      if (event.target.id === "left" && this.state.current !== 0) {
        this.setState({current: this.state.current - 1});
      } else if (event.target.id === "left" && this.state.current === 0) {
        this.setState({current: 4})
      } else if (event.target.id === "right" && this.state.current !== 4) {
        this.setState({current: this.state.current + 1});
      } else if (event.target.id === "right" && this.state.current === 4) {
        this.setState({current: 0});
      } else if (event.target.id !== "left" && event.target.id !== "right"){
        this.setState({current: parseInt(event.target.id)});
      }
    }
}
render() {
    return (
          <div>
            <div className="flex">
              <i className="fas fa-angle-left angle" id={"left"} onClick={this.position}></i>
              <img src={this.props.images[this.state.current].pic} />
              <i className="fas fa-angle-right angle" id={"right"} onClick={this.position}></i>
            </div>
            <div className="circles">
             {this.state.num.map((circle, index) => {
                  let filled = "far fa-circle";
                  let id = index;
                  if (circle === this.state.current) {
                      filled = "fas fa-circle"
                        }
                      return <i id={id} onClick={this.position} className={filled}></i>
                      })}
            </div>
          </div>
    )
  }
}



export default Carousel;
