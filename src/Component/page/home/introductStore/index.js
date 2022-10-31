import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import logo from '~/media/image/logo/logo-02.png';
import listProductImg from '~/media/image/product/nguoi-mau-02.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function IntroductStore() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('new-inform')}>
                <div className={cx('content')}>
                    <h4 className={cx('title-inform')}>Mừng khai trương chi nhánh mới</h4>
                    <h1 className={cx('info-inform')}>Sale off up to 70%</h1>
                    <Link to={'cua-hang'} className={cx('see-product-inform')}>
                        Xem tất cả sản phẩm
                        <span>
                            <FontAwesomeIcon icon={faLongArrowAltRight} />
                        </span>
                    </Link>
                </div>
            </div>
            <div className={cx('list-product')}>
                <div className={cx('contain-img')}>
                    <img className={cx('img-contain-img')} src={listProductImg} alt={'anh-mau'} />
                </div>
                <div className={cx('content-contain-img')}>
                    <div className={cx('contain-logo')}>
                        <img className={cx('logo')} src={logo} alt="logo" />
                    </div>
                    <div className={cx('wrapper-title-content-img')}>
                        <h2 className={cx('title-content-img')}>Danh sách <span>sản phẩm</span></h2>
                        <Link to={'cua-hang'} className={cx('see-list-product')}>
                            <FontAwesomeIcon icon={faLongArrowAltRight} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroductStore;
