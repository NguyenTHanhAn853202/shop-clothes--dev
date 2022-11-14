import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({ children, classNames, ishover, to, href, type = 'button', w100 = false, ...props }) {
    let Button = 'button';
    const _props = {};
    if (to) {
        Button = Link;
        _props.to = to;
    } else if (href) {
        Button = 'a';
        _props.href = href;
    }
    return (
        <Button type={type} {...props} {..._props} className={cx('btn', { [classNames]: classNames, w100, ishover })}>
            {children}
        </Button>
    );
}

export default Button;
