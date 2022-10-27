import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HeaderStore() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title-header')}>
                TRANG CHỦ <span className={cx('title--')}>/</span>
                <span className={cx('title-header-store')}> CỬA HÀNG</span>
            </h2>
            <div className={cx('options-header')}>
                <span className={cx('title-options-header')}>Hiển thị một kết quả duy nhất</span>
                <select className={cx('select')}>
                    <option className={cx('option-select')}>Thứ tự mặc định</option>
                    <option className={cx('option-select')}>Thứ tự theo mức độ phổ biến</option>
                    <option className={cx('option-select')}>Thứ tự theo điểm đánh giá</option>
                    <option className={cx('option-select')}>Mới nhất</option>
                    <option className={cx('option-select')}>Thứ tự theo giá: thấp đến cao</option>
                    <option className={cx('option-select')}>Thứ tự theo giá: cao xuống thấp</option>
                </select>
            </div>
        </div>
    );
}

export default HeaderStore;
