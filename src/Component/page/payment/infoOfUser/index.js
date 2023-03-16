import styles from './infoOfUser.module.scss';
import classNames from 'classnames/bind';
import { createRef, forwardRef, useMemo, useRef, useState } from 'react';
import NotifyContainer, { notify } from '~/utils/notification';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const cx = classNames.bind(styles);
const listMenu = [
    {
        title: 'Họ và tên* ',
        require: true,
        defaultValue: cookies.get('name'),
        placeholder: 'Nguyen Thanh An',
        type: 'text',
        kindof: 'name',
    },
    {
        title: 'Số điện thoại*',
        require: true,
        defaultValue: cookies.get('phoneNumber'),
        placeholder: '0123456789',
        type: 'tel',
        kindof: 'phone',
    },
    {
        title: 'Địa chỉ*',
        require: true,
        defaultValue: cookies.get('address'),
        placeholder: 'Phường A, Quận B, Huyện C...',
        type: 'text',
        kindof: 'address',
    },
    { title: 'Ghi chú', require: false, defaultValue: null, placeholder: 'ghi chú', type: 'text', kindof: 'note' },
];

function InfoOfUser({ datas, check }, refs) {
    const [inputValid, setInputValid] = useState(['true', 'true', 'true', 'true']);
    // const { name, address, phone } = datas;

    // supporting function

    const validInput = (index, value) => {
        setInputValid((props) => {
            const data = [...props];
            data[index] = value;
            return data;
        });
    };

    // event functions
    const handleValueInput = (e) => {
        const value = e.target.value;
        const index = value.length - 1;
        if (e.target.getAttribute('kindof') === 'phone') {
            const data = value.split('');
            if (data[index] < '0' || data[index] > '9') {
                data[index] = '';
                notify('error', 'Chỉ có thể nhập số');
            }
            e.target.value = data.join('');
        }
    };
    const handleOnblurInput = (e) => {
        const index = e.target.getAttribute('index');
        const type = e.target.getAttribute('kindof');
        if (type === 'note') return;
        if (e.target.value.trim() === '') {
            validInput(index, '');
        } else {
            validInput(index, 'true');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <NotifyContainer />
            {listMenu.map((item, index) => {
                return (
                    <div key={index} className={cx('contain-input')}>
                        <label htmlFor={cx(`input${index}`)}>{item.title}</label>
                        <input
                            index={index}
                            ref={refs[index]}
                            className={cx({
                                error: inputValid[index] ? false : true,
                            })}
                            classnames={cx('error')}
                            kindof={item.kindof}
                            type={item.type}
                            onBlur={handleOnblurInput}
                            onChange={handleValueInput}
                            typename={item.type}
                            defaultValue={item.defaultValue || ''}
                            placeholder={`eg: ${item.placeholder}`}
                            id={cx(`input${index}`)}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default forwardRef(InfoOfUser);
