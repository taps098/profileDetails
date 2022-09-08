import React, {useState} from "react";

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
    const [userName, setUserName] = useState('');
    const [edit, setEdit] = useState(false);
/**
* function to state of Edit
*/
 const handleEdit = () => {
    setEdit(!edit);     
}

/**
 * function to handle the name change
 */
const handleNameChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value)
}
/**
 * handle save button functionality
 * to save the data in the store
 */
const handleSave = () => {
    setNameInState(
        {
        ...profileDetails,
        userName,
        });
    setEdit(!edit); 
};

    return(
        <div className="user-details">
                <div className="user-profileDetails">
                <div className="user-name-content">
                    <div className="user-name">
                        {
                        edit ? 
                        <input data-testid='nameInput' value={userName} onChange={handleNameChange}/>
                        :<div data-testid='nameField'>{profileDetails.userName}</div>
                        }
                    </div>
                    <div>
                        {
                            edit ? <button data-testid='save-button' className="save-button" onClick={handleSave}>Save</button> 
                            : <img data-testid='edit-button' src={pencil} alt='img' onClick={handleEdit} class="bi bi-pencil"/>
                        }
                    </div>   
                </div>
                <div className="user-details-content">
                    <img src={envelope} alt='img' className="bi bi-envelope" />
                    
                    <div className="profile-line">{profileDetails.mailId}</div>
                </div>
                <div className="user-details-content">
                    <div><img src={filePerson} alt='img' class="bi bi-file-person"/></div>
                    <div className="profile-line">{profileDetails.address}</div>
                </div>
                <div className="user-details-content">
                    <div><img src={telephone} alt='img' class="bi bi-file-person"/></div>
                    <div className="profile-line">{profileDetails.phoneNumber}</div>
                </div>
                <div className="user-details-content">
                    <div><img src={globe} alt='img' class="bi bi-file-person" /></div>
                    <div className="profile-line">{profileDetails.org}</div>
                </div>
                </div>
                <div className="company-logo">
                    <div ><img src={bank} alt='img' class="bi bi-file-person" /></div>
                    <div className="profile-line">
                        <div className="company-name"> McKenzie LLC</div>
                        <div className="company-statment">Quality focused value-added synergy</div>
                    </div>
                </div>
                
            </div>
    );
};

export default ProfileDetails;