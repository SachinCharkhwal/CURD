import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// all data get api.....................................................
function Landing() {
  const [data, setData] = useState([]);
  const GetMyAllData = ()=>{
    axios.get('https://curdcharkhwal.onrender.com/alldata').then((res)=>{
      console.log(res.data);  
      setData(res.data)
    })
  }
useEffect(()=>{
  GetMyAllData()
},[])

// delete req api for single data............................................................
const deleteRecord = async(id)=>{
    await axios.delete(`https://curdcharkhwal.onrender.com/deleterecord/${id}`).then((res)=>{
    console.log(res.data)
    GetMyAllData();
    });
}

  return (
    <div className='container page'>
      <div className='row'>
        <div className='col-12'>
          <div className='col-12 text-end'>
            <p className='h5'>Total :- {data.length}</p>
          </div>
        <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">SR_No</th>
                <th scope="col">MongoDB Id</th>
                <th scope="col">User Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Phone No.</th>
                <th scope="col">Gender</th>
                <th scope="col">City</th>
                <th scope='col'>Password</th>
                <th scope="col">Profile Image</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d,i)=>{
                return(
                  <tr key={d._id}>
                    <th scope="row">{i+1} </th>
                    <th scope="row">{d._id} </th>
                    <td>{d.fullName} </td>
                    <td>{d.email} </td>
                    <td>{d.phone} </td>
                    <td>{d.gender} </td>
                    <td>{d.city}</td>
                    <td>{d.pass}</td>
                    <td><img src={d.myPic} width="85" alt="user pro" /></td>
                    <td>
                      <Link className='btn btn-sm btn-primary' to={`userdetail/${d._id}`}>View</Link>
                      <Link className='btn btn-sm btn-warning ms-2' to={`update/${d._id}`}>Update</Link>
                      <button className='btn btn-sm btn-danger ms-2' onClick={()=>deleteRecord(d._id)} >Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Landing