import styles from './seeOrder.module.scss';
import classNames from 'classnames/bind';
import Sort from './sort';
import { useEffect, useState } from 'react';
import DisplayOrder from './displayOrder';
import { showOrder } from '~/api-server/showOrder';

const cx = classNames.bind(styles);

function SeeOrder() {
    const [data, setData] = useState([]);
    const [type, setType] = useState('desc');

    useEffect(() => {
        (async () => {
            const data = await showOrder(type);
            setData(data);
            console.log(type);
            console.log(data);
        })();
    }, [type]);
    return (
        <div className={cx({ wrap: true })}>
            <div className={cx('wrapper', { grid: true })}>
                <Sort typeSort={[type, setType]} />
                <DisplayOrder data={data} />
            </div>
        </div>
    );
}

export default SeeOrder;
