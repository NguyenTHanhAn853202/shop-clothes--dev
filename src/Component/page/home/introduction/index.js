import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import logoImg from '~/media/image/logo/logo-02.png';
const cx = classNames.bind(styles);

function Introduction() {
    return (
        <div className={cx('wrapper', { ['wrap']: 'wrap' })}>
            <div className={cx('contain', { ['grid']: 'grid' })}>
                <img className={cx('logo')} src={logoImg} alt={'logo'} />
                <div className={cx('info')}>
                    <h3 className={cx('title')}>2019 New Arrivals</h3>
                    <h2 className={cx('name-shop')}>Pleats kora store</h2>
                    <p className={cx('description')}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                    <Link className={cx('link')} to={'/gioi-thieu'}>
                        Về chúng tôi
                        <span>
                            <FontAwesomeIcon icon={faRightLong} />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
