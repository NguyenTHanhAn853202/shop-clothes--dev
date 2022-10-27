import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Card from '~/card';
import productImg from '~/media/image/product/product-1.jpg';

const cx = classNames.bind(styles);
const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function Content() {
    return (
        <div className={cx('wrapper')}>
            {products.map((item, index) => {
                return (
                    <div key={index} className={cx('contain-card')}>
                        <Card src={productImg} alt={''} name="Áo quần bộ cao cấp năng động" cost={39} />
                    </div>
                );
            })}
        </div>
    );
}

export default Content;
