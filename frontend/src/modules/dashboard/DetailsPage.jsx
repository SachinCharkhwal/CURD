import React, {useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function DetailsPage() {
  const {id} = useParams();
  const [data, setData] = useState([]);

  const singleUser = useRef(()=>{
    axios.get(`https://curdcharkhwal.onrender.com/singledata/${id}`).then((res)=>{
      console.log(res.data);  
      setData(res.data)
    })
  }).current;

useEffect(()=>{
  singleUser();
},[singleUser])


  return (
    <div className='container page shadow p-5 border'>
        <div className='row mb-5 border-bottom'>
          <div className='col-10'>
             <h1>User detail page</h1>
          </div>
          <div className='col-2'>
             <Link to={'/dashboard'} className='btn btn-dark'>Back</Link>
          </div>
        </div>
        <div className='row'>
        <div className='col-md-6'>
              {<img src={data.myPic} width="550" height="400" alt="user pro" />}
          </div>
          <div className='col-6'>
              <h3>MongoDB_Id: <span className="text-primary bg-light p-1">{data._id}</span> </h3>
              <h3>UserName:<span className="text-primary bg-light p-1">{data.fullName}</span> </h3>
              <h3>Email Id:<span className="text-primary bg-light p-1">{data.email}</span> </h3>
              <h3>Phone NO.<span className="text-primary bg-light p-1">{data.phone}</span> </h3>
              <h3>Gender:<span className="text-primary bg-light p-1">{data.gender}</span> </h3>
              <h3>City:<span className="text-primary bg-light p-1">{data.city}</span> </h3>
              <h3>Password:<span className="text-primary bg-light p-1">{data.pass}</span> </h3>
          </div>
        </div>
    </div>
  )
}

export default DetailsPage