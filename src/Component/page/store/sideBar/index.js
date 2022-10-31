import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import { handleSlug } from '~/handleSlug';
import { useEffect } from 'react';
import productImg from '~/media/image/product/product-1.jpg';
import Product from './product';
const cx = classNames.bind(styles);

const typeofProduct = ['Quần áo', 'Túi xách & Balo', 'Giày dép', 'Phụ kiện & Trang sức'];
const product = [1, 2, 3, 4, 5];
function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('typeof')}>
                <Link to="" className={cx('title-typeof')}>
                    DANH MỤC SẢN PHẨM
                </Link>
                {typeofProduct.map((item, index) => {
                    return (
                        <NavLink
                            to={handleSlug(item)}
                            key={index}
                            className={(nav) => cx('item-typeof', { active: nav.isActive })}
                        >
                            {item}
                        </NavLink>
                    );
                })}
            </div>
            <div className={cx('product')}>
                <h2 className={cx('title-product')}>SẢN PHẨM</h2>
                {product.map((item, index) => (
                    <Product
                        key={index}
                        // classNames={cx('item-product')}
                        src={productImg}
                        nameProduct="Bộ áo thun và áo khoát kết hợp váy điệu đà"
                        price={32}
                    />
                ))}
            </div>
        </div>
    );
}

export default SideBar;
