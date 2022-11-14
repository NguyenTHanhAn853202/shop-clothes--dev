import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Begin() {
    return (
        <div className={cx('wrapper', { wrap: true })}>
            <div className={cx('contain', { grid: true })}>
                <h2 className={cx('sale')}>Free shipping with order over $65</h2>
                {
                    <div className={cx('contain-from')}>
                        <Link to={'/account/login'} className={cx('login')}>
                            Đăng nhập
                        </Link>
                        <span>/</span>
                        <Link to={'/account/register'} className={cx('register')}>
                            Đăng kí
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
}

export default Begin;
