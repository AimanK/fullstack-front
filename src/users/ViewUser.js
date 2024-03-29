import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {


    const {id} = useParams()

    const [user, setUser]=useState({
        name: "",
        username: "",
        email: "",
    });

    const {name, username, email} = user;


    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4">
                <h2 clasName="text-center m-4">User Details</h2>

                <div className="card">
                    <div className="card-header">
                        Details of {user.name} :
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>{user.name}</b>
                            </li>
                            <li className="list-group-item">
                                <b>{user.username}</b>
                            </li>
                            <li className="list-group-item">
                                <b>{user.email}</b>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
            </div>
        </div>
    </div>
  )
}
