import React from "react";
import ProfilePicture from "./components/ProfilePicture";
import ProfileDetails from "./components/ProfileDetails";

const UserProfile = () => {
    return (
        <div>
            <ProfilePicture />
            <ProfileDetails />
        </div>
    );
};

export default UserProfile;