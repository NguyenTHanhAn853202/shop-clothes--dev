import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Card({ title, icon, description, isIcon }) {
    const Icon = icon;
    return (
        <div className={cx('wrapper')}>
            <span className={cx('icon-header')}>{Icon}</span>
            <h1 className={cx('title')}>{title}</h1>
            <p className={cx('description')}>{description}</p>
            {isIcon && (
                <div className={cx('icon-footer')}>
                    <Link className={cx('link')} to={'gioi-thieu'}>
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Card;
