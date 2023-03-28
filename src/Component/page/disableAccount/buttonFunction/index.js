import styles from './buttonFunction.module.scss';
import classNames from 'classnames/bind';
import Button from '~/button';
import NotifyAgree from '~/announcement/accept';
import { useState, useContext } from 'react';
import { ContextToolBar, ISDISABLED } from '..';
const cx = classNames.bind(styles);

function ButtonFunction({ isShow, setIsShow, setAgree }) {
    const [states, dispatch] = useContext(ContextToolBar);
    const { isDisabled } = states;
    // handle event
    const handleDisabled = (e) => {
        setIsShow(true);
    };

    const handleNavigateToDisabled = (e) => {
        dispatch({ key: ISDISABLED, value: !isDisabled });
    };
    return (
        <div className={cx('wrapper')}>
            {isShow && (
                <NotifyAgree
                    title={isDisabled ? 'Mở vô hiệu hóa' : 'Vô hiệu hóa tài khoản'}
                    message={
                        isDisabled
                            ? 'bạn có chắc muốn mở vô hiệu hóa'
                            : 'Bạn có chắc chắn muốn vô hiệu hóa những tài khoản này'
                    }
                    setAgree={setAgree}
                    setIsShow={setIsShow}
                />
            )}
            <Button onClick={handleNavigateToDisabled} ishover classNames={cx('disabled')}>
                {isDisabled ? 'Tài khoản chưa vô hiệu hóa' : 'Tài khoản đã vô hiệu hóa'}
            </Button>
            <Button onClick={handleDisabled} ishover classNames={cx('handle-disable')}>
                {isDisabled ? 'Mở lại' : 'Vô hiệu hóa'}
            </Button>
        </div>
    );
}

export default ButtonFunction;
