import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import ShowStar from '~/Component/showStar';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Button from '~/button';

const cx = classNames.bind(styles);

function AccountFeedback() {
    const [isheart, SetIsHeart] = useState(false);

    const handleClickActive = (e) => {
        SetIsHeart(!isheart);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img
                    className={cx('avatar-img')}
                    src={
                        'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/a/v/avatar-1615695904-2089-1615696022.jpg'
                    }
                    alt="avatar"
                />
            </div>
            <div className={cx('feedback')}>
                <h4 className={cx('name-account')}>Thanh an</h4>
                <ShowStar starCurrent={3} classNames={cx('star')} />
                <h4 className={cx('date-type')}>22-12-15 | Phan loai: Mau trang, 42</h4>
                <p className={cx('content-feedback')}>
                    Sản phẩm tốt giao hàng nhanh Chưa đá chưa biết về chất lượngggg
                </p>
                <div className={cx('media')}></div>
                <div className={cx('others-feature')}>
                    <Button onClick={handleClickActive} classNames={cx('btn-heart',{loved:isheart})}>
                        <FontAwesomeIcon icon={faHeart} />
                    </Button>
                    <Button classNames={cx('btn-report')}>Báo cáo</Button>
                </div>
            </div>
        </div>
    );
}

export default AccountFeedback;
