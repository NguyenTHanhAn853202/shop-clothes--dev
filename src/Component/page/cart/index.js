import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import InfoProduct from './infoProduct';
import Pay from './pay';

const cx = classNames.bind(styles);

function Cart() {
    
    return (
        <div className={cx('wrapper', { wrap: true })}>
            <div className={cx('contain', { grid: true })}>
                <div className={cx('info-product')}>
                    <InfoProduct />
                </div>
                <div className={cx('pay')}>
                    <Pay />
                </div>
            </div>
        </div>
    );
}

export default Cart;
