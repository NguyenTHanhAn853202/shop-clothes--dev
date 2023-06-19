import styles from './infoOfProduct.module.scss';
import classNames from 'classnames/bind';
import { Context } from '~/GlobalContext';
import { useContext, useState, forwardRef, useEffect } from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const codeDiscount = 'thanhandeptrai';

function InfoOfProduct({ typePayment, chooseProduct, type }, ref) {
    const [{ cart }, dispatch] = useContext(Context);
    const [choosedProducts, setChoosedProducts] = chooseProduct;
    const [discount, setDiscount] = useState(0);
    // event functions
    const handleChangeChoose = (e) => {
        const element = e.target;
        const dataProduct = JSON.parse(element.getAttribute('item'));

        setChoosedProducts((props) => {
            const newData = [...props];
            let same = false;
            props.forEach((item, i) => {
                const itemJSON = JSON.stringify(item);
                if (itemJSON === element.getAttribute('item')) {
                    newData.splice(i, 1);
                    same = true;
                    return;
                }
            });
            if (!same) {
                newData.push(dataProduct);
            }
            return newData;
        });
    };
    const handleDiscount = (e) => {
        const value = e.target.value;
        if (value === codeDiscount) {
            setDiscount(300);
        }
    };
    //
    const cost = useMemo(() => {
        return choosedProducts.reduce((price, item) => price + item?.price * item.number, 0);
    }, [JSON.stringify(choosedProducts)]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contain-products')}>
                {cart.length > 0 ? (
                    cart.map((item, index) => {
                        const chooseJson = JSON.stringify(choosedProducts);
                        const itemJson = JSON.stringify(item);
                        const product = item?.idProduct || {};
                        return (
                            <div key={index} className={cx('products')}>
                                <input
                                    item={itemJson}
                                    onChange={handleChangeChoose}
                                    type="checkbox"
                                    checked={chooseJson.includes(itemJson)}
                                />
                                <Link to={`/san-pham/${product?.slug}`} className={cx('product')}>
                                    <img src={item?.image} />
                                    <div className={cx('info-of-product')}>
                                        <h4>{product?.name}</h4>
                                        <h5>{`Size: ${item.size} - $${item?.price} × ${item.number} `}</h5>
                                        <h5>{``}</h5>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <span>
                        Không có sản phẩm nào trong giỏ hàng, bạn có thể đến <Link to="/cua-hang">Cửa hàng</Link> để
                        thêm một vài sản phẩm trước khi thanh toán
                    </span>
                )}
            </div>
            <span className={cx('line-border')}></span>
            <input
                onBlur={handleDiscount}
                ref={ref.refcodeDiscount}
                className={cx('discount')}
                placeholder="Mã giảm giá"
            />
            <table className={cx('cost-table')}>
                <tbody>
                    <tr>
                        <td colSpan={3}>Tổng chi phí: </td>
                        <td className={cx('t-r')}>${cost}</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Giảm: </td>
                        <td className={cx('t-r')}>${discount}</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Tiền phải trả: </td>
                        <td className={cx('t-r')}>${cost - discount}</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>phương thức thanh toán: </td>
                        <td className={cx('t-r')}>
                            <select
                                onChange={(e) => {
                                    typePayment(e.target.value);
                                }}
                                // defaultValue={type}
                                value={type}
                            >
                                <option value="after">Khi nhận hàng</option>
                                <option value="banking">Ngân hàng</option>
                                <option value="anpay" disabled>
                                    ANPAY
                                </option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default forwardRef(InfoOfProduct);
