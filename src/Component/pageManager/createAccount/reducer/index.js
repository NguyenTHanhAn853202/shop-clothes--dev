import {
    EMAIL,
    ISEMAIL,
    ISPASSWORD,
    ISREPASSWORD,
    ISTYPEOFROLE,
    ISYOURPASSWORD,
    PASSWORD,
    REPASSWORD,
    TYPEOFROLE,
    YOURPASSWORD,
} from './key';

export const states = {
    isEmail: true,
    isPassword: true,
    isRePassword: true,
    isTypeOfRole: true,
    isYourPassword: true,
    email: '',
    password: '',
    rePassword: '',
    typeOfRole: '',
    yourPassword: '',
};

export default function reducer(states, action) {
    const { key, value } = action;
    switch (key) {
        case ISEMAIL:
            return { ...states, isEmail: value };
        case ISPASSWORD:
            return { ...states, isPassword: value };
        case ISREPASSWORD:
            return { ...states, isRePassword: value };
        case ISTYPEOFROLE:
            return { ...states, isTypeOfRole: value };
        case ISYOURPASSWORD:
            return { ...states, isYourPassword: value };
        case EMAIL:
            return { ...states, email: value };
        case PASSWORD:
            return { ...states, password: value };
        case REPASSWORD:
            return { ...states, rePassword: value };
        case TYPEOFROLE:
            return { ...states, typeOfRole: value };
        case YOURPASSWORD:
            return { ...states, yourPassword: value };
        default:
            return { ...states };
    }
}
