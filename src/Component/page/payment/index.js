import styles from './payment.module.scss';
import classNames from 'classnames/bind';
import InfoOfUser from './infoOfUser';
import InfoOfProduct from './infoOfProduct';
import Button from '~/button';
import Default from '~/announcement/accept';
import { useState, useContext } from 'react';
import { Context } from '~/GlobalContext';

const cx = classNames.bind(styles);

function Payment() {
    const [agree, setAgree] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [{ cart }, dispatch] = useContext(Context);

    // noficatification

    // function handle event
    const handleClickPayment = () => {
        if (cart.length > 0) {
            setIsShow(true);
        } else {
            setIsShow(false);
        }
    };
    return (
        <div className={cx('wrapper', { wrap: true })}>
            {isShow && (
                <Default
                    title={'Xác nhận'}
                    message={'Bạn có chắc chắn muốn thanh toán'}
                    setAgree={setAgree}
                    setIsShow={setIsShow}
                />
            )}
            <div className={cx('contain', { grid: true })}>
                <div className={cx('layout')}>
                    <div style={{ width: '377px', overflow: 'hidden' }}>
                        <InfoOfUser />
                    </div>
                    <span className={cx('line-border')}></span>
                    <div style={{ width: '377px', overflow: 'hidden' }}>
                        <InfoOfProduct />
                    </div>
                </div>
                <div className={cx('payment')}>
                    <Button classNames={cx('btn', { disabled: cart.length <= 0 })} onClick={handleClickPayment}>
                        Thanh Toán
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Payment;
