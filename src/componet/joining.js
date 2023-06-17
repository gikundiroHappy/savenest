import React, { useState } from 'react'
import "./joining.css"
import Dashnav from '../pages/dashboard/dashnav';

const Joining = () => {
    const [enteredText, setEnteredText]=useState("")
    const [enterSubmitted, setEnterSubmitted]=useState([])
    const TextChangeHandler=(i)=>{
        setEnteredText(i.target.value);
    }
    const submitHandler =(e)=>{
        e.preventDefault();
        setEnterSubmitted([...enterSubmitted,enteredText]);
        setEnteredText("");
    }
   
  return (
    <div>
          <div className='Joining-container'>
            <Dashnav/>
          <div className="joining">
            <div className='welcome'>
              <h1>Welcome to SaveNest saving assocciation Dashboard</h1></div>
            <div className="Joining-content">
            <div className='picture-one'>
              
            </div>
        <div className='Create-team'>
            <h1>WANT TO CREATE A TEAM</h1>
            <form onSubmit={submitHandler}>
            <input type='text' placeholder='Team Name' value={enteredText} onChange={TextChangeHandler}  required="required"/> <br/>
            <input type='text' placeholder='First team member' required="required"/> <br/>
            <input type='text' placeholder='Second team member' required="required"/> <br/>
            <input type='text' placeholder='Third team member' required="required"/> <br/>
            <p>Initial amount : <select>
                <option>$10</option>
                <option>$25</option>
                <option>$50</option>
                <option>$10</option>
                <option>Other</option>
                </select></p>
           <button type='submit'>Create team</button>
           
            </form>
          
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Joining;