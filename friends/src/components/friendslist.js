import React, { useEffect, useState } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Friend from './friend'

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
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Edit/Delete</th>
                </tr>
                {friendsList.map((friend, index)=>{
                    return(
                        <Friend key={friend.name} index={index} friendsList={friendsList} friend={friend}/>
                    )
                })}
            </table>
        </div>

    )
}

export default FriendsList