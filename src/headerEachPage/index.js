import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function HeaderEachPage({ title }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contain')}>
                <h1 className={cx('title')}>{title[0].toUpperCase() + title.slice(1)}</h1>
                <div className={cx('name-page')}>
                    <Link className={cx('link-home')} to={'/'}>
                        TRANG CHỦ
                    </Link>
                    <span> / </span>
                    <h2> {title.toUpperCase()}</h2>
                </div>
            </div>
        </div>
    );
}

export default HeaderEachPage;
