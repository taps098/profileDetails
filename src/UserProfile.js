import React from "react";
import ProfilePicture from "./components/ProfilePicture";
import ProfileDetails from "./components/ProfileDetails";
import userImage from './extra/userImage.jpeg';


/**
 * Function to render the user profile.
 * @returns UserProfile 
 */
const UserProfile = () => {
    return (
        <div className="user-profile">
            <ProfilePicture userImage={userImage} />
            <ProfileDetails />
        </div>
    );
};

export default UserProfile;