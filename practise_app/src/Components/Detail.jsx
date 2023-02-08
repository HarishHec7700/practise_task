import React from 'react';

function Detail({selectedUser}) {
  console.log(selectedUser)
  return (
    <>
      <div className="employee-details">
        <p>First Name: {selectedUser.first_name}</p>
        <p>Last Name: {selectedUser.last_name}</p>
        <p>Gender: {selectedUser.gender}</p>
        <p>Email: {selectedUser.email}</p>
        <p>Address: <address>{selectedUser.address}</address></p>
      </div>
    </>
    )
}

export default Detail