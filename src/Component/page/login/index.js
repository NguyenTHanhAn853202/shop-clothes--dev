import FormLogin from '~/formLogin';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Input from '~/Input';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Login() {
    const [password, setPassword] = useState('');
    return (
        <FormLogin
            title="ĐĂNG NHẬP"
            titleAccount="Nhập tên đăng nhập hoặc đọa chỉ email *"
            titleButton="Đăng nhập"
            typeBtn="submit"
            checkbox={true}
            password={password}
        >
            <Input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                title={'Mật khẩu *'}
                classNames={cx('ip-form')}
                placeholder={''}
                type={'password'}
            />
            <div>
                <input id="check-box-form-login" className={cx('checbox')} type="checkbox" />
                <label htmlFor="check-box-form-login" className={cx('title-checkbox')}>
                    Ghi nhớ mật khẩu
                </label>
            </div>
        </FormLogin>
    );
}

export default Login;
