import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const [inputData , setInputData] = useState({
        name: '',
        email: '',
        contact: ''
    })

    const navigate = useNavigate()

    const inputDataHandler = (event) =>{
        setInputData({...inputData , [event.target.name]:event.target.value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:3030/User",inputData)
        .then((res)=>{
            navigate('/')
            alert("Created Successfully..")
            
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    return ( 
        <div className="container-fluid mt-5" >
        <h1 className="mt-5">Create User</h1>
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
 
export default Create;