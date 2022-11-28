import React from 'react'
import {useNavigate} from 'react-router-dom'

function EducationalInformation() {

    const navigate=useNavigate()
  return (
    <div className='educationalInformation'>
        <h2>Educational Information</h2>
        <div className='schoolName'>
        <label for='schoolName'>SchoolName</label><br />
        <input type='text' className='schoolName' placeholder='Central Academy'></input>
        </div>
        <div className='branch'>
        <label for='Branch'>Branch</label><br />
        <select className='branch'>
            <option></option>
            <option>Computer Science</option>
            <option>Information Technology</option>
            <option>Electronic & Communication</option>
            <option>Mechanical Engineering</option>
        </select>
        </div>
        <div className='Course'>
        <label for='Course'>Course</label><br />
        <select className='course'>
            <option></option>
            <option>B.tech</option>
            <option>MBA</option>
            <option>MCA</option>
            <option>Pharmacy</option>
        </select>
        </div>
        <div className='button'>
            <button className='button' onClick={()=>navigate(-1)}>previous</button>
            <button className='button' onClick={()=>navigate('Experience')}>next</button>
        </div>
    </div>
    )
}

export default EducationalInformation
