import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function TitleAndIcon({ icon, title, classNames, ...props }) {
    return (
        <div className={cx('wrapper', { ['classNames']: 'classNames' })} {...props}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </div>
    );
}

export default TitleAndIcon;
