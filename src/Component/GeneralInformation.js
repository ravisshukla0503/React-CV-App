import React from 'react'
import {useNavigate} from 'react-router-dom'

function GeneralInformation() {
   
    const navigate=useNavigate();

  return (
    <div className='generalInformation'>
        <h2>General Information</h2>
        <div className='name'>
        <label for='name'>Name</label><br />
        <input type='text' className='name' placeholder='ravi'></input>
        </div>
        <div className='email'>
        <label for='email'>Email</label><br />
        <input type='email' className='email'  placeholder='@ravi.com'></input>
        </div>
        <div className='phoneNumber'>
        <label for='phone-number'>Phone Number</label><br />
        <input type='text' className='phoneNumber'  placeholder='91+ 0000000000'></input>
        </div>
        <div className='button'>
            <button type='submit' className='button' onClick={()=>navigate('Education')}>next</button>
        </div>
    </div>
  )
}

export default GeneralInformation
