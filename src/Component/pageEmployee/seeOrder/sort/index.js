import { NavLink } from 'react-router-dom';
import styles from './sort.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Sort({ setData }) {
    const [type, setType] = useState('asc');

    const handleChangeDate = (e) => {
        
        setType(e.target.value);
    };
    return (
        <div className={cx('wrapper')}>
            <select defaultValue={date} onChange={handleChangeDate}>
                <option value="asc">Mới nhất</option>
                <option value="desc">Cũ nhất</option>
            </select>
        </div>
    );
}

export default Sort;
