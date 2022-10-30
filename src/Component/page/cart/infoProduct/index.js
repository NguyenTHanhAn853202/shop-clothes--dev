import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import productImg from '~/media/image/product/product-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Button from '~/button';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(styles);

function InfoProduct() {
    const [amount, setAmount] = useState(0);
    const handleChangeAmount = (e) => {
        const value = e.target.value;
        let newValue = value;
        for (let index = 0; index < newValue.length; index++) {
            if (newValue[index] < '0' || newValue[index] > '9') {
                newValue = newValue.replace(newValue[index], '');
                index--;
                console.log(newValue);
            }
        }
        setAmount(newValue);
    };
    const handleBlurAmount = (e)=>{
        const value = e.target.value || '0';
        setAmount(value)
    }
    const handleClickIncrease = (e) => {
        const value = amount * 1 + 1;
        setAmount(value);
    };
    const handleClickDecrease = (e) => {
        const value = amount * 1 === 0 ? amount : amount * 1 - 1;

        setAmount(value);
    };
    return (
        <div className={cx('wrapper')}>
            <table className={cx('table-info-product')}>
                <thead>
                    <tr>
                        <th colSpan={3}>SẢN PHẨM</th>
                        <th className={cx('tac')}>GIÁ</th>
                        <th className={cx('tac')}>SỐ LƯỢNG</th>
                        <th className={cx('tar')}>TỔNG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <button className={cx('btn-remove')}>
                                <FontAwesomeIcon icon={faTimesCircle} />
                            </button>
                        </td>
                        <td className={cx('product-img')}>
                            <Link className={cx('link-product-img')}>
                                <img src={productImg} />
                            </Link>
                        </td>
                        <td>
                            <Link style={{ color: 'var(--primary)' }}> Đầm suông cách điệu sang trọng</Link>
                        </td>
                        <td className={cx('tac', 'fw6')}>$21</td>
                        <td className={cx('tac')}>
                            <div className={cx('amount')}>
                                <button onClick={handleClickDecrease} className={cx('btn-amount')}>
                                    -
                                </button>
                                <input onBlur={handleBlurAmount} onChange={handleChangeAmount} className={cx('ip-amount')} value={amount} />
                                <button onClick={handleClickIncrease} className={cx('btn-amount')}>
                                    +
                                </button>
                            </div>
                        </td>
                        <td className={cx('tar', 'fw6')}>10</td>
                    </tr>
                    <tr>
                        <td colSpan={6} className={cx('td-btn')}>
                            <div className={cx('contian-btn')}>
                                <Button to="/cua-hang" classNames={cx('go-to-store')}>
                                    <span>
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                    </span>
                                    <p>Tiếp tục xem sản phẩm</p>
                                </Button>
                                <Button classNames={cx('update-cart')}>Cập nhật giỏ hàng</Button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default InfoProduct;
