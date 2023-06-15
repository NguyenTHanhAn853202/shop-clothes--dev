import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { newProduct } from '~/api-server/suggestProduct';

const cx = classNames.bind(styles);

function Product({ ...props }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const type = ''; //all
            const limit = 5;
            const data = await newProduct(type, limit);
            setData(data);
        })();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title-product')}>SẢN PHẨM</h2>
            {data.map((item, index) => (
                <div key={index} {...props} className={cx('product', { [classNames]: classNames })}>
                    <img className={cx('product-img')} src={item.image} alt={item.name} />
                    <div className={cx('title-price')}>
                        <h4 className={cx('name-product')}>{item.name}</h4>
                        <h4 className={cx('price')}>{`$${item.price}`}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;
