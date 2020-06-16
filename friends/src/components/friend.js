import React from 'react';

function Friend (props){
    const {friend} = props;

    return(
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
        </tr>
    )
}

export default Friend