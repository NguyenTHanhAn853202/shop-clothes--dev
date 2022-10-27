import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Contain({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Contain;
