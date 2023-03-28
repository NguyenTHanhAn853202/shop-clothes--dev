import styles from './toolBar.module.scss';
import classNames from 'classnames/bind';
import Input from '~/Input';
import { useContext } from 'react';
import { ContextToolBar, FIND, OPTION } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ToolBar() {
    const [states, dispatch] = useContext(ContextToolBar);
    const handleChangeFind = (e) => {
        dispatch({ key: FIND, value: e.target.value });
    };
    const handleChangeOption = (e) => {
        dispatch({ key: OPTION, value: e.target.value });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('find')}>
                <Input
                    onChange={handleChangeFind}
                    value={states.find}
                    placeholder="Nhập id hoặc tên của tài khoản..."
                    classNames={cx('input-find')}
                />
                {states.isSearch && (
                    <span>
                        <FontAwesomeIcon className={cx('icon')} icon={faSpinner} />
                    </span>
                )}
            </div>
            <select onChange={handleChangeOption} defaultValue={'all'}>
                <option value="all">Tất cả</option>
                <option value="employee">Nhân viên</option>
                <option value="customer">Khách hàng</option>
            </select>
        </div>
    );
}

export default ToolBar;
