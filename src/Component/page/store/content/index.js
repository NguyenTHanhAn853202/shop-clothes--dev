import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Card from '~/card';
import * as productServer from '~/api-server/productServer';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);
function Content() {
    const [data, setData] = useState([]);
    const location = useLocation();
    const params = useParams().slug;

    useEffect(() => {
        (async function () {
            const data = params
                ? await productServer.getType(params)
                : await productServer.product(location.state?.nameFind || '');
            if (data) setData(data);
        })();
    }, [ location.state?.nameFind, params]);
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
