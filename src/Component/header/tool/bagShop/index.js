import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Button from '~/button';
import { useMemo, memo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { handleSlug } from '~/handleSlug';

const cx = classNames.bind(styles);
const data = [
    {
        name: 'Bộ áo thun và áo khoát kết hợp váy điệu đà',
        img: 'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/3-2-600x750.jpg',
        money: 1000,
        amount: 2,
    },
    {
        name: 'Bộ áo thun và áo khoát kết hợp váy điệu đà',
        img: 'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/3-2-600x750.jpg',
        money: 1000,
        amount: 2,
    },
    {
        name: 'Bộ áo thun và áo khoát kết hợp váy điệu đà',
        img: 'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/3-2-600x750.jpg',
        money: 1000,
        amount: 2,
    },
    {
        name: 'Bộ áo thun và áo khoát kết hợp váy điệu đà',
        img: 'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/3-2-600x750.jpg',
        money: 1000,
        amount: 2,
    },
];
function Bag() {
    const total = useMemo(() => {
        return data.reduce((money, item) => {
            return money + item.amount * item.money;
        }, 0);
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list-product')}>
                {data.map((item, index) => {
                    const slug = handleSlug(item.name);
                    return (
                        <li key={index} className={cx('product')}>
                            <div className={cx('contain-product')}>
                                <Link to={`/san-pham/${slug}`} className={cx('link-contain-product')}>
                                    <img className={cx('img')} src={item.img} alt={item.name} />
                                    <h4 className={cx('name')}>{item.name}</h4>
                                </Link>
                                <button className={cx('btn-delete-product')}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </div>
                            <div className={cx('info-sell')}>
                                <span className={cx('amount')}>{`${item.amount} × `}</span>
                                <span className={cx('price')}>{`$${item.money}`}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className={cx('handle')}>
                <h2 className={cx('sum-money')}>
                    Tổng phụ: <span className={cx('money-paid')}>{`$${total}`}</span>
                </h2>
                <div className={cx('btn')}>
                    <Button ishover to={'/gio-hang'} classNames={cx('btn-goto-bag')}>
                        <span>XEM GIỎ HÀNG</span>
                    </Button>
                    <Button ishover to={'/thanh-toan'} classNames={cx('btn-paid')}>
                        <span>THANH TOÁN</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default memo(Bag);
