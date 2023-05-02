import Cookies from 'universal-cookie';
import styles from './changePassword.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { checkPassWord } from '~/utils/checkPassWord/checkPassWord';
import { changePassword } from '~/api-server/changePassword';
import NotifyContainer, { notify } from '~/utils/notification';

const cx = classNames.bind(styles);

const cookies = new Cookies();

function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');
    const [isError, setIsError] = useState([false, false, false]); // vt 1 la giong nhau, 2 la new 3 la current password
    // xu ly isError
    const handleIsError = (index, value) => {
        setIsError((props) => {
            const newProps = [...props];
            newProps.splice(index, 1, value);
            return newProps;
        });
    };
    //
    const handleInputCurrentPassword = (e) => {
        const value = e.target.value;
        setCurrentPassword(value);
        value && handleIsError(2, false);
    };
    const handleInputNewPassword = (e) => {
        const value = e.target.value;

        handleIsError(1, checkPassWord(value) ? false : true);
        setNewPassword(value);
    };
    const handleInputReNewPassword = (e) => {
        const value = e.target.value;
        setReNewPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isError[0] && !isError[1]) {
            const data = await changePassword(currentPassword, newPassword, reNewPassword);
            notify(data?.title, data?.message);
            if (data?.success) {
                setCurrentPassword('');
                setNewPassword('');
                setReNewPassword('');
            }
        } else {
            notify('error', 'Vui lòng kiểm tra lại');
        }
    };

    useEffect(() => {
        handleIsError(0, reNewPassword === newPassword || reNewPassword === '' ? false : true);
    }, [reNewPassword, newPassword]);
    return (
        <div className={cx('wrapper', { wrap: true })}>
            <NotifyContainer />
            <div className={cx('contain', { grid: true })}>
                <div className={cx('cover')}>
                    <h1>Đổi mật khẩu</h1>
                    <img src={cookies.get('avatar')} />
                    <h4>{cookies.get('name')}</h4>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor={cx('current-password')}>Mật khẩu hiện tại:</label>
                        <input
                            value={currentPassword}
                            onChange={handleInputCurrentPassword}
                            id={cx('current-password')}
                            type="password"
                            placeholder="eg: thanhan123@"
                            className={cx({ errorInput: isError[2] })}
                        />

                        <label htmlFor={cx('new-password')}>Mật khẩu mới:</label>
                        <input
                            className={cx({ errorInput: isError[0] || isError[1] })}
                            value={newPassword}
                            onChange={handleInputNewPassword}
                            id={cx('new-password')}
                            type="password"
                            placeholder="eg: helloword123@"
                        />
                        {isError[1] && <span>Mật khẩu phải nhiều hơn 7 kí tự. Có chử hoa, kí tự đặc biệt và số.</span>}
                        <label htmlFor={cx('repeat-new-password')}>Nhập lại mật khẩu củ:</label>
                        <input
                            className={cx({ errorInput: isError[0] })}
                            value={reNewPassword}
                            onChange={handleInputReNewPassword}
                            id={cx('repeat-new-password')}
                            type="password"
                            placeholder="eg: helloword123@"
                        />
                        {isError[0] && <span>Mật khẩu không trùng khớp.</span>}
                        <div className={cx('contain-btn')}>
                            <input type="submit" className={cx('btn-submit')} value="Xác nhận" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
