import React from 'react';
import ReactDOM from 'react-dom';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    this.goToPrevious = this.goToPrevious.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.goToNext = this.goToNext.bind(this);
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
  goToPrevious() {
      if (event.target.id === "left" && this.state.current !== 0) {
        this.setState({current: this.state.current - 1});
      } else if (event.target.id === "left" && this.state.current === 0) {
        this.setState({current: 4})
      }
    }
  goToNext() {
    if (event.target.id === "right" && this.state.current !== 4) {
      this.setState({ current: this.state.current + 1 });
    } else if (event.target.id === "right" && this.state.current === 4) {
      this.setState({ current: 0 });
  }
}
  goToIndex() {
      if (event.target.id !== "left" && event.target.id !== "right"){
        this.setState({current: parseInt(event.target.id)});
      }
    }


  render() {
    return (
          <div>
            <div className="flex">
              <i className="fas fa-angle-left angle" id={"left"} onClick={this.goToPrevious}></i>
              <img src={this.props.images[this.state.current].pic} />
              <i className="fas fa-angle-right angle" id={"right"} onClick={this.goToNext}></i>
            </div>
            <div className="circles">
             {this.props.images.map((circle, index) => {
                  let filled = "far fa-circle";
                  let id = index;
                  if (circle.id === this.state.current) {
                      filled = "fas fa-circle"
                        }
                      return <i id={id} onClick={this.goToIndex} className={filled}></i>
                      })}
            </div>
          </div>
    )
  }
}



export default Carousel;
