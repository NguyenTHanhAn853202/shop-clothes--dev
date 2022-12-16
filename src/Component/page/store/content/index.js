import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Card from '~/card';
import productImg from '~/media/image/product/product-1.jpg';
import * as productServer from '~/api-server/productServer';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Content() {
    const [path, setPath] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        (async function () {
            const data = await productServer.product();
            setData(data);
            // console.log(data);
        })();
    }, [path]);
    return (
        <div className={cx('wrapper')}>
            {data.map((item, index) => {
                return (
                    <div key={index} className={cx('contain-card')}>
                        <Card
                            href={`/san-pham/${item.slug}`}
                            src={item.imageDefualt}
                            alt={item.name}
                            name={item.name}
                            cost={item.costDefualt}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Content;
