import styles from './contentDisable.module.scss';
import classNames from 'classnames/bind';
import { ContextToolBar, ISSEARCH, ADD_ID, REMOVE_ID, CLEAR_ID, FIND } from '..';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { accounts, disable } from '~/api-server/disableAccount';
import useDebounce from '~/utils/useDebounce';
import NotifyContainer, { notify } from '~/utils/notification';

const cx = classNames.bind(styles);

function Content({ agree, setAgree }) {
    const [states, dispatch] = useContext(ContextToolBar);
    const { listID, option, find, isDisabled } = states;
    const [account, setAccount] = useState([]);

    // handle event
    const handleCheckedChange = (e) => {
        const tag = e.target;
        const id = tag.getAttribute('idaccount');
        if (!listID.includes(id)) {
            dispatch({ key: ADD_ID, value: id });
        } else {
            dispatch({ key: REMOVE_ID, value: id });
        }
    };
    //
    useEffect(() => {
        (async () => {
            dispatch({ key: ISSEARCH, value: true });
            const data = await accounts(isDisabled, option, find);
            setAccount(data);
            dispatch({ key: ISSEARCH, value: false });
        })();
    }, [option, useDebounce(find, 1000), isDisabled]);
    useEffect(() => {
        if (agree) {
            // handle disable
            (async () => {
                try {
                    const data = await disable(isDisabled, listID);
                    setAccount((props) => {
                        let newAccount = [...props];
                        data.forEach((accountDisabled) => {
                            newAccount = newAccount.filter((account) => account._id !== accountDisabled._id);
                        });
                        return newAccount;
                    });
                    notify('success', isDisabled ? 'Mở tài khoản thành công' : 'Vô hiệu hóa thành công');
                    dispatch({ key: CLEAR_ID });
                    dispatch({ key: FIND, value: '' });
                    setAgree(false);
                } catch (error) {
                    notify('error', isDisabled ? 'Mở tài khoản không thành công' : 'Vô hiệu hóa không thành công');
                }
            })();
        }
    }, [agree, isDisabled]);
    return (
        <div className={cx('wrapper')}>
            <NotifyContainer />
            <ul>
                {account.map((item, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            idaccount={item._id}
                            onChange={handleCheckedChange}
                            checked={listID.includes(item._id)}
                        />
                        <img src={item.avatar} alt={item.name} />
                        <div className={cx('info-of-account')}>
                            <span>{`${item._id}`}</span>
                            <span> | </span>
                            <span>{item.name || 'Chưa có tên'}</span>
                            <h2>{`Giới tính: ${item.sex || 'Chưa cập nhật'} `}</h2>
                            <span>{'Loại: ' + item.role}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Content;
