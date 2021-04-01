import React, { useState } from 'react'
import ApiRequest from './ApiRequest';

function CancleRequest() {

  const [display, setDisplay] = useState(true);

  const toggleDisplay = () => {
    setDisplay(!display);
  }

  const shouldDisplay = <div>
    <button onClick={toggleDisplay}>Click here</button>
    
  </div>

  const shouldNotDisplay = <div><button onClick={toggleDisplay}>Display Data</button></div>

  return (
    <div>
      {display ? <ApiRequest /> : shouldNotDisplay}
    </div>
  )
}

export default CancleRequest