import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Button from '~/button';
import Input from '~/Input';
import { login, create } from '~/api-server/loginService';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useContext } from 'react';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Context } from '~/GlobalContext';
import { CART, LOGIN } from '~/GlobalContext/key';
import { Navigate, useNavigate } from 'react-router-dom';
import { get } from '~/api-server/cartService';

const cx = classNames.bind(styles);

function FormLogin({
    title,
    placeholder = '',
    typeBtn,
    type,
    titleAccount,
    titleButton,
    children,
    checkbox,
    password,
    valueRegister,
    ...props
}) {
    const [states, dispatch] = useContext(Context);
    const [check, setCheck] = useState();
    const [checkEmail, setCheckEmail] = useState(true);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    useEffect(() => {
        if (title === 'ĐĂNG NHẬP') {
            setCheck(false);
        } else {
            setCheck(true);
        }
    }, [title]);
    //  hanlde login and register
    const hanldeOnblurEmailCheck = (e) => {
        if (filter.test(e.target.value.trim())) {
            setCheckEmail(true);
        } else {
            setCheckEmail(false);
        }
    };
    const handleOnkeyDownCheckEmail = (e) => {
        if (filter.test(e.target.value.trim())) {
            setCheckEmail(true);
        }
    };

    const handleSubmit = (e) => {
        if (title === 'ĐĂNG NHẬP') {
            (async function () {
                try {
                    const data = await login(email, password);
                    const {
                        id,
                        avatar,
                        name,
                        check,
                        message,
                        refreshToken,
                        token: { accessToken, expiresIn },
                    } = data;

                    if (data.check) {
                        localStorage.id = id;
                        localStorage.avatar = avatar;
                        localStorage.name = name;
                        localStorage.login = check;
                        localStorage.userName = email;
                        localStorage.accessToken = accessToken;
                        localStorage.refreshToken = refreshToken;
                        localStorage.expiresIn = expiresIn;

                        const dataCart = await get();
                        dispatch({ key: CART, value: dataCart });

                        dispatch({
                            key: LOGIN,
                            value: data.check,
                        });
                        navigate('/', { replace: false });
                        alert(message);
                    } else {
                        alert('error: login failed');
                    }
                } catch (error) {}
            })();
        } else {
            (async function () {
                const [passwordRegister, samePasswordRegister] = valueRegister;
                if (passwordRegister === samePasswordRegister) {
                    const data = await create(email, passwordRegister);
                    console.log(data);
                }
            })();
        }
        e.preventDefault();
    };
    return (
        <form className={cx('wrapper')} onSubmit={handleSubmit}>
            <div className={cx('content')}>
                <h3 className={cx('title')}>{title}</h3>
                <Input
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    onKeyDown={handleOnkeyDownCheckEmail}
                    onBlur={hanldeOnblurEmailCheck}
                    title={titleAccount}
                    classNames={cx('ip-form', { ['error-border']: !checkEmail })}
                    placeholder={placeholder}
                    type={type}
                />
                {!checkEmail && <p className={'title-error'}>Email không hợp lệ</p>}
                {children}
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
