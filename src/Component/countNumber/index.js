import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useEffect } from 'react';
const cx = classNames.bind(styles);

function CountNumber({ number, setNumber }) {
    const [amount, setAmount] = useState(number);
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
        const value = e.target.value || '1';
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
    }, [amount]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('amount')}>
                <button onClick={handleClickDecrease} className={cx('btn-amount')}>
                    -
                </button>
                <input
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
