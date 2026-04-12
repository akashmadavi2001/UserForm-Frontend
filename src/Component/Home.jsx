import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const [user, setUser] = useState([]);

    const loader = async () => {
        await axios
            .get("http://localhost:8080/user")
            .then((res) => setUser(res.data))
    }

    useEffect(() => {
        loader();
    }, [])

    const deleteUser = async (id) => {
        await axios
            .delete(`http://localhost:8080/user/${id}`)
         loader();
    }

    return (
        <div className="home p-5">
            <Link to={"/adduser"}><button className='btn btn-primary my-2'>Add User</button></Link>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((u, i) =>
                        <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.date}</td>
                            <td>
                                <Link to={`/viewuser/${u.id}`}><button className='btn btn-primary mx-1'>View</button></Link>
                                <Link to={`/edituser/${u.id}`}><button className='btn btn-outline-primary mx-1'>Edit</button></Link>
                                <button onClick={() => deleteUser(u.id)} className='btn btn-outline-danger mx-1'>Delete</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Home