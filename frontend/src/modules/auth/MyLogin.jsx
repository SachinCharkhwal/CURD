import React, { useState } from 'react'
import {Link} from 'react-router-dom'


function MyLogin() {
  const [data, setData] = useState({
    email:'',
    pass:'',
  });

  const inputChange = (e)=>{
    console.log(e.target.value);
    const {name,value} = e.target
    setData((preVal)=>{
      return{
        ...preVal,
          [name]:value
      }
    })
  }

 const myLogin = async(e)=>{
  const { email, pass} = data;
  const myData = await fetch("https://curdcharkhwal.onrender.com/login",{
    method : 'POST',
    headers : {"Content-Type" : "Application/Json"},
    body: JSON.stringify({ email, pass})
  })
  const res = await myData.json();
  console.log(res)
  if(res.status === 201){
    alert('welcome to login')
    window.location.href = '/dashboard'
  }
  else{
    console.log('nothing')
  }
 }

  return (
    <div className='container rounded shadow p-5 page reg border bg-light'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='text-center mb-4'>User Register page</h3>
        </div>
        <div className='col-12 mt-2'>
          <label className="form-label">Email ID</label>
          <input type="email" className="form-control" name="email" value={data.email} onChange={inputChange}/> 
        </div>
        <div className='col-12 mt-2'>
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="pass" value={data.pass} onChange={inputChange}/> 
        </div>
        <div className='col-12 mt-5 text-center'>
          <Link className='btn btn-success col-12' to="/dashboard" onClick={myLogin}>Login</Link>
          <Link className='btn col-12 mt-4 border' to="/register">New User Register</Link>
        </div>
      </div>
    </div>
  )
}

export default MyLogin