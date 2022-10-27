import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Button from '~/button';
import Input from '~/Input';
const cx = classNames.bind(styles);

function FormLogin({ title, placeholder = '', type, titleAccount, titleButton, titlePassword, checkbox }) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>{title}</h3>
            <Input title={titleAccount} placeholder={placeholder} type={type} />
            <Input title={titlePassword} placeholder={placeholder} type={type} />
            {checkbox && (
                <>
                    <input id='check-box-form-login' className={cx('checbox')} type="checkbox" />
                    <label for="check-box-form-login" className={cx('title-checkbox')}>Ghi nhớ mật khẩu</label>
                </>
            )}
            <Button classNames={cx('btn')}>{titleButton}</Button>
        </div>
    );
}

export default FormLogin;
