import React, { useState, useCallback } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { userProfileDetails } from "../recoil/atoms";

import envelope from '../extra/envelope.svg';
import pencil from '../extra/pencil.svg';
import filePerson from '../extra/file-person.svg';
import telephone from '../extra/telephone.svg';
import globe from '../extra/globe.svg';
import bank from '../extra/bank2.svg';


/**
 * Function to render and modify the user details 
 * @returns profileDetails
 */
const ProfileDetails = () => {
    const profileDetails = useRecoilValue(userProfileDetails);
    const setNameInState = useSetRecoilState(userProfileDetails);
    const [userName, setUserName] = useState(profileDetails.userName);
    const [isEditMode, setIsEditMod] = useState(false);
    /**
    * function to state of Edit
    */
    const handleEdit = useCallback(() => {
        setIsEditMod((oldValue) => !oldValue);
    }, []);

    /**
     * function to handle the name change
     */
    const handleNameChange = useCallback((e) => {
        setUserName(e.target.value)
    }, []);

    /**
     * handle save button functionality
     * to save the data in the store
     */
    const handleSave = useCallback(() => {
        setNameInState(
            {
                ...profileDetails,
                userName,
            });
        setIsEditMod(false);
    }, [userName, isEditMode]);

    return (
        <div className="user-details">
            <div className="user-profileDetails">
                <div className="user-name-content">
                    <div className="user-name">
                        {
                            isEditMode ?
                                <input className="nameInputStyle" data-testid='nameInput' value={userName} onChange={handleNameChange} />
                                : <div data-testid='nameField'>{profileDetails.userName}</div>
                        }
                    </div>
                    <div>
                        {
                            isEditMode ? <button data-testid='save-button' className="save-button" onClick={handleSave}>Save</button>
                                : <img data-testid='edit-button' src={pencil} alt='img' onClick={handleEdit} />
                        }
                    </div>
                </div>
                <div className="user-details-content">
                    <img src={envelope} alt='img' />

                    <div className="profile-line">{profileDetails.mailId}</div>
                </div>
                <div className="user-details-content">
                    <div><img src={filePerson} alt='img' /></div>
                    <div className="profile-line">{profileDetails.address}</div>
                </div>
                <div className="user-details-content">
                    <div><img src={telephone} alt='img' /></div>
                    <div className="profile-line">{profileDetails.phoneNumber}</div>
                </div>
                <div className="user-details-content">
                    <div><img src={globe} alt='img' /></div>
                    <div className="profile-line">{profileDetails.org}</div>
                </div>
            </div>
            <div className="company-logo">
                <div ><img src={bank} alt='img' /></div>
                <div className="profile-line">
                    <div className="company-name"> McKenzie LLC</div>
                    <div className="company-statment">Quality focused value-added synergy</div>
                </div>
            </div>

        </div>
    );
};

export default ProfileDetails;