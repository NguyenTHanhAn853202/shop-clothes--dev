import styles from './infoOfUser.module.scss';
import classNames from 'classnames/bind';
import { createRef, useMemo, useRef, useState } from 'react';

const cx = classNames.bind(styles);
const listMenu = [
    { title: 'Họ và tên* ', require: true, placeholder: 'Nguyen Thanh An' },
    { title: 'Số điện thoại*', require: true, placeholder: '0123456789' },
    { title: 'Địa chỉ*', require: true, placeholder: 'Phường A, Quận B, Huyện C...' },
    { title: 'Ghi chú', require: false, placeholder: 'ghi chú' },
];
function InfoOfUser({ datas }) {
    // const { name, address, phone } = datas;
    const refsById = useMemo(() => {
        const refs = {};
        listMenu.forEach((item, index) => {
            refs[index] = createRef(null);
        });
        return refs;
    }, []);

    return (
        <div className={cx('wrapper')}>
            {listMenu.map((item, index) => {
                return (
                    <div key={index} className={cx('contain-input')}>
                        <label htmlFor={cx(`input${index}`)}>{item.title}</label>
                        <input ref={refsById[index]} placeholder={`eg: ${item.placeholder}`} id={cx(`input${index}`)} />
                    </div>
                );
            })}
        </div>
    );
}

export default InfoOfUser;
