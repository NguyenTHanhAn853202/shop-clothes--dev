export const checkPassWord = (value) => {
    const isLength = value.length >= 8;
    const length = value.length;
    let uppercase = false;
    let number = false;
    let speacial = false;
    let check = false;
    for (let i = 0; i < length; i++) {
        if (value[i] === value[i].toUpperCase()) {
            uppercase = true;
            break;
        }
    }
    for (let i = 0; i < length; i++) {
        if (Number(value[i])) {
            number = true;
            break;
        }
    }
    for (let i = 0; i < length; i++) {
        const word = value[i];
        if ((word < '0' || word > '9') && (word < 'A' || word > 'Z') && (word < 'a' || word > 'z')) {
            speacial = true;
            break;
        }
    }
    if (isLength && uppercase && number && speacial) {
        check = true;
    }

    return check;
};

const checkSamePass = (a, b) => {
    return a === b;
};

// rules of value password
// length = 8
// have a uppercase
// have a number
// have a speacial word

export const handleBlur = (a, setCheckPass) => {
    if (checkPassWord(a)) {
        setCheckPass(true);
    } else {
        setCheckPass(false);
    }
};

export const checkSamePassBlur = (pass, samePass, set) => {
    if (checkSamePass(pass, samePass) && samePass) {
        set(true);
    } else set(false);
};

export const HandleOnChangePass = (e, set) => {
    set(e.target.value);
};
export const HandleOnChangeSamePass = (e, set) => {
    set(e.target.value);
};
