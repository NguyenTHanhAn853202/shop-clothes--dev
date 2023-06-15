import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Card from '~/card';


const cx = classNames.bind(styles);

function Products({ data }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((item, index) => (
                <div key={index} className={cx('contain')}>
                    <Card src={item?.image} alt={item?.name} name={item?.name} cost={item?.price} />
                </div>
            ))}
        </div>
    );
}

export default Products;
