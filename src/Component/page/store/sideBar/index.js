import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import { handleSlug } from '~/handleSlug';
import { useEffect } from 'react';
import productImg from '~/media/image/product/product-1.jpg';
import Product from '~/Component/product';
const cx = classNames.bind(styles);

const typeofProduct = ['Quần áo', 'Túi xách & Balo', 'Giày dép', 'Phụ kiện & Trang sức'];
const product = [
    {
        src: productImg,
        nameProduct: 'Bộ áo thun và áo khoát kết hợp váy điệu đà',
        price: 20,
    },
    {
        src: productImg,
        nameProduct: 'Bộ áo thun và áo khoát kết hợp váy điệu đà',
        price: 20,
    },
    {
        src: productImg,
        nameProduct: 'Bộ áo thun và áo khoát kết hợp váy điệu đà',
        price: 20,
    },
    {
        src: productImg,
        nameProduct: 'Bộ áo thun và áo khoát kết hợp váy điệu đà',
        price: 20,
    },
    {
        src: productImg,
        nameProduct: 'Bộ áo thun và áo khoát kết hợp váy điệu đà',
        price: 20,
    },
];

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
                <Product
                    // classNames={cx('item-product')}
                    data={product}
                />
            </div>
        </div>
    );
}

export default SideBar;
