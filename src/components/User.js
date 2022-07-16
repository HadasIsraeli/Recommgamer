import React from 'react';


const User = ({ users, deleteUser }) => {
    const userList = users.map(user => {
        return (
            <div className="user" key={user.id}>
                <div>Name: {user.name} </div>
                <div>userName: {user.userName} </div>
                <div>Age: {user.age} </div>
                <div>Gender: {user.gender} </div>
                <button onClick={() => { deleteUser(user.id) }}>Delete User</button>
            </div>
        )
    })

    return (
        <div className="user-list">
            {userList}
        </div>
    )
}

export default User;