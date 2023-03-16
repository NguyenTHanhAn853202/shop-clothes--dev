import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
const cx = classNames.bind(styles);

function CountNumber({ number, setNumber, setChangingProduct, data, ...props }) {
    const inputRef = useRef();
    const [amount, setAmount] = useState(number);
    const firstRender = useRef(true);
    const handleChangeAmount = (e) => {
        const value = e.target.value;
        let newValue = value;
        for (let index = 0; index < newValue.length; index++) {
            if (newValue[index] < '0' || newValue[index] > '9') {
                newValue = newValue.replace(newValue[index], '');
                index--;
            }
        }
        setAmount(newValue);
    };
    const handleBlurAmount = (e) => {
        const value = e.target.value==='0' || !e.target.value?  '1':e.target.value;
        setAmount(value);
    };
    const handleClickIncrease = (e) => {
        const value = amount * 1 + 1;
        setAmount(value);
    };
    const handleClickDecrease = (e) => {
        const value = amount * 1 === 1 ? amount : amount * 1 - 1;
        setAmount(value);
    };
    useEffect(() => {
        if (setNumber) {
            setNumber(amount);
        }
        if (data) {
            if (firstRender.current) {
                firstRender.current = false;
            } else {
                const { size, color, _id } = data;
                setChangingProduct((props) => {
                    const data = [...props];
                    const newData = data.filter((item) => item._id !== _id);
                    return [...newData, { _id, number: amount * 1, size, color }];
                });
            }
        }
    }, [amount]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('amount')}>
                <button onClick={handleClickDecrease} className={cx('btn-amount')}>
                    -
                </button>
                <input
                    {...props}
                    ref={inputRef}
                    onBlur={handleBlurAmount}
                    onChange={handleChangeAmount}
                    className={cx('ip-amount')}
                    value={amount}
                />
                <button onClick={handleClickIncrease} className={cx('btn-amount')}>
                    +
                </button>
            </div>
        </div>
    );
}

export default CountNumber;
