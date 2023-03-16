import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import InfoProduct from './infoProduct';
import Pay from './pay';

import { useMemo, useContext } from 'react';
import { Context } from '~/GlobalContext';

const cx = classNames.bind(styles);

function Cart() {
    const [states, dispatch] = useContext(Context);

    const totalCost = useMemo(() => {
        return states.cart.reduce((cost, item) => {
            const price = item.price ? item.price * item.number : 0;
            return cost + price;
        }, 0);
    }, [states.cart]);
    return (
        <div className={cx('wrapper', { wrap: true })}>
            <div className={cx('contain', { grid: true })}>
                <div className={cx('info-product')}>
                    <InfoProduct data={[states, dispatch]} />
                </div>
                <div className={cx('pay')}>
                    <Pay totalCost={totalCost} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
