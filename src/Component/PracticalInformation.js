import React from 'react'
import {useNavigate} from 'react-router-dom'

function PracticalInformation() {

  const navigate=useNavigate()
  return (
    <div>
      <div className='practicalInformation'>
        <h2>Practical Information</h2>
        <div className='companyName'>
        <label>Company Name</label><br />
        <input type='text' className='companyName' placeholder='Jalan Technologies'></input>
        </div>
        <div className='positionTitle'>
        <label>Position-Title</label><br />
        <input type='email' className='positionTitle'  placeholder='Software-Developer-Intern'></input>
        </div>
        <div className='date'>
        <label>Date of joining</label><br />
        <input type="date" className='date' placeholder='01/01/2023'></input>
        </div>
        <div className='button'>
            <button className='button' onClick={()=>navigate(-1)}>previous</button>
            <button type='submit' className='button'>Submit</button>
        </div>
    </div>
    </div>
  )
}

export default PracticalInformation
