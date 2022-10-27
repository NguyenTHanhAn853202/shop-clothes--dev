import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Card from '~/card';

import productImg from '~/media/image/product/product-1.jpg';

const cx = classNames.bind(styles);

function Products() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contain')}>
                <Card src={productImg} alt={'product'} name={'Đầm suông cách điệu sang trọng'} cost={'$90 - $90'} />
            </div>
            <div className={cx('contain')}>
                <Card src={productImg} alt={'product'} name={'Đầm suông cách điệu sang trọng'} cost={'$90 - $90'} />
            </div>
            <div className={cx('contain')}>
                <Card src={productImg} alt={'product'} name={'Đầm suông cách điệu sang trọng'} cost={'$90 - $90'} />
            </div>
            <div className={cx('contain')}>
                <Card src={productImg} alt={'product'} name={'Đầm suông cách điệu sang trọng'} cost={'$90 - $90'} />
            </div>
            <div className={cx('contain')}>
                <Card src={productImg} alt={'product'} name={'Đầm suông cách điệu sang trọng'} cost={'$90 - $90'} />
            </div>
            <div className={cx('contain')}>
                <Card src={productImg} alt={'product'} name={'Đầm suông cách điệu sang trọng'} cost={'$90 - $90'} />
            </div>
            <div className={cx('contain')}>
                <Card src={productImg} alt={'product'} name={'Đầm suông cách điệu sang trọng'} cost={'$90 - $90'} />
            </div>
            <div className={cx('contain')}>
                <Card src={productImg} alt={'product'} name={'Đầm suông cách điệu sang trọng'} cost={'$90 - $90'} />
            </div>
        </div>
    );
}

export default Products;
