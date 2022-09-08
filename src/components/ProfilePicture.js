import React from "react";

/**
 * Function to render the profile picture.
 * @returns ProfilePicture
 */
const ProfilePicture = ({ userImage }) => {
    return (
        <div className="user-pic">
            <img src={userImage} className="App-logo" alt="logo" />
        </div>
    );
};

export default ProfilePicture;