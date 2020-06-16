import React, { useEffect, useState } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

function FriendsList(){
    const [friendsList, setFriendsList] = useState([]);

    const fetchFriends = ()=>{
        axiosWithAuth()
            .get('/api/friends')
            .then(res=>{
                setFriendsList(res.data)
            })
    }
    useEffect(()=>{
        fetchFriends()
    }, [])
    return(
        <div>
            <h1>Friends:</h1>
            <ul>
                {friendsList.map(friend=>{
                    return (
                        <li>{friend.name}
                            <ul>
                                <li>age: {friend.age}</li>
                                <li>email: {friend.email}</li>
                            </ul>
                        </li>
                    )
                })}
            </ul>  
        </div>

    )
}

export default FriendsList