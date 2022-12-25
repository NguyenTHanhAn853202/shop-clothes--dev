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
import { remove } from '~/api-server/cartService';
import { REMOVE_CART } from '~/GlobalContext/key';
import Default from '~/announcement/default';

const cx = classNames.bind(styles);

function InfoProduct({ data }) {
    const [states, dispatch] = data;
    const cart = states.cart;
    const [isShow, setIsShow] = useState(false);
    const [agree, setAgree] = useState(false);
    const [idProduct, setIdProduct] = useState('');

    // Handle Events
    // 1. Handle remove Product in Cart
    const handleRemoveItem = (e) => {
        setIsShow(true);
        setIdProduct(e.currentTarget.id);
    };

    useEffect(() => {
        if (agree) {
            (async function () {
                await remove(idProduct);
                dispatch({ key: REMOVE_CART, value: { idProduct } });
            })();
        }
        return setAgree(false);
    }, [agree]);

    return (
        <div className={cx('wrapper')}>
            {isShow && (
                <Default
                    setAgree={setAgree}
                    setIsShow={setIsShow}
                    title={'thong bao '}
                    message="ban co chac chan muon xoa no khoi cua hang cua ban khong"
                />
            )}
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
                    {cart.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <button id={item.idProduct} onClick={handleRemoveItem} className={cx('btn-remove')}>
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
