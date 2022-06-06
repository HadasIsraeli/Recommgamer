import React from 'react';

const User = ({ users, deleteUser }) => {
    const userList = users.map(user => {
        // if (user.age > 25) {
        return (
            <div className="user" key={user.id}>
                <div>Name: {user.name} </div>
                <div>Age: {user.age} </div>
                <div>Gender: {user.gender} </div>
                <button onClick={() => { deleteUser(user.id) }}>Delete User</button>
            </div>
        )
        // } else {
        //     return null
        // }
    })

    return (
        <div className="user-list">
            {userList}
        </div>
    )
}

export default User;

// const Practice = ({ practiceis }) => {
//     const pracList = practiceis.map(practice => {
//         return (
//             <div className="practice" key={practice.id}>
//                 <div>Name: {practice.name} </div>
//                 <div>Age: {practice.age} </div>
//                 <div>Color: {practice.color} </div>
//             </div>
//         )
//     })

//     return (
//         <div className="practice-list">
//             { pracList}
//         </div>
//     )
// }

// const Practice = ({ practiceis }) => {
//     return (
//         <div className="practice-list">
//             {
//                 practiceis.map(practice => {
//                     return practice.age > 25 ? (
//                         <div className="practice" key={practice.id}>
//                             <div>Name: {practice.name} </div>
//                             <div>Age: {practice.age} </div>
//                             <div>Color: {practice.color} </div>
//                         </div>
//                     ) : null;
//                 })
//             }
//         </div>
//     )
// }