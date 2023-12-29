import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function MyRegister() {
  const [data, setData] = useState({
    fullName:'',
    email:'',
    phone:'',
    gender:'',
    city:'',
    pass:'',
    myPic:''
  })


// update function.............................
const changeFun = (e)=>{
    const {name,value} = e.target;
    setData((preval) =>{
      return{
        ...preval,
        [name]:value,
      }
    })
}

const MyRegisterUser = async () => {
      if (data.fullName === "") {
              alert("please fill forms");
      }
      else {
              const { fullName, email, phone, gender, city, pass, myPic } = data;
              const res = await fetch("https://curdcharkhwal.onrender.com/create", {
                      method: "POST",
                      headers: { "Content-Type": "application/json"},
                      body: JSON.stringify({ fullName, email, phone, gender, city, pass, myPic })
              })
              const bat = await res.json();
              console.log(bat);
              window.location.href = "/dashboard";
      }
}
  

  return (
    <div className='container rounded shadow p-5 pb-5 mt-4 mb-4 reg border bg-light'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='text-center mb-4'>User Register page</h3>
        </div>
        <div className='col-6 mt-2'>
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="fullName" value={data.fullName} onChange={changeFun}/> 
        </div>
        <div className='col-6 mt-2'>
          <label className="form-label">Email ID</label>
          <input type="email" className="form-control" name="email" value={data.email} onChange={changeFun}/> 
        </div>
        <div className='col-6 mt-2'>
          <label className="form-label">Phone No.</label>
          <input type="text" className="form-control" name="phone" value={data.phone} onChange={changeFun}/> 
        </div>
        <div className='col-6 mt-2'>
          <label className="form-label">Gender</label>
          <select className='form-control' name="gender" value={data.gender} onChange={changeFun}>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className='col-6 mt-2'>
          <label className="form-label">City</label>
          <input type="text" className="form-control" name="city" value={data.city} onChange={changeFun}/> 
        </div>
        <div className='col-6 mt-2'>
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="pass" value={data.pass} onChange={changeFun}/> 
        </div>
        <div className="col-md-12 mt-2">
          <label className="form-label">profile image</label>
          <input type="text" placeholder="paste image url" className="form-control" name="myPic" value={data.myPic} onChange={changeFun} />
        </div>
        <div className='col-12 mt-4 text-center'>
          <button className='btn btn-success col-12' onClick={MyRegisterUser}>Register</button>
          <button className='btn btn-danger col-12 mt-4'>Cancel</button>
          <Link className='btn col-12 mt-4 border' to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

export default MyRegister