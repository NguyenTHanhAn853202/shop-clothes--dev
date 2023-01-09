import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Announcement() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contain')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />
                <p>Thêm vào giỏ hàng thành công</p>
            </div>
        </div>
    );
}

export default Announcement;
