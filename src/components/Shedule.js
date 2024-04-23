import React, { useState } from 'react';
import './Shedule.css';

const Shedule = ({name, hour, key}) => {

  const [hourValue, updateHourValue] = useState(hour); 

  return (
    <div key={key} id="shedule">
        <p> {name} -  </p>
        <p>{hourValue} </p>
        <button className='btns' onClick={()=>{updateHourValue(hourValue+1)}}>+</button>
            <button onClick={()=>{updateHourValue(hourValue-1)}} className='btns'>-</button>
    </div>
  )
}

export default Shedule;