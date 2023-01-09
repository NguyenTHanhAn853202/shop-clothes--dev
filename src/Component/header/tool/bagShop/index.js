import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Button from '~/button';
import { useMemo, memo, useContext, useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faFrownOpen } from '@fortawesome/free-regular-svg-icons';
import { Context } from '~/GlobalContext';
import { remove } from '~/api-server/cartService';
import { REMOVE_CART } from '~/GlobalContext/key';

const cx = classNames.bind(styles);
function Bag({ setAgree, setIsShow, agree }, ref) {
    const [states, dispatch] = useContext(Context);
    const { cart } = states;
    const [idProduct, setIdProduct] = useState('');
    const wrapperRef = useRef();

    const handleRemoveCart = (e) => {
        setIsShow(true);
        setIdProduct(e.currentTarget.id);
    };

    useImperativeHandle(ref, () => ({
        block() {
            wrapperRef.current.style.display = 'block';
        },
    }));

    useEffect(() => {
        if (agree) {
            (async function () {
                // đưa hàm async vào reducer của globalContext
                await remove(idProduct);
                dispatch({ key: REMOVE_CART, value: { idProduct } });
            })();
        }
        setAgree(false);
    }, [agree]);

    const total = useMemo(() => {
        return cart.reduce((money, item) => {
            return money + item.number * 1 * item.cost;
        }, 0);
    }, [JSON.stringify(cart)]);

    return (
        <div ref={wrapperRef} className={cx('wrapper')}>
            {cart.length > 0 ? (
                <>
                    <ul className={cx('list-product')}>
                        {cart.map((item, index) => {
                            const slug = item.slugProduct;
                            return (
                                <li key={index} className={cx('product')}>
                                    <div className={cx('contain-product')}>
                                        <Link to={`san-pham/${slug}`} className={cx('link-contain-product')}>
                                            <img className={cx('img')} src={item.image} alt={item.name} />
                                            <h4 className={cx('name')}>{item.name}</h4>
                                        </Link>
                                        <button
                                            id={item.idProduct}
                                            onClick={handleRemoveCart}
                                            className={cx('btn-delete-product')}
                                        >
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </button>
                                    </div>
                                    <div className={cx('info-sell')}>
                                        <span className={cx('amount')}>{`${item.number} × `}</span>
                                        <span className={cx('price')}>{`$${item.cost}`}</span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div className={cx('handle')}>
                        <h2 className={cx('sum-money')}>
                            Tổng phụ: <span className={cx('money-paid')}>{`$${total}`}</span>
                        </h2>
                        <div className={cx('btn')}>
                            <Button ishover to={'/gio-hang'} classNames={cx('btn-goto-bag')}>
                                <span>XEM GIỎ HÀNG</span>
                            </Button>
                            <Button ishover to={'/thanh-toan'} classNames={cx('btn-paid')}>
                                <span>THANH TOÁN</span>
                            </Button>
                        </div>
                    </div>
                </>
            ) : (
                <div className={cx('no-product')}>
                    <h2 className={cx('no-product__title')}>Không có sản phẩm nào trong giỏ hàng </h2>
                    <FontAwesomeIcon className={cx('no-product__icon-bag')} icon={faFrownOpen} />
                    <h4 className={cx('no-product__navigate-store')}>
                        Đi đến:{' '}
                        <Link
                            onClick={() => {
                                wrapperRef.current.style.display = 'none';
                            }}
                            to={'/cua-hang'}
                        >
                            Cửa hàng
                        </Link>
                    </h4>
                </div>
            )}
        </div>
    );
}

export default forwardRef(Bag);
