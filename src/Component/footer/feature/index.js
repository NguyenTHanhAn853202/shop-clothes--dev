import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Feature() {
    return (
        // <div className={cx('wrapper')}>
          <>
                <div className={cx('feature')}>
                    <Link to={'gioi-thieu'} className={cx('title')}>Giới thiệu</Link>
                    <Link to={'tin-tuc-su-kien'} className={cx('title')}>Tinh tức & Sự kiện</Link>
                    <Link to={'cua-hang'} className={cx('title')}>Store</Link>
                    <Link to={'lien-he'} className={cx('title')}>Liên hệ</Link>
                </div>
                <div className={cx('feature')}>
                    <Link to={'tai-khoan'} className={cx('title')}>Tài khoản</Link>
                    <Link to={'gio-hang'} className={cx('title')}>Giỏ hàng</Link>
                    <Link to={'thanh-toan'} className={cx('title')}>Thanh toán</Link>
                    <Link to={'kiem-tra'} className={cx('title')}>Kiểm tra đơn hàng</Link>
                </div>
          </>
        // </div>
    );
}

export default Feature;
