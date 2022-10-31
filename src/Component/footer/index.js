import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import CopyRight from './copyRight';
import Feature from './feature';
import Register from './register';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper', { wrap: true })}>
            <div className={cx('contain', { grid: true })}>
                <div className={cx('copy-right')}>
                    <CopyRight />
                </div>
                <Feature />
                <div className={cx('register')}>
                    <Register />
                </div>
            </div>
        </div>
    );
}

export default Footer;
