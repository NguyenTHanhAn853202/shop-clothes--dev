import styles from './createAccount.module.scss';
import classNames from 'classnames/bind';
import Input from '~/Input';
import image from '~/media/image/logo/logo-black-03.png';
import { useEffect, useReducer, useState } from 'react';
import reducer, { states as stateReducer } from './reducer';
import NotifyContainer, { notify } from '~/utils/notification';
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
} from './reducer/key';
import Button from '~/button';
import { registerManager } from '~/api-server/loginService';
import { fas } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const isEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
function CreateAccount() {
    const [states, dispatch] = useReducer(reducer, stateReducer);
    const [callApi, setCallApi] = useState(false);
    // function support
    const checkPassword = (value) => {
        const length = value.length > 7;
        const uppercase = value.split('').some((item) => item.toUpperCase() === item);
        const number = value.split('').some((item) => !isNaN(item));
        const speacial = value
            .split('')
            .some((item) => (item < '0' || item > '9') && (item < 'A' || item > 'Z') && (item < 'a' || item > 'z'));
        return length && uppercase && number && speacial;
    };

    const checkSamePass = (pass, rePass) => {
        return pass === rePass && pass && states?.isPassword ? true : false;
    };

    // handle event
    const handleChangeEmail = (e) => {
        dispatch({ key: EMAIL, value: e.target.value.trim() });
        if (isEmail.test(e.target.value.trim())) dispatch({ key: ISEMAIL, value: true });
    };
    const handleBlurEmail = (e) => {
        if (isEmail.test(states?.email)) dispatch({ key: ISEMAIL, value: true });
        else dispatch({ key: ISEMAIL, value: false });
    };
    const handleChangePassword = (e) => {
        dispatch({ key: PASSWORD, value: e.target.value.trim() });
        if (checkPassword(e.target.value)) dispatch({ key: ISPASSWORD, value: true });
    };
    const handleBlurPassword = (e) => {
        dispatch({ key: ISPASSWORD, value: checkPassword(states?.password) });
    };
    const handleChangeRePassword = (e) => {
        dispatch({ key: REPASSWORD, value: e.target.value.trim() });
        if (checkSamePass(states?.password, e.target.value)) dispatch({ key: ISREPASSWORD, value: true });
    };
    const handleBlurRePassword = (e) => {
        dispatch({ key: ISREPASSWORD, value: checkSamePass(states?.password, states?.rePassword) });
    };
    const handleChangeRole = (e) => {
        dispatch({ key: TYPEOFROLE, value: e.target.value });
        dispatch({ key: ISTYPEOFROLE, value: e.target.value ? true : false });
    };
    const handleChangeYourPassword = (e) => {
        dispatch({ key: YOURPASSWORD, value: e.target.value.trim() });
        if (e.target.value.trim().length > 7) dispatch({ key: ISYOURPASSWORD, value: true });
    };
    const handleBlurYourPassword = (e) => {
        dispatch({ key: ISYOURPASSWORD, value: states.yourPassword.length > 7 });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleBlurYourPassword();
        handleBlurEmail();
        handleBlurPassword();
        handleBlurRePassword();
        if (!states.typeOfRole) dispatch({ key: ISTYPEOFROLE, value: false });
        setCallApi(true);
    };

    useEffect(() => {
        if (callApi) {
            if (
                states.isEmail &&
                states.isPassword &&
                states.isRePassword &&
                states.isTypeOfRole &&
                states.isYourPassword
            ) {
                (async () => {
                    const data = await registerManager(
                        states.email,
                        states.password,
                        states.rePassword,
                        states.typeOfRole,
                        states.yourPassword,
                    );
                    if (!data.success) {
                        const message = data.message;
                        if (message === 'user name was exits' || message === 'check user name') {
                            dispatch({ key: ISEMAIL, value: false });
                        } else if (message === 'password is invalid') {
                            dispatch({ key: ISPASSWORD, value: false });
                        } else if (message === 'password is not same') {
                            dispatch({ key: ISPASSWORD, value: false });
                            dispatch({ key: ISREPASSWORD, value: false });
                        } else if (message === 'check your password') {
                            dispatch({ key: ISYOURPASSWORD, value: false });
                        } else if (message === 'check role') dispatch({ key: TYPEOFROLE, value: false });
                        notify('error', message);
                    } else {
                        dispatch({ key: EMAIL, value: '' });
                        dispatch({ key: PASSWORD, value: '' });
                        dispatch({ key: REPASSWORD, value: '' });
                        dispatch({ key: TYPEOFROLE, value: '' });
                        dispatch({ key: YOURPASSWORD, value: '' });
                        notify('success', data.message);
                    }
                })();
            }
            setCallApi(false);
            console.log(states.typeOfRole);
        }
    }, [callApi]);
    return (
        <div className={cx('wrapper', { wrap: true })}>
            <NotifyContainer />
            <div className={cx('contain', { grid: true })}>
                <div className={cx('logo')}>
                    <img src={image} alt="logo" />
                    <h1>Chất lượng làm nên thương hiệu</h1>
                </div>
                <form onSubmit={handleSubmit} className={cx('form-submid')}>
                    <div className={cx('contain-input')}>
                        <label htmlFor={cx('email')}>Địa chỉ Email *</label>
                        <Input
                            classNames={cx({ error: !states?.isEmail })}
                            value={states?.email}
                            onBlur={handleBlurEmail}
                            onChange={handleChangeEmail}
                            type="email"
                            w100
                            id={cx('email')}
                        />
                        {!states.isEmail && <h2 className={cx('notify')}>Email không hợp lệ</h2>}
                    </div>
                    <div className={cx('contain-input')}>
                        <label htmlFor={cx('passitem')}>Mật khẩu *</label>
                        <Input
                            onBlur={handleBlurPassword}
                            onChange={handleChangePassword}
                            classNames={cx({ error: !states?.isPassword })}
                            type="password"
                            value={states.password}
                            w100
                            id={cx('password')}
                        />
                        {!states.isPassword && (
                            <h2 className={cx('notify')}>
                                Mật khẩu không hợp lệ. Mật khẩu bao gồm kí tự hoa, số, kí tự đặc biệt và có độ dài lớn
                                hơn 7
                            </h2>
                        )}
                    </div>
                    <div className={cx('contain-input')}>
                        <label htmlFor={cx('re-password')}>Nhập lại mật khẩu *</label>
                        <Input
                            onChange={handleChangeRePassword}
                            onBlur={handleBlurRePassword}
                            value={states.rePassword}
                            classNames={cx({ error: !states?.isRePassword })}
                            type="password"
                            w100
                            id={cx('re-password')}
                        />
                        {!states.isRePassword && <h2 className={cx('notify')}>Mật khẩu không trùng khớp</h2>}
                    </div>
                    <div className={cx('contain-input')}>
                        <select
                            value={states.typeOfRole.trim() || ''}
                            className={cx({ error: !states?.isTypeOfRole })}
                            onChange={handleChangeRole}
                        >
                            <option value={''}>Loại tài khoản</option>
                            <option value={'employee'}>
                                Nhân Viên
                            </option>
                            <option value={'manager'}>Quản Lý</option>
                        </select>
                        {!states.isTypeOfRole && <h2 className={cx('notify')}>Chọn loại tài khoản</h2>}
                    </div>
                    <div className={cx('contain-input')}>
                        <label htmlFor={cx('your-password')}>Xác nhận mật khẩu của bạn *</label>
                        <Input
                            onChange={handleChangeYourPassword}
                            onBlur={handleBlurYourPassword}
                            classNames={cx({ error: !states?.isYourPassword })}
                            type="password"
                            w100
                            value={states.yourPassword}
                            id={cx('your-password')}
                        />
                        {!states.isYourPassword && <h2 className={cx('notify')}>Mật khẩu không chính xác</h2>}
                    </div>
                    <Button type="submit" ishover classNames={cx('btn-submit')}>
                        Xác nhận
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;
