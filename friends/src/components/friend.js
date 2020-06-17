import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const initialVals = {
    name: '',
    age: '',
    email: ''
}

function Friend (props){
    const {friend, friendsList} = props;

    const [friendEditing, setFriendEditing] = useState(false)

    const deleteFriend = event =>{
        event.preventDefault();
        axiosWithAuth()
        .delete(`/api/friends/${friend.id}`)
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.error('error deleting:', err)
            })
    }

    const editFriend = id =>{
        axiosWithAuth()
        .put(`/api/friends/${id}`)
    }

    const toggleEdit = event =>{
        event.preventDefault();
        setFriendEditing(!friendEditing)
    }

    return(
        <>
            {!friendEditing ?(
                <tr>
                    <td>
                        {friend.name}
                    </td>
                    <td>
                        {friend.age}
                    </td>
                    <td>
                        {friend.email}
                    </td>
                    <td>
                        <button onClick={toggleEdit}>Edit</button>
                        <button onClick={deleteFriend}>Delete</button>
                    </td>
                </tr>
            ):(
                <tr>
                    <td>
                        <input
                            type='text'
                            name='name'
                        />
                    </td>
                    <td>
                        {friend.age}
                    </td>
                    <td>
                        {friend.email}
                    </td>
                    <td>
                        <button onClick={toggleEdit}>Edit</button>
                        <button onClick={deleteFriend}>Delete</button>
                    </td>
                </tr>
            )}
        </>
    )
}

export default Friend