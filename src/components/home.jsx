import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3030/User")
      .then((res) => {
        setData(res.data)
        // console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // function handleDelete(id) {
  //   if (window.confirm("Do You want to Delete this record ?")){
  //     axios.delete(`http://localhost:3030/User/${id}`)
  //     .then((res)=>{
  //       navigate('/')
  //       alert("Deleted Successfully")
        
  //     })
  //     .catch((err)=>{console.log(err)
  //     })
  //   }
  // }


  function handleDelete(id) {
    if (window.confirm("Do You want to Delete this record ?")){
      axios.delete(`http://localhost:3030/User/${id}`)
      .then((res)=>{
        setData(data.filter((item)=> item.id !==id ))
        navigate('/')
        alert("Deleted Successfully")
        
      })
      .catch((err)=>{console.log(err)
      })
    }
  }

  return (
    <div className="container-fluid">
      <h1 className="mt-5" >React - CRUD Operations</h1>
      <Link to='/create' className="btn btn-primary" >Add User (+)</Link>
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark" >
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
        {data.map((v, i) => (
            <tr key={i}>
              <td>{v.name}</td>
              <td>{v.email}</td>
              <td>{v.contact}</td>
              <td className="d-flex justify-content-center">
                <Link className="btn btn-warning" to={`/edit/${v.id}`}>Edit</Link>
                <button className="btn btn-danger" onClick={(e)=>{handleDelete(v.id)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
 
};

export default Home;




