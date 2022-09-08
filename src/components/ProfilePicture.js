import React from "react";
import userImage from '../extra/userImage.jpeg';


/**
 * Function to render the profile picture.
 * @returns ProfilePicture
 */
const ProfilePicture = () => {
    return (
        <div className="user-pic">
            <img src={userImage} className="App-logo" alt="logo" />
        </div>
    );
};

export default ProfilePicture;