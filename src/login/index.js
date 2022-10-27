import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Contain from '~/contain';
import FormLogin from '~/formLogin';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Login({ ...props }) {
    const wrapRef =  useRef()
    const handleClick = (e) => {
        const _check = e.target === wrapRef.current
        if (_check) {
            props.onClick()
        }
    }
    return (
        <div   className={cx('wrapper')}>
            <button {...props} className={cx('close')}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <div onClick={handleClick} ref={wrapRef} className={cx('contain')}>
                <div className={cx('box')}>
                    <Contain>
                        <div className={cx('form')}>
                            <div className={cx('login')}>
                                <FormLogin
                                    title="ĐĂNG NHẬP"
                                    titleAccount="Nhập tên đăng nhập hoặc đọa chỉ email *"
                                    titlePassword="Mật khẩu *"
                                    placeholder=""
                                    type="text"
                                    titleButton="Đăng nhập"
                                    checkbox={true}
                                />
                            </div>
                            <div className={cx('wall', { ['wall-colum']: 'wall-colum' })}></div>
                            <div className={cx('register')}>
                                <FormLogin
                                    title="ĐĂNG KÝ"
                                    titleAccount="Địa chỉ email *"
                                    titlePassword="Mật khẩu *"
                                    placeholder=""
                                    type="text"
                                    titleButton="Đăng ký"
                                />
                            </div>
                        </div>
                        <a href="" className={cx('forget-password')}>
                            Quên mật khẩu?
                        </a>
                    </Contain>
                </div>
            </div>
        </div>
    );
}

export default Login;
