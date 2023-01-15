import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import { memo, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import useDebounce from '~/utils/useDebounce';
import { search } from '~/api-server/search';
import { Link } from 'react-router-dom';
import Loading from '~/utils/loading';

const cx = classNames.bind(styles);

function Search() {
    const [value, setValue] = useState('');
    const debounce = useDebounce(value, 1000);
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const datas = await search(value);
            // setLoading(true);
            setProduct(datas.data);
            setLoading(false);
        })();
    }, [debounce]);

    const handleChangeInput = (e) => {
        setLoading(true);
        setValue(e.target.value);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input className={cx('search-ip')} onChange={handleChangeInput} type="text" placeholder="Tìm kiếm..." />
                <button className={cx('search-btn')}>
                    {loading ? (
                        <Loading className={cx('search-loading')} />
                    ) : (
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    )}
                </button>
            </div>
            <ul className={cx('list-product')}>
                {products.length > 0 ? (
                    products.map((product) => {
                        return (
                            <li key={product._id}>
                                <Link className={cx('item-product-link')}>
                                    <img src={product.image[0].imageOfColor} alt={product.name} />
                                    <div>
                                        <h4>{product.name}</h4>
                                        <span>{`$${product.costDefualt}`}</span>
                                    </div>
                                </Link>
                            </li>
                        );
                    })
                ) : value.trim() === '' ? (
                    <h1 className={cx('announcement-search')}>Mời tìm kiếm</h1>
                ) : (
                    <h1 className={cx('announcement-search')}>Không có sản phẩm nào</h1>
                )} 
            </ul>
        </div>
    );
}

export default memo(Search);
