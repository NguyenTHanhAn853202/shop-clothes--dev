import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import { memo, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import useDebounce from '~/utils/useDebounce';
import { search } from '~/api-server/search';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '~/utils/loading';
import { faFaceSadTear } from '@fortawesome/free-regular-svg-icons';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Search() {
    const [value, setValue] = useState('');
    const debounce = useDebounce(value, 1000);
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const datas = await search(value);
            // setLoading(true);
            setProduct(datas.data);
            setLoading(false);
        })();
    }, [debounce]);

    useEffect(() => {
        setValue('');
    }, [pathname]);
    // handle Event
    const handleChangeInput = (e) => {
        setLoading(true);
        setValue(e.target.value);
    };
    const hanldeClickFind = (e) => {
        navigate('cua-hang', { state: { nameFind: value } });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input
                    className={cx('search-ip')}
                    value={value}
                    onChange={handleChangeInput}
                    type="text"
                    placeholder="Tìm kiếm..."
                />
                <div className={cx('contain-icon')}>
                    {loading ? (
                        <Loading className={cx('search-loading')} />
                    ) : (
                        <button onClick={hanldeClickFind} className={cx('search-btn')}>
                            <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                        </button>
                    )}
                </div>
            </div>
            <ul className={cx('list-product')}>
                {products.length > 0 ? (
                    products.map((product) => (
                        <li key={product._id}>
                            <Link to={`/san-pham/${product.slug}`} className={cx('item-product-link')}>
                                <img src={product.image} alt={product.name} />
                                <div>
                                    <h4>{product.name}</h4>
                                    <span>{`$${product.price}`}</span>
                                </div>
                            </Link>
                        </li>
                    ))
                ) : value.trim() === '' ? (
                    <h1 className={cx('announcement-search')}>Mời tìm kiếm</h1>
                ) : (
                    <h1 className={cx('announcement-search')}>
                        Không có sản phẩm nào
                        <span className={cx('announcement-icon')}>
                            <FontAwesomeIcon icon={faFaceSadTear} />
                        </span>
                    </h1>
                )}
            </ul>
        </div>
    );
}

export default memo(Search);
