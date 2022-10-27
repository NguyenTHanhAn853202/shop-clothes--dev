import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Contain from '~/contain';
const cx = classNames.bind(styles);

function Render({ children, classNames, attrs }) {
    return (
        <div className={cx('box-search')} tabIndex="-1" {...attrs}>
            <div className={cx('contain-bag', { [classNames]: classNames })}>
                <Contain>{children}</Contain>
            </div>
        </div>
    );
}

export default Render;
