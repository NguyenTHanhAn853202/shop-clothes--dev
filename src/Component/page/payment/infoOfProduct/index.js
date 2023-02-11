import styles from './infoOfProduct.module.scss';
import classNames from 'classnames/bind';
import { Context } from '~/GlobalContext';
import { useContext } from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function InfoOfProduct() {
    const [{ cart }, dispatch] = useContext(Context);
    const cost = useMemo(() => {
        return cart.reduce((price, item) => price + item.cost * item.number, 0);
    }, [JSON.stringify(cart)]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contain-products')}>
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index} className={cx('products')}>
                            <input type="checkbox" />
                            <Link to={`/san-pham/${item.slugProduct}`} className={cx('product')}>
                                <img src={item.image} />
                                <div className={cx('info-of-product')}>
                                    <h4>{item.name}</h4>
                                    <h5>{`$${item.cost} × ${item.number} `}</h5>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <span>
                        Không có sản phẩm nào trong giỏ hàng, bạn có thể đến <Link to="/cua-hang">Cửa hàng</Link> để
                        thêm một vài sản phẩm trước khi thanh toán
                    </span>
                )}
            </div>
            <span className={cx('line-border')}></span>
            <input className={cx('discount')} placeholder="Mã giảm giá" />
            <table className={cx('cost-table')}>
                <tbody>
                    <tr>
                        <td colSpan={3}>Tổng chi phí: </td>
                        <td className={cx('t-r')}>${cost}</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Giảm: </td>
                        <td className={cx('t-r')}>${0}</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Tiền phải trả: </td>
                        <td className={cx('t-r')}>${cost}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default InfoOfProduct;
