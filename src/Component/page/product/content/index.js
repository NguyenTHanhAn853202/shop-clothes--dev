import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Introduct from './introduct';
import Information from './information';
import Other from './other';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as productServer from '~/api-server/productServer';

const cx = classNames.bind(styles);

function Content() {
    const [data,setData] = useState([])
    const { slug } = useParams();

    useEffect(() => {
        (async function () {
            const data = await productServer.oneProduct(slug);
            setData(data);
        })();
    }, [slug]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('introduct')}>
                <Introduct data={data} />
            </div>
            <div className={cx('information')}>
                <Information data={data} />
            </div>
            <div className={cx('feedback')}>
                <Other data={data} />
            </div>
        </div>
    );
}

export default Content;
