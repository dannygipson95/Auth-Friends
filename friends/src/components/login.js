import React, {useState} from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom'

const initialVals = {
    username: '',
    password: ''
}

function Login (){
    const [credentials, setCredentials] = useState(initialVals)
    let history = useHistory()

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const login = event =>{
        event.preventDefault();
        console.log(credentials)
        axiosWithAuth()
            .post('/api/login', credentials)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload);
                history.push('/friendslist')
            })
            .catch(err=>{
                console.error('error logging in:', err)
            })

    }
    return(
        <form onSubmit={login}>
            <input
                type='text'
                name='username'
                value={credentials.username}
                onChange={handleChange}
                placeholder='username'
            />
            <input
                type='text'
                name='password'
                value={credentials.password}
                onChange={handleChange}
                placeholder='password'
            />
            <button>Login</button>
        </form>
    )
}

export default Login