import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import CountNumber from '~/Component/countNumber';
import Button from '~/button';
import { allLogo as logoShip } from '~/media/image/logoShip';
import { allLogo as logoBank } from '~/media/image/logoBank';
import { useState, useContext, useEffect } from 'react';
import { Context as ContextProduct } from '../../ConetextProduct';

import { Context } from '~/GlobalContext';
// import api
import { add } from '~/api-server/cartService';
import { ADD_CART, CART } from '~/GlobalContext/key';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Announcement from '~/announcement/announcement';

const cx = classNames.bind(styles);

function Introduct() {
    const [infoProduct, setInfoProduct] = useState({});
    const [iColor, setIColor] = useState();
    const [iSize, setISize] = useState();
    const [size, setSize] = useState([]);
    const [color, setColor] = useState([]);
    const [datas, setData] = useContext(ContextProduct);
    const [number, setNumber] = useState(1);
    const [states, dispatch] = useContext(Context);
    const [isLoading, setIsLoading] = useState(false);
    const [addSuccess, setAddSuccess] = useState(false);
    // handle event
    const { product } = datas;
    const { cart } = states;
    const defaultProduct = product.product ? product.product[iColor || 0] : {};

    const addIntoCart = (e) => {
        (async function () {
            try {
                setIsLoading(true);
                const { success, data } = await add(
                    product._id,
                    size,
                    number,
                    infoProduct.color,
                    defaultProduct.price,
                    defaultProduct.imagePath,
                );
                if (success) {
                    dispatch({ key: CART, value: data });
                    setAddSuccess(true);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    };
    useEffect(() => {
        const id = setTimeout(() => {
            setAddSuccess(false);
        }, 1000);
        return () => {
            clearTimeout(id);
        };
    }, [JSON.stringify(cart)]);
    //
    return (
        <div className={cx('wrapper')}>
            {addSuccess && <Announcement />}
            <div className={cx('img-product')}>
                <img src={defaultProduct?.imagePath} />
            </div>
            <div className={cx('main-info')}>
                <span className={cx('goto')}>
                    <Link className={cx('link')} to="/">
                        TRANG CHỦ
                    </Link>
                    <span>/</span>
                    <Link className={cx('link')} to="/cua-hang/quan-ao">
                        QUẦN ÁO
                    </Link>
                </span>
                <h1 className={cx('name-product')}>{product.name}</h1>
                <h1 className={cx('price-product')}>{`$${defaultProduct?.price}`}</h1>
                <div className={cx('product-type')}>
                    <span>Kích thước:</span>
                    <div className={cx('product-size')}>
                        {(defaultProduct.size || []).map((item, index) => (
                            <button
                                value={item}
                                onClick={(e) => {
                                    setInfoProduct((props) => ({ ...props, size: item }));
                                    setISize(index);

                                    setSize(e.target.value);
                                }}
                                className={cx({ active: index === iSize })}
                                key={index}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <span>Màu sắc:</span>
                    <div className={cx('product-color')}>
                        {(product.color || []).map((item, index) => {
                            return (
                                <button
                                    onClick={(e) => {
                                        setInfoProduct((props) => ({ ...props, color: item }));
                                        setIColor(index);
                                        setISize(null);
                                    }}
                                    className={cx({
                                        active: index === iColor,
                                        choose: product.product[index].number === 0,
                                    })}
                                    key={index}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('count-and-add')}>
                    <CountNumber setNumber={setNumber} number={number} />
                    <Button onClick={addIntoCart} ishover classNames={cx('add-cart')}>
                        {!isLoading ? (
                            'THÊM VÀO GIỎ'
                        ) : (
                            <FontAwesomeIcon className={cx('add-cart__icon-spinner')} icon={faSpinner} />
                        )}
                    </Button>
                </div>
                <div className={cx('ship-paid')}>
                    <div className={cx('ship')}>
                        <h3 className={cx('title-logo')}>Tính phí ship tự động</h3>
                        <div className={cx('list-logo')}>
                            {logoShip.map((item, index) => (
                                <img key={index} className={cx('img-ship')} src={item} />
                            ))}
                        </div>
                    </div>
                    <div className={cx('add')}>
                        <h3 className={cx('title-logo')}>Thanh toán</h3>
                        <div className={cx('list-logo')}>
                            {logoBank.map((item, index) => (
                                <img key={index} className={cx('img-ship')} src={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('category')}>
                    <span>Danh mục:</span>
                    <Link to={'/cua-hang/quan-ao'}>Quần áo,</Link>
                    <Link to={'/cua-hang/giay-dep'}>Giày dép,</Link>
                    <Link to={'/cua-hang/phu-kien-trang-suc'}>Phụ kiện & Trang sức,</Link>
                    <Link to={'/cua-hang/tui-xach-ba-lo'}>Túi xách và Balo</Link>
                </div>
            </div>
        </div>
    );
}

export default Introduct;
