import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import productImg from '~/media/image/product/product-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Button from '~/button';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CountNumber from '~/Component/countNumber';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function InfoProduct({ data }) {
    const [newData, setNewData] = useState([data]);
    useEffect(() => {
        setNewData(data);
    }, [data.join()]);
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
                    {newData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <button className={cx('btn-remove')}>
                                        <FontAwesomeIcon icon={faTimesCircle} />
                                    </button>
                                </td>
                                <td className={cx('product-img')}>
                                    <Link className={cx('link-product-img')}>
                                        <img src={item.image} />
                                    </Link>
                                </td>
                                <td>
                                    <Link style={{ color: 'var(--primary)' }}>{item.name}</Link>
                                </td>
                                <td className={cx('tac', 'fw6')}>{`$${item.cost}`}</td>
                                <td className={cx('tac')}>
                                    <CountNumber number={item.number} />
                                </td>
                                <td className={cx('tar', 'fw6')}>{`$${item.number * item.cost}`}</td>
                            </tr>
                        );
                    })}
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
