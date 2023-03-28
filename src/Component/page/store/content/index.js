import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Card from '~/card';
import * as productServer from '~/api-server/productServer';
import { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const cx = classNames.bind(styles);
function Content() {
    const [data, setData] = useState([]);
    const location = useLocation();
    const params = useParams().slug;
    const [searchParams, setSearchParams] = useSearchParams();

    // sort
    const column = searchParams.get('column');
    const type = searchParams.get('type');
    const isSort = searchParams.get('_sort');

    useEffect(() => {
        (async function () {
            const data = params
                ? await productServer.getType(params, { column: column, type: type, _sort: isSort })
                : await productServer.product(location.state?.nameFind || '', {
                      column: column,
                      type: type,
                      _sort: isSort,
                  });
            if (data) setData(data);
        })();
    }, [location.state?.nameFind, params, column, type]);

    return (
        <div className={cx('wrapper')}>
            {data.map((item, index) => {
                const product = item.product[0]
                return (
                    <div key={index} className={cx('contain-card')}>
                        <Card
                            href={`/san-pham/${item.slug}`}
                            src={product.imagePath}
                            alt={item.name}
                            name={item.name}
                            cost={product.price}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Content;
