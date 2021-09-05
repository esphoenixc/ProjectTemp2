import React from 'react';

class CountDown extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: 80,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({ seconds: this.state.seconds - 1 }, this.updateStorage);
      } else {
        if (this.state.minutes > 0) {
          this.setState({ minutes: this.state.minutes - 1 }, this.updateStorage);
          this.setState({ seconds: 59 }, this.updateStorage);
        }
      }
      if (this.state.seconds === 0) {
        if (this.state.minutes === 0) {
          if (this.state.hours === 0) {
            clearInterval(this.myInterval);
          } else {
            this.setState({ hours: this.state.hours - 1 }, this.updateStorage);
            this.setState({ minutes: 59 }, this.updateStorage);
            this.setState({ seconds: 59 }, this.updateStorage);
          }
        }
      }
    }, 1000);
    
    const time = localStorage.getItem("time")
  }

  updateStorage = () => {
    localStorage.setItem("time", JSON.stringify(this.myInterval))
    console.log(localStorage)
  }




  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div>
        {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    );
  }
}

export default CountDown;
