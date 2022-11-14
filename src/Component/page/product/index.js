import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Products from '~/Component/product';
import productImg from '~/media/image/product/product-1.jpg';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Content from './content';

const cx = classNames.bind(styles);
const product = [
    {
        src: productImg,
        nameProduct: 'Bộ áo thun và áo khoát kết hợp váy điệu đà 1',
        price: 20,
    },
    {
        src: productImg,
        nameProduct: 'Bộ áo thun và áo khoát kết hợp váy điệu đà 2',
        price: 20,
    },
    {
        src: productImg,
        nameProduct: 'Bộ áo thun và áo khoát kết hợp váy điệu đà 3',
        price: 20,
    },
    {
        src: productImg,
        nameProduct: 'Bộ áo thun và áo khoát kết hợp váy điệu đà 4',
        price: 20,
    },
    {
        src: productImg,
        nameProduct: 'Bộ áo thun và áo khoát kết hợp váy điệu đà 5',
        price: 20,
    },
];
function Product() {
    // const params = useParams();
    // useEffect(() => {
    //     console.log(params);
    // }, [params]);
    
    return (
        <div className={cx('wrapper', { wrap: true })}>
            <div className={cx('contain', { grid: true })}>
                <div className={cx('sidebar')}>
                    <Products data={product} />
                </div>
                <div className={cx('content')}>
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default Product;
