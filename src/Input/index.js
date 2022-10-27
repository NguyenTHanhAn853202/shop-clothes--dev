import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Input({
    title = false,
    w100 = false,
    w50 = false,
    w30 = false,
    gold = false,
    classNames,
    placeholder,
    type = 'text',
}) {
    return (
        <div className={cx('wrapper')}>
            {title && <h2 className={cx('title')}>{title}</h2>}
            <input
                className={cx('input', { [classNames]: classNames, gold, w100, w50, w30 })}
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
}

export default Input;
