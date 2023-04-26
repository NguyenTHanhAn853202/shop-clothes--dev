import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Introduct from './introduct';
import Information from './information';
import Other from './other';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../ConetextProduct';
import { useContext } from 'react';

import * as productServer from '~/api-server/productServer';
import { SHOW } from '../ConetextProduct/key';

const cx = classNames.bind(styles);

function Content() {
    const { slug } = useParams();
    const [states, dispatch] = useContext(Context);

    useEffect(() => {
        (async function () {
            const data = await productServer.oneProduct(slug);
            dispatch({
                key: SHOW,
                value: data,
            });
        })();
    }, [slug]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('introduct')}>
                <Introduct />
            </div>
            <div className={cx('information')}>
                <Information  />
            </div>
            <div className={cx('feedback')}>
                <Other  />
            </div>
        </div>
    );
}

export default Content;
