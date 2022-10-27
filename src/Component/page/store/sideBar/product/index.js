import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Product({ src, nameProduct, price, classNames, ...props }) {
    return (
        <div {...props} className={cx('wrapper', { [classNames]: classNames })}>
            <img className={cx('product-img')} src={src} alt={nameProduct} />
            <div className={cx('title-price')}>
                <h4 className={cx('name-product')}>{nameProduct}</h4>
                <h4 className={cx('price')}>{`$${price}`}</h4>
            </div>
        </div>
    );
}

export default Product;
