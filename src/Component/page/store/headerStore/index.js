import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useSearchParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function HeaderStore() {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleSortType = (e) => {
        const [column, type] = e.target.value.split(' ');
        setSearchParams({
            _sort: column || type ? false : true,
            column: column,
            type: type,
        });
    };

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title-header')}>
                TRANG CHỦ <span className={cx('title--')}>/</span>
                <span className={cx('title-header-store')}> CỬA HÀNG</span>
            </h2>
            <div className={cx('options-header')}>
                <span className={cx('title-options-header')}>Hiển thị một kết quả duy nhất</span>
                <select onChange={handleSortType} className={cx('select')}>
                    <option value="'' ''" className={cx('option-select')}>
                        Thứ tự mặc định{' '}
                    </option>
                    <option value="createdAt desc" className={cx('option-select')}>
                        Mới nhất
                    </option>
                    <option value="price asc" className={cx('option-select')}>
                        Thứ tự theo giá: thấp đến cao
                    </option>
                    <option value="price desc" className={cx('option-select')}>
                        Thứ tự theo giá: cao xuống thấp
                    </option>
                </select>
            </div>
        </div>
    );
}

export default HeaderStore;
