import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";


const Edit = () => {
    const [inputData , setInputData] = useState({
        name: '',
        email: '',
        contact: ''
    }) ;

    const {id} = useParams();

    const navigate = useNavigate();

    const inputDataHandler = (event) =>{
        setInputData({...inputData , [event.target.name]:event.target.value});
    }

    useEffect(()=>{
        axios.get(`http://localhost:3030/User/${id}`)
        .then((res)=>{
            setInputData(res.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[id])

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put(`http://localhost:3030/User/${id}`,inputData)
        .then((res)=>{
            alert("Updated Successfully..")
            navigate('/')
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    return ( 
        <div className="container-fluid mt-5" >
        <h1 className="mt-5">Edit User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type='text' name='name' className="form-control" value={inputData.name} onChange={inputDataHandler}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type='email' name='email' className="form-control" value={inputData.email} onChange={inputDataHandler}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="contact">contact</label>
                        <input type='tel' name='contact' className="form-control" value={inputData.contact} onChange={inputDataHandler} maxLength="10" placeholder="+91"/>
                    </div>

                    <button className="btn btn-primary mt-3">Create</button>

                </form>
            </div>
     );
}
 
export default Edit;