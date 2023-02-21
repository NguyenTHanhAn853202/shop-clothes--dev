import styles from './payment.module.scss';
import classNames from 'classnames/bind';
import InfoOfUser from './infoOfUser';
import InfoOfProduct from './infoOfProduct';
import Button from '~/button';
import Default from '~/announcement/accept';
import { useState, useContext, createRef, useMemo, useRef } from 'react';
import { Context } from '~/GlobalContext';
import NotifyContainer, { notify } from '~/utils/notification';

const cx = classNames.bind(styles);

function Payment() {
    const [agree, setAgree] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [choosedProducts, setChoosedProducts] = useState([]);
    const [{ cart }, dispatch] = useContext(Context);
    const refcodeDiscount = useRef();
    const refTypePayment = useRef();
    let infoUser = [];
    const refInfoUser = useMemo(() => {
        const refs = [];
        for (let index = 0; index < 4; index++) {
            refs[index] = createRef(null);
        }
        return refs;
    }, []);

    // function handle event
    const handleClickPayment = () => {
        if (choosedProducts.length > 0) {
            // setIsShow(true);
        } else {
            // setIsShow(false);
            notify('warning', 'chưa có sản phẩm nào được chọn', {});
            return;
        }
        refInfoUser.forEach((item, index) => {
            const element = item.current;
            if (element.value.trim() === '') {
                element.className = element.getAttribute('classnames');
            } else {
                element.className = element.className.replace(element.getAttribute('classnames'), '');
                infoUser.push({ title: element.getAttribute('kindof'), value: element.value });
            }
        });
        if (infoUser.length !== refInfoUser.length) {
            notify('warning', 'Vui lòng nhập đủ thông tin');
            return;
        }
        const codeDiscount = refcodeDiscount.current.value;
        const typeOfPayment = refTypePayment.current.value;
        // call API
        infoUser = [];
    };
    return (
        <div className={cx('wrapper', { wrap: true })}>
            <NotifyContainer />
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
                        <InfoOfUser ref={refInfoUser} />
                    </div>
                    <span className={cx('line-border')}></span>
                    <div style={{ width: '377px', overflow: 'hidden' }}>
                        <InfoOfProduct
                            ref={{ refcodeDiscount, refTypePayment }}
                            chooseProduct={[choosedProducts, setChoosedProducts]}
                        />
                    </div>
                </div>
                <div className={cx('payment')}>
                    <Button
                        classNames={cx('btn', { disabled: choosedProducts.length <= 0 })}
                        onClick={handleClickPayment}
                    >
                        Thanh Toán
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Payment;
