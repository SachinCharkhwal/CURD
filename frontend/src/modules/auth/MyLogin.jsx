import React from 'react'
import {Link} from 'react-router-dom'

function MyLogin() {
  return (
    <div className='container rounded shadow p-5 page reg border bg-light'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='text-center mb-4'>User Register page</h3>
        </div>
        <div className='col-12 mt-2'>
          <label className="form-label">Email ID</label>
          <input type="email" className="form-control" /> 
        </div>
        <div className='col-12 mt-2'>
          <label className="form-label">Password</label>
          <input type="password" className="form-control" /> 
        </div>
        <div className='col-12 mt-5 text-center'>
          <button className='btn btn-success col-12 '>Login</button>
          <Link className='btn col-12 mt-4 border' to="register">New User Register</Link>
        </div>
      </div>
    </div>
  )
}

export default MyLogin