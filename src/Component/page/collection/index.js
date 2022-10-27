import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import HeaderEachPage from '~/headerEachPage';
import StoreImage from '~/Component/storeImage';

const cx = classNames.bind(styles);

function Collection() {
    return (
        <div className={cx('wrapper')}>
            <HeaderEachPage title="BỘ sưu tập" />
            <div className={cx('contain')}>
                <h1 className={cx('title')}>Bộ sưu tập thời trang</h1>
                <StoreImage />
            </div>
        </div>
    );
}

export default Collection;
