import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import { useState, useRef } from 'react';
import Login from '~/login';

const cx = classNames.bind(styles);

function Begin() {
    const [_login, setLogin] = useState(false);
    const handleClick = (event) => {
        if (!_login) {
            loginRef.current.style.transform = 'translateY(-30px)';
        } else {
            loginRef.current.style.transform = 'translateY(0)';
        }
        setLogin(!_login);
    };
    const loginRef = useRef();
    return (
        <div className={cx('wrapper', { wrap: true })}>
            {_login && <Login onClick={(e) => handleClick(e)} />}
            <div className={cx('contain', { grid: true })}>
                <h2 className={cx('sale')}>Free shipping with order over $65</h2>
                {
                    <h2 ref={loginRef} onClick={(e) => handleClick(e)} className={cx('login')}>
                        Đăng nhập
                    </h2>
                }
            </div>
        </div>
    );
}

export default Begin;
