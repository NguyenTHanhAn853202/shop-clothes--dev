import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Card from '../../../../cardIntroduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCoins } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);

function Benefit() {
    return (
        <div className={cx('wrapper', { wrap: true })}>
            <div className={cx('contain', { grid: true })}>
                <div className={cx('card')}>
                    <Card
                        title={'Miễn phí giao hàng'}
                        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam helosdl"
                        icon={<FontAwesomeIcon icon={faCoins} />}
                        isIcon={true}
                    />
                </div>
                <div className={cx('card')}>
                    <Card
                        isIcon={true}
                        title={'Đổi trả trong 30 ngày'}
                        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam helosdl"
                        icon={<FontAwesomeIcon icon={faBagShopping} />}
                    />
                </div>
                <div className={cx('card')}>
                    <Card
                        title={'Thanh toán an toàn'}
                        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam helosdl"
                        icon={<FontAwesomeIcon icon={faPaypal} />}
                        isIcon={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default Benefit;
