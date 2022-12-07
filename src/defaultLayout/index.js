import Header from '~/Component/header';
import Footer from '~/Component/footer';
import styles from './styles.module.scss';
import Begin from '~/begin';
import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';


const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper-contain')}>
            <div className={cx('begin')}>
                <Begin />
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('contain')}>
                    <Header />
                    <div className={cx('main')}>{children}</div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
