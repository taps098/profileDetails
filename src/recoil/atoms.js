import { atom } from 'recoil';

export const userProfileDetails = atom({
    key: 'userProfileDetails',
    default: {
        userName: "Lois Zemlak",
        mailId: "maida.becker98.gmail.com",
        address: "Clemin Plain st, Apt462, North Connertown, 99373",
        phoneNumber: '(293)4148005',
        org: "marianne.org",
    }
})