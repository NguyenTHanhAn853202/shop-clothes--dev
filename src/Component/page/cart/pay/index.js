import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import Button from '~/button';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '~/Input';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Pay({ totalCost }) {
    const navigate = useNavigate();
    const ipRef = useRef();
    const [address, setAddress] = useState();
    const [isAddress, setIsAddress] = useState(false);
    const handleAddress = () => {
        setAddress(ipRef.current.value);
        setIsAddress(false);
    };
    const handleShowIpAddress = () => {
        setIsAddress(!isAddress);
    };
    return (
        <div className={cx('wrapper')}>
            <table className={cx('table-pay')}>
                <thead>
                    <tr>
                        <th className={cx('left')} colSpan={2}>
                            TỔNG SỐ LƯỢNG
                        </th>
                    </tr>
                </thead>
                <tbody className={cx('table-body')}>
                    <tr>
                        <td className={cx('left')}>Tổng phụ</td>
                        <td className={cx('right')}>$0</td>
                    </tr>
                    <tr className={cx('delivery')}>
                        <td className={cx('left')}>Giao hàng</td>
                        <td className={cx('address')}>
                            <span>Giao hàng miễn phí</span>
                            {address && (
                                <h4 className={cx('destination')}>
                                    vận chuyển điến: <span>{address}</span>
                                </h4>
                            )}
                            <h4 onClick={handleShowIpAddress} className={cx('update')}>
                                Cập nhật địa chỉ giao hàng
                            </h4>
                            {isAddress && (
                                <div className={cx('form-update')}>
                                    <input ref={ipRef} placeholder="Nhập địa chỉ" />
                                    <button onClick={handleAddress}>OK</button>
                                </div>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('left')}>Tổng</td>
                        <td className={cx('right')}>{`$${totalCost}`}</td>
                    </tr>
                    <tr>
                        <td className={cx('pay')} colSpan={2}>
                            <Button
                                ishover
                                w100
                                onClick={() => {
                                    navigate('/thanh-toan');
                                }}
                            >
                                TIẾN HÀNH THANH TOÁN
                            </Button>
                            <div className={cx('discount-code')}>
                                <span>
                                    <FontAwesomeIcon icon={faTag} />
                                </span>
                                <h4 className={cx('title-discount')}>Phiếu ưu đãi</h4>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className={cx('contain-input-discount-code')}>
                            <Input placeholder="Nhập mã giảm giá" w100 gold classNames={cx('input-discount-code')} />
                            <Button w100 classNames={cx('confirm-discount-code')}>
                                ÁP DỤNG
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Pay;
