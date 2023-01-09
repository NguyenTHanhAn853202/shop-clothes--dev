import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Default({ title, message, titleBtnAgree = 'Có', setIsShow, setAgree }) {
    const handleAgree = (e) => {
        setIsShow(false);
        setAgree(true);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contain')}>
                <div className={cx('header')}>
                    <h4 className={cx('header__title')}>{title}</h4>
                    <button onClick={() => setIsShow(false)} className={cx('header__btn')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className={cx('content')}>
                    <h1 className={cx('content__message')}>{message}</h1>
                    <div className={cx('content__btn')}>
                        <button onClick={handleAgree} className={cx('btn__agree')}>
                            {titleBtnAgree}
                        </button>
                        <button onClick={() => setIsShow(false)} className={cx('btn__disagree')}>
                            Đóng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Default;
