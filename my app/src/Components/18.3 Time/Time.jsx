import React, { useState } from "react";
import './style.css'

export default function Time() {

  const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  const [timeStatus, setTimeStatus] = useState(time);

  const hourHandler = (e) => {
    setTimeStatus({
      hours: e,
      minutes: e * 60,
      seconds: e * 60 * 60
    })
  };

  const minutsHandler = (e) => {
    setTimeStatus({
      hours: (e/60).toFixed(2),
      minutes: e,
      seconds: e * 60
    })
  };

  const secondsHandler = (e) => {
    setTimeStatus({
      hours: (e /60 /60).toFixed(2),
      minutes: (e /60).toFixed(2) ,
      seconds: e
    })
  };

  return (
    <div className="Time">
      <label htmlFor="hours">Hours</label>
      <input type="number" min="0" id="hours" name="hours" value={timeStatus.hours}
      onChange={(e)=> hourHandler(e.target.value)}></input>
      <label htmlFor="minutes">Minutes</label>
      <input type="number" min="0" id="minutes" name="minutes" value={timeStatus.minutes}
      onChange={(e)=> minutsHandler(e.target.value)}></input>
      <label htmlFor="seconds">Seconds</label>
      <input type="number" min="0" id="seconds" name="seconds" value={timeStatus.seconds}
      onChange={(e)=> secondsHandler(e.target.value)}></input>
    </div>
  )
}