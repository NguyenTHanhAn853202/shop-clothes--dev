import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Card from '~/card';
import * as productServer from '~/api-server/productServer';
import { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Default from '~/announcement/accept';
import Loading from '~/utils/loading';
import NotifyContainer, { notify } from '~/utils/notification';

const cx = classNames.bind(styles);
function Content() {
    const [data, setData] = useState([]);
    const location = useLocation();
    const params = useParams().slug;
    const [searchParams, setSearchParams] = useSearchParams();
    const [agree, setAgree] = useState(false);
    const [idDelete, setIdDelete] = useState();
    const [isShow, setIsShow] = useState(false);
    const [loading, setLoading] = useState(false);

    // sort
    const column = searchParams.get('column');
    const type = searchParams.get('type');
    const isSort = searchParams.get('_sort');

    const handleClickRemoveProduct = (item, e) => {
        setIsShow(true);
        setIdDelete(item._id);
    };

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

    useEffect(() => {
        if (agree) {
            (async () => {
                try {
                    setLoading(true);
                    const data = await productServer.deleteProduct(idDelete);
                    setData((props) => {
                        let newData = [...props];
                        newData = newData.filter((item) => item._id !== data._id);
                        return newData;
                    });
                    notify('success', 'Xóa sản phẩm thành công');
                    setLoading(false);
                    setIdDelete('');
                    setAgree(false);
                } catch (error) {
                    notify('error', 'Xóa sản phẩm không thành công');
                    console.log(error);
                }
            })();
        }
    }, [agree]);

    return (
        <div className={cx('wrapper')}>
            <NotifyContainer />
            {loading && <Loading fixed bigSize />}
            {isShow && (
                <Default
                    title={'Xóa sản phẩm'}
                    message={'Bạn có chắc muốn xóa sản phẩm này'}
                    setIsShow={setIsShow}
                    setAgree={setAgree}
                />
            )}
            {data.map((item, index) => {
                const product = item.product[0];
                return (
                    <div key={index} className={cx('contain-card')}>
                        {localStorage.role === 'employee' ||
                            (localStorage.role === 'manager' && (
                                <Tippy content="Xóa sản phẩm" duration={[300, 200]} animation={'scale'}>
                                    <button onClick={(e) => handleClickRemoveProduct(item, e)}>Xóa</button>
                                </Tippy>
                            ))}
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
