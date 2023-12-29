import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function MyUpdate() {
    const {id} = useParams()
    const [data, setData ] = useState({
        fullName:'',
        email:'',
        phone:'',
        gender:'',
        city:'',
        pass:'',
        myPic:''
    });

    const onUpdate = (e) =>{
        const {name, value} = e.target;
        setData((preval) =>{
            return{
                ...preval,
                [name]:value
            }
        })
    };

    // single data api................................................................................................
    const getSingleData = useRef(() => {
        axios.get(`https://curdcharkhwal.onrender.com/singledata/${id}`).then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }).current;
    
    useEffect(() => {
        getSingleData();
    }, [getSingleData]);
    
           

    // update req api.................................................................................................
   const update = async () => {
        try {
            const { fullName, email, phone, gender, city, pass, myPic } = data;
            const res = await fetch(`https://curdcharkhwal.onrender.com/updateuser/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify({ fullName, email, phone, gender, city, pass, myPic })
            });
            const jsonData = await res.json();
            console.log(jsonData);
            window.location.href = "/dashboard";
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };
    

  return (
    <div className='container page rounded bg-light reg pt-2 p-5 border shadow'>
        <div className='row'>
            <div className='text-center mt-4'>
                <h3>Update the Details</h3>
            </div>
            <div className='col-6 mt-2'>
                <label className='form-label'>Full Name:</label>
                <input className='form-control' type='text' name='fullName' value={data.fullName} onChange={onUpdate}/>
            </div>
            <div className='col-6 mt-2'>
                <label className='form-label'>Email Id:</label>
                <input className='form-control' type='text'  name='email' value={data.email} onChange={onUpdate}/>
            </div>
            <div className='col-6 mt-2'>
                <label className='form-label'>Phone No.</label>
                <input className='form-control' type='text'  name='phone' value={data.phone} onChange={onUpdate}/>
            </div>
            <div className='col-6 mt-2'>
                <label className='form-label'>Gender:</label>
                <select className="form-control" name='gender' value={data.gender} onChange={onUpdate}>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div className='col-6 mt-2'>
                <label className='form-label'>City:</label>
                <input className='form-control' type='text'  name='city' value={data.city} onChange={onUpdate}/>
            </div>
            <div className='col-6 mt-2'>
                <label className='form-label'>Password:</label>
                <input className='form-control' type='text'  name='pass' value={data.pass} onChange={onUpdate}/>
            </div>
            <div className='col-12 mt-2'>
                <label className='form-label'>Profile Picture::</label>
                <input placeholder='Add your image address :-' className='form-control' type='text'  name='myPic' value={data.myPic} onChange={onUpdate}/>
            </div>
            <div className='col-md-12 pt-2 mt-2 text-center'>
                <button className='btn btn-info col-12' type='button' onClick={getSingleData}>Reset</button>
                <button className='btn btn-warning mt-4 col-12' type='button' onClick={update}>Update</button>
                {/* <button className='btn btn-info col-5 mt-4'   type='button' onClick={update}>Update</button> */}
            </div>
        </div>
    </div>
  )
}

export default MyUpdate