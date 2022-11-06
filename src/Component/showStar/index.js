import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const stars = [1, 2, 3, 4, 5];

function ShowStar({ starCurrent, classNames, ...props }) {
    return (
        <div className={cx('wrapper')}>
            {stars.map((item) => (
                <span {...props} key={item} className={cx('star', { [classNames]: classNames })}>
                    <span className={cx('deactive', { ['d-n']: starCurrent < item })}>
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className={cx('active', { ['d-n']: starCurrent >= item })}>
                        <FontAwesomeIcon icon={faStarRegular} />
                    </span>
                </span>
            ))}
        </div>
    );
}

export default ShowStar;
