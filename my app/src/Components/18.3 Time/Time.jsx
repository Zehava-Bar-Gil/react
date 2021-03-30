import React, { Component } from "react";
import 'style.css'

class Time extends Component {
  constructor(props) {
    super(props);
    this.countDownId = null;
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false
    };
  }

  componentDidMount() {
    this.countDownId = setInterval(this.timerInit, 1000);
  }

  componentWillUnmount() {
    if (this.countDownId) {
      clearInterval(this.countDownId);
    }
  }

  timerInit = () => {
    const { startDate } = this.props;
    console.log(startDate);
    const now = new Date().getTime();
    if (!startDate) {
      this.setState({ expired: true });
      return;
    }
    const countDownStartDate = new Date(startDate).getTime();
    const distance = countDownStartDate - now;
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   
    if (distance < 0) {
      clearInterval(this.countDownId);
      this.setState({
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      });
      return;
    }
    this.setState({ hours, minutes, seconds, expired: false });
  };

  render() {
    const { hours, minutes, seconds, expired } = this.state;
    if (expired) {
      return <div className="expired">Expired :(</div>;
    }
    return (
      <div className="timer">
        <div>
          {hours}
          <span>h</span>
        </div>
        <div>
          {minutes}
          <span>m</span>
        </div>
        <div>
          {seconds}
          <span>s</span>
        </div>
      </div>
    );
  }
}
export default Time;
