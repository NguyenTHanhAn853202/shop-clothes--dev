import styles from './disableAccount.module.scss';
import classNames from 'classnames/bind';
import { useReducer, createContext, useState } from 'react';
import ToolBar from './toolBar';
import Content from './content';
import ButtonFunction from './buttonFunction';
const cx = classNames.bind(styles);

export const ContextToolBar = createContext();

const props = {
    find: '',
    option: 'all',
    listID: [],
    isSearch: false,
    isDisabled: false,
};

export const FIND = 'find';
export const OPTION = 'option';
export const ADD_ID = 'addID';
export const REMOVE_ID = 'removeID';
export const CLEAR_ID = 'clearID';
export const ISSEARCH = 'isSearch';
export const ISDISABLED = 'disabled';

const reducer = (props, action) => {
    const { key, value = null } = action;
    switch (key) {
        case FIND:
            return { ...props, find: value };
        case OPTION:
            return { ...props, option: value };
        case ADD_ID:
            return { ...props, listID: [...props.listID, value] };
        case REMOVE_ID:
            const newList = props.listID.filter((id) => id !== value);
            return { ...props, listID: newList };
        case CLEAR_ID:
            return { ...props, listID: [] };
        case ISSEARCH:
            return { ...props, isSearch: value };
        case ISDISABLED:
            return { ...props, isDisabled: value };
        default:
            return { ...props };
    }
};

function DisableAccount() {
    const [states, dispatch] = useReducer(reducer, props);
    const [isShow, setIsShow] = useState(false);
    const [agree, setAgree] = useState(false);
    return (
        <ContextToolBar.Provider value={[states, dispatch]}>
            <div className={cx('wrapper', { wrap: true })}>
                <div className={cx('contain', { grid: true })}>
                    <ToolBar isShow={isShow} />
                    <Content agree={agree} setAgree={setAgree} />
                    <ButtonFunction setAgree={setAgree} setIsShow={setIsShow} isShow={isShow} />
                </div>
            </div>
        </ContextToolBar.Provider>
    );
}

export default DisableAccount;
