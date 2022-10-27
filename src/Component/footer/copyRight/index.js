import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import logo from '~/media/image/logo/logo-03.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);

function CopyRight() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img className={cx('img')} src={logo} alt={'logo'} />
            </div>
            <h3 className={cx('copy-right')}>
                © 2017 Minera. All Rights Reserved.
                <span>Designed by Mona Media</span>
            </h3>
            <div className={cx('contact')}>
                <a href={'https://www.facebook.com/an.thanh.7921975'} className={cx('btn-contact')}>
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a className={cx('btn-contact')}>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className={cx('btn-contact')}>
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>
        </div>
    );
}

export default CopyRight;
