import FormLogin from '~/formLogin';
import Input from '~/Input';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
import {
    checkSamePassBlur,
    handleBlur,
    HandleOnChangePass,
    HandleOnChangeSamePass,
} from '~/utils/checkPassWord/checkPassWord';

const cx = classNames.bind(styles);

function Register() {
    const inputPassRef = useRef();
    const inputSamePassRef = useRef();
    const [checkPass, setCheckPass] = useState(true);
    const [checkSamePass, setCheckSamePass] = useState(true);
    const [valuePass, setValuePass] = useState('');
    const [valueSamePass, setValueSamePass] = useState('');

    useEffect(() => {
        if (valuePass === valueSamePass) {
            setCheckSamePass(true);
        }
    }, [valuePass, valueSamePass]);

    return (
        <FormLogin
            title="ĐĂNG KÝ"
            titleAccount="Địa chỉ email *"
            typeBtn={'submit'}
            titleButton="Đăng ký"
            valueRegister={[valuePass, valueSamePass]}
        >
            <Input
                value={valuePass}
                ref={inputPassRef}
                onBlur={(e) => handleBlur(valuePass, setCheckPass)}
                onChange={(e) => HandleOnChangePass(e, setValuePass)}
                title={'Nhập mật khẩu *'}
                classNames={cx('ip-form', { ['error-border']: !checkPass })}
                placeholder={''}
                type={'password'}
            />
            {!checkPass && <p className={'title-error'}>Mật khẩu phải có 8 kí tự, có số, chữ hoa và kí tự đặc biệt </p>}
            <Input
                value={valueSamePass}
                ref={inputSamePassRef}
                onChange={(e) => HandleOnChangeSamePass(e, setValueSamePass)}
                onBlur={(e) => checkSamePassBlur(valuePass, valueSamePass, setCheckSamePass)}
                title={'Nhập lại mật khẩu *'}
                classNames={cx('ip-form', { ['error-border']: !checkSamePass })}
                placeholder={''}
                type={'password'}
            />
            {!checkSamePass && <p className={'title-error'}>Mật khẩu không trùng khớp </p>}
        </FormLogin>
    );
}

export default Register;
