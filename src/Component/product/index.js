import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Product({ data, props }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title-product')}>SẢN PHẨM</h2>
            {data.map((item, index) => (
                <div key={index} {...props} className={cx('product', { [classNames]: classNames })}>
                    <img className={cx('product-img')} src={item.src} alt={item.nameProduct} />
                    <div className={cx('title-price')}>
                        <h4 className={cx('name-product')}>{item.nameProduct}</h4>
                        <h4 className={cx('price')}>{`$${item.price}`}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;
