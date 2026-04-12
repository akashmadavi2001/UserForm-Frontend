import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        email: "",
        date: ""
    })

    const { name, email, date } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const saveUser = async (e) => {
        e.preventDefault();
        await axios
            .put(`http://localhost:8080/user/${id}`, user)
        navigate("/");
    }

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadUser = async () => {
        await axios
            .get(`http://localhost:8080/user/${id}`, user)
            .then((res) => setUser(res.data))
    }

    return (
        <div className='adduser shadow my-5 p-4 rounded border offset-md-3 col-md-6'>
            <h3 className='text-center m-4'>Edit User</h3>
            <form onSubmit={(e) => saveUser(e)}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    className='form-control'
                    placeholder='Enter Your Name'
                    name='name'
                    required />
                <br />
                <input
                    type="text"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                    className='form-control'
                    placeholder='Enter Your Email'
                    name='email'
                    required />
                <br />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => onInputChange(e)}
                    className='form-control date'
                    name='date'
                    required />
                <br />
                <button type={'submit'} className='btn btn-outline-primary mx-2'>Save</button>
                <Link to={"/"}><button type={'cancel'} className='btn btn-outline-danger'>Cancel</button></Link>
            </form>
        </div>
    )
}
