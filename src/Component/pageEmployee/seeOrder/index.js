import styles from './seeOrder.module.scss';
import classNames from 'classnames/bind';
import Sort from './sort';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SeeOrder() {
    const [data, setData] = useState([]);
    return (
        <div className={cx({ wrap: true })}>
            <div className={cx('wrapper', { grid: true })}>
                <Sort setData={setData} />
            </div>
        </div>
    );
}

export default SeeOrder;
