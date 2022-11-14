import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Button from '~/button';
import Input from '~/Input';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function FormLogin({ title, placeholder = '', typeBtn, type, titleAccount, titleButton, titlePassword, checkbox }) {
    const [check, setCheck] = useState();
    useEffect(() => {
        console.log(title);
        if ((title === 'ĐĂNG NHẬP')) {
            setCheck(false);
        } else {
            setCheck(true);
        }
    }, [title]);
    return (
        <form className={cx('wrapper')}>
            <div className={cx('content')}>
                <h3 className={cx('title')}>{title}</h3>
                <Input title={titleAccount} classNames={cx('ip-form')} placeholder={placeholder} type={type} />
                <Input title={titlePassword} classNames={cx('ip-form')} placeholder={placeholder} type={type} />
                {checkbox && (
                    <div>
                        <input id="check-box-form-login" className={cx('checbox')} type="checkbox" />
                        <label for="check-box-form-login" className={cx('title-checkbox')}>
                            Ghi nhớ mật khẩu
                        </label>
                    </div>
                )}
                <Button type={typeBtn} ishover classNames={cx('btn')}>
                    {titleButton}
                </Button>
            </div>
            <div className={cx('wall')}>
                <span></span>
                <p className={cx('or')}>HOẶC</p>
                <span></span>
            </div>
            <div className={cx('other-part')}>
                <div className={cx('contain-btn-other-part')}>
                    <Button classNames={cx('btn-other-part')}>
                        <FontAwesomeIcon className={cx('icon-btn')} icon={faFacebook} />
                        Facebook
                    </Button>
                    <Button classNames={cx('btn-other-part')}>
                        <FontAwesomeIcon className={cx('icon-btn')} icon={faGoogle} />
                        Google
                    </Button>
                </div>
                {check && (
                    <>
                        <h4 className={cx('annouce-register')}>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</h4>
                        <span>
                            <Link>Điều khoản dịch vụ</Link> & <Link>Chính sách bảo mật</Link>
                        </span>
                    </>
                )}
                <p>
                    Chuyển sang trang:{' '}
                    {check ? (
                        <Link to="/account/login">{'Đăng nhập'}</Link>
                    ) : (
                        <Link to="/account/register">{'Đăng ký'}</Link>
                    )}
                </p>
            </div>
        </form>
    );
}

export default FormLogin;
