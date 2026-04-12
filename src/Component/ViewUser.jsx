import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


export default function ViewUser() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        date: ""
    });

    const { id } = useParams();
    
    useEffect(() => {
        loader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loader = async () => {
        await axios
            .get(`http://localhost:8080/user/${id}`)
            .then((res) => setUser(res.data))
    }

    return (
        <div className='view shadow m-5 p-5 card'>
            <h3>User Details </h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Date: {user.date}</p>
            <Link to={"/"}><button className='btn btn-primary my-2'>Back to Home</button></Link>
        </div>
    )
}
