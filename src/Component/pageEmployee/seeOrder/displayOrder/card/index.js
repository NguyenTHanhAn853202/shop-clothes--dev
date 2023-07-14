import classNames from 'classnames/bind';
import styles from './card.module.scss';
import Button from '~/button';
import { useState } from 'react';
import { confirm } from '~/api-server/showOrder';

const cx = classNames.bind(styles);

function Card({ user, order, idOrder }) {
    const { name, phoneNumber, address, email, avatar } = user;
    const [products, setProducts] = useState(order);



    const handleClickConfirm = async (item, i) => {
        if (products.length > 0) {
            setProducts((props) => {
                console.log(props.splice(i, 1));
                return props.splice(i, 1);
            });
            const data = await confirm(idOrder, item._id);
        }
    };
    return (
        <div className={cx('wrapper')}>
            {products.length > 0 && (
                <>
                    <div className={cx('buyer')}>
                        <img src={avatar} alt={name} />
                        <div className={cx('info-buyer')}>
                            <h1>{`${name} - ${phoneNumber ? phoneNumber : 'chưa cập nhật'}`}</h1>
                            <h2>{`Địa chỉ: ${address}`}</h2>
                            <h2>{`Email: ${email}`}</h2>
                        </div>
                    </div>
                    <h1>Sản phẩm</h1>
                </>
            )}
            {products.map((item, i) => (
                <div key={item._id} className={cx('product')}>
                    <img src={item.image} alt={'anh san pham'} />
                    <div className={cx('info-product')}>
                        <h1>{`${item?.idProduct?.name} - ${item?.color}`}</h1>
                        <h2>{`Size: ${item?.size} - Số lượng: ${item?.number} - Giá: ${item?.price}$`}</h2>
                    </div>
                    <Button ishover onClick={() => handleClickConfirm(item, i)} classNames={cx('btn')}>
                        Xác nhận
                    </Button>
                </div>
            ))}
            {products.length > 0 && <span></span>}
        </div>
    );
}

export default Card;
