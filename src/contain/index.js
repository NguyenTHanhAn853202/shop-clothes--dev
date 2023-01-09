import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Contain({ children, isNotPadding = false }) {
    return <div className={cx('wrapper', { isNotPadding })}>{children}</div>;
}

export default Contain;
