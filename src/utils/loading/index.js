import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Loading({ fixed = false, bigSize = false, className }) {
    return (
        <div className={cx('wrapper', { fixed })}>
            <div className={cx('contain')}>
                <FontAwesomeIcon
                    className={cx('add-cart__icon-spinner', { bigSize, [className]: className })}
                    icon={faSpinner}
                />
            </div>
        </div>
    );
}

export default Loading;
