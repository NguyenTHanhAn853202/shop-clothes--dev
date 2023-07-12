import { NavLink } from 'react-router-dom';
import styles from './sort.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Sort({ typeSort }) {
    const [type, setType] = typeSort;

    const handleChangeDate = (e) => {
        setType(e.target.value);
    };
    return (
        <div className={cx('wrapper')}>
            <select defaultValue={type} onChange={handleChangeDate}>
                <option value="desc">Mới nhất</option>
                <option value="asc">Cũ nhất</option>
            </select>
        </div>
    );
}

export default Sort;
