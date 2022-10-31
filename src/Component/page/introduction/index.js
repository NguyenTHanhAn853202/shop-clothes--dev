import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import HeaderEachPage from '~/headerEachPage';
import logo from '~/media/image/logo/logo-black-03.png';
import Card from '~/cardIntroduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCoins } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import model from '~/media/image/product/nguoi-mau-03.png';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Introduct() {
    return (
        <div className={cx('wrapper')}>
            <HeaderEachPage title={'giới thiệu'} />
            <div className={cx('contain', { wrap: true })}>
                <div className={cx('contain-grid', { grid: true })}>
                    <div className={cx('contain-logo')}>
                        <div className={cx('logo')}>
                            <img className={cx('logo-img')} src={logo} alt={'logo'} />
                        </div>
                        <p className={cx('title')}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
                        </p>
                    </div>
                    <div className={cx('introduct-product')}>
                        <div className={cx('first-column')}>
                            <div className={cx('card')}>
                                <Card
                                    title={'Miễn phí giao hàng'}
                                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam helosdl"
                                    icon={<FontAwesomeIcon icon={faCoins} />}
                                />
                            </div>
                            <div className={cx('card')}>
                                <Card
                                    title={'Đổi trả trong 30 ngày'}
                                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam helosdl"
                                    icon={<FontAwesomeIcon icon={faBagShopping} />}
                                />
                            </div>
                        </div>
                        <div className={cx('middle-column')}>
                            <img className={cx('model')} src={model} alt="model" />
                        </div>
                        <div className={cx('end-column')}>
                            <div className={cx('card')}>
                                <Card
                                    title={'Thanh toán an toàn'}
                                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam helosdl"
                                    icon={<FontAwesomeIcon icon={faPaypal} />}
                                />
                            </div>
                            <div className={cx('card')}>
                                <Card
                                    title={'Danh sách sản phẩm'}
                                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam helosdl"
                                    icon={<FontAwesomeIcon icon={faClipboard} />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduct;
