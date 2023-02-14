import styles from './infoOfProduct.module.scss';
import classNames from 'classnames/bind';
import { Context } from '~/GlobalContext';
import { useContext, useState } from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const codeDiscount = 'thanhandeptrai';

function InfoOfProduct({ chooseProduct }) {
    const [{ cart }, dispatch] = useContext(Context);
    const [choosedProducts, setChoosedProducts] = chooseProduct;
    const [discount, setDiscount] = useState(0);
    // event functions
    const handleChangeChoose = (e) => {
        const element = e.target;
        const checked = element.checked;
        const dataProduct = JSON.parse(element.getAttribute('item'));
        if (checked) {
            setChoosedProducts([...choosedProducts, dataProduct]);
        } else {
            setChoosedProducts((props) => {
                let index;
                props.forEach((item, i) => {
                    if (item.idProduct === dataProduct.idProduct) {
                        index = i;
                        return;
                    }
                });
                const newData = [...props];
                newData.splice(index, 1);
                return newData;
            });
        }
    };
    const handleDiscount = (e) => {
        const value = e.target.value;
        if (value === codeDiscount) {
            setDiscount(300);
        }
    };

    //
    const cost = useMemo(() => {
        return choosedProducts.reduce((price, item) => price + item.cost * item.number, 0);
    }, [JSON.stringify(choosedProducts)]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contain-products')}>
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index} className={cx('products')}>
                            <input item={JSON.stringify(item)} onChange={handleChangeChoose} type="checkbox" />
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
            <input onBlur={handleDiscount} className={cx('discount')} placeholder="Mã giảm giá" />
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
                            <select>
                                <option>Thanh toán sau khi nhận hàng</option>
                                <option>Thanh toán qua ngân hàng</option>
                                <option>Thanh toán qua </option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default InfoOfProduct;
