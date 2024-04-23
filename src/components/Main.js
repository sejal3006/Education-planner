import React, { useState } from 'react';
import './Main.css';
import Shedule from './Shedule.js';

const Main = () => {
  const [state,setState] = useState([])
  // function makeSchedule(){ 
  //   console.log(myinput());
  //     // setState({
  //     //   name : myinput(),
  //     //   hour : myinput2()
  //     // })
  // }
  const createShedule = ()=>{
    const subName = document.getElementById('text-box').value;
    const subHour = document.getElementById('number-box').value;

    const newSubData = {
      name : subName,
      hour : parseInt(subHour)
    }

    const data = JSON.parse(JSON.stringify(state))
    data.push(newSubData);
    setState(data);

    // const updatedData = [...state, ...newSubData];
    // setState(updatedData);
  }

  return (
    <div className='container'>
        <h1>Geekster Education Planner</h1>
        <div className='input-container'>
            <input type='text' placeholder='Subject' id="text-box" />
            <input type='number' placeholder='Hours' id="number-box" />
            <button onClick={createShedule} id="add">Add</button>
        </div>
        {
          state.map((course, index)=>(
            <Shedule name={course.name} hour={course.hour} key={index}/>
          ))
        }
    </div>
  )
}

export default Main;

// setState({
//   name : myinput(),
//   hour : myinput2()
// })