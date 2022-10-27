import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>GET 20% OFF COUPON</h1>
            <p className={cx('description')}>
                They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places
            </p>
            <div className={cx('contain-input')}>
                <input className={cx('input')} type="text" placeholder='Email ...'/>
                <button className={cx('btn')}>Đăng kí</button>
            </div>
        </div>
    );
}

export default Register;
