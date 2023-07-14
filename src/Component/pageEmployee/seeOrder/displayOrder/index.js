import classNames from 'classnames/bind';
import styles from './displayOrder.module.scss';
import Card from './card';

const cx = classNames.bind(styles);

function DisplayOrder({ data }) {
    return (
        <div className={cx('wrapper')}>
            <ul>
                <li className={cx('title')}>Thông tin đơn hàng</li>
                {data.map((item, index) => {
                    return (
                        <li key={item._id}>
                            <Card
                                key={item?._id}
                                idOrder={item?._id}
                                user={item?.infoOfUser}
                                order={item?.infoOfOder}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default DisplayOrder;
