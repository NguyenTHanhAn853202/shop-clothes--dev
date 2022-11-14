import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Input({
    title = false,
    w100 = false,
    w50 = false,
    w30 = false,
    w70=false,
    gold = false,
    classNames,
    placeholder,
    type = 'text',
}) {
    return (
        <>
            {title && <h2 className={cx('title')}>{title}</h2>}
            <input
                className={cx('input', { [classNames]: classNames, gold, w100, w50, w30,w70 })}
                placeholder={placeholder}
                type={type}
            />
        </>
    );
}

export default Input;
