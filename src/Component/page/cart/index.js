import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import InfoProduct from './infoProduct';
import Pay from './pay';
import { get } from '~/api-server/cartService';
import { getProduct } from '~/api-server/productServer';

import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Cart() {
    const [datas, setDatas] = useState([]);
    const [dataOverall, setDataOverall] = useState([]);
    useEffect(() => {
        (async function () {
            try {
                const data = await get();
                setDatas(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [datas.join()]);


    useEffect(() => {
        (function () {
            setDataOverall([]);
            const productOfCart = [];
            if (datas.length > 0) {
                datas.forEach(async (item, index) => {
                    const [product] = await getProduct(item.idProduct);
                    const newProps = {
                        number: item.number,
                        name: product.name,
                        cost: product.costDefualt,
                        image: product.imageDefualt,
                    };
                    productOfCart.push(newProps);
                    if (index === datas.length - 1) setDataOverall(productOfCart);
                });
            }
        })();
    }, [datas]);

    return (
        <div className={cx('wrapper', { wrap: true })}>
            <div className={cx('contain', { grid: true })}>
                <div className={cx('info-product')}>
                    <InfoProduct data={dataOverall} />
                </div>
                <div className={cx('pay')}>
                    <Pay />
                </div>
            </div>
        </div>
    );
}

export default Cart;
