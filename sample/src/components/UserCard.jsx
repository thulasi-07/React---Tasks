import React from "react";

const UserCard = () => {
    console.log(props.data);
    return (
        <div className="user-card">
            <img className="user-image" />
            <h3>{props.data.name.first}</h3>
            <p>91+ 1234567890</p>
            <p>User Address</p>
        </div>
    )
}

export default UserCard;