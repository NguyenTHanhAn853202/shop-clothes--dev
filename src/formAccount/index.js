import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';

import logoImg from '~/media/image/logo/logo-black-03.png';
const cx = classNames.bind(styles);

function FormAccount() {
    return (
        <div className={cx('wrapper', { wrap: true })}>
            <div className={cx('contain', { grid: true })}>
                <div className={cx('primary-background')}>
                    <div className={cx('logo-img')}>
                        <img src={logoImg} alt="logo" />
                    </div>
                    <div className={cx('title')}>
                        <h1 className={cx('main-title')}>Nền tảng bán hàng trực tuyến</h1>
                        <h1 className={cx('main-title')}>Uy tín, Chất lượng</h1>
                    </div>
                </div>
                <div className={cx('form-background')}>
                    <div className={cx('contain-form')}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormAccount;
