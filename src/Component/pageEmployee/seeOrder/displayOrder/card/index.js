import classNames from 'classnames/bind';
import styles from './card.module.scss';

const cx = classNames.bind(styles);

function Card({ user, order }) {
    const { name, phoneNumber, address, email, avatar } = user;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('buyer')}>
                <img src={avatar} alt={name} />
                <div className={cx('info-buyer')}>
                    <h1>{`${name} - ${phoneNumber ? phoneNumber : 'chưa cập nhật'}`}</h1>
                    <h2>{`Địa chỉ: ${address}`}</h2>
                    <h2>{`Email: ${email}`}</h2>
                </div>
            </div>
            <h1>Sản phẩm</h1>
            {order.map((item, i) => (
                <div key={i} className={cx('product')}>
                    <img src={item.image} alt={'anh san pham'} />
                    <div className={cx('info-product')}>
                        <h1>{`${item?.idProduct?.name} - ${item?.color}`}</h1>
                        <h2>{`Size: ${item?.size} - Số lượng: ${item?.number} - Giá: ${item?.price}$`}</h2>
                    </div>
                </div>
            ))}
            <span></span>
        </div>
    );
}

export default Card;
