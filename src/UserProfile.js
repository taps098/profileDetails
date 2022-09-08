import React from "react";
import ProfilePicture from "./components/ProfilePicture";
import ProfileDetails from "./components/ProfileDetails";

/**
 * Function to render the user profile.
 * @returns UserProfile 
 */
const UserProfile = () => {
    return (
        <div className="user-profile">
            <ProfilePicture />
            <ProfileDetails />
        </div>
    );
};

export default UserProfile;