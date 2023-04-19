import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import ShowStar from '~/Component/showStar';
import Button from '~/button';
import { useContext, useEffect, useState } from 'react';
import { listBtn } from './listBtn';
import AccountFeedback from './accountFeedback';
import { showFeedback } from '~/api-server/feedback';
import { Context } from '../../../ConetextProduct';
const cx = classNames.bind(styles);

function Feedback() {
    const [activeBtn, setActiveBtn] = useState('all');
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [states, dispatch] = useContext(Context);
    const handleClickActive = (e) => {
        const value = e.target.getAttribute('value');
        setActiveBtn(value);
    };

    useEffect(() => {
        (async () => {
            const data = await showFeedback(states?.product?._id, page);
            setData(data);
        })();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('main-title')}>ĐÁNH GIÁ SẢN PHẨM</h1>
            <div className={cx('header')}>
                <div className={cx('average-star')}>
                    <h3 className={cx('current-star')}>
                        {states?.product?.starAverage} <span> trên 5</span>
                    </h3>
                    <div className={cx('show-stars')}>
                        <ShowStar starCurrent={states?.product?.starAverage} />
                    </div>
                </div>
                <div className={cx('btn-show-feedback')}>
                    {listBtn.map((item, index) => {
                        const valueCurrent = item.value;
                        return (
                            <Button
                                key={index}
                                onClick={handleClickActive}
                                classNames={cx('btn-general', { activeBtnShow: activeBtn === valueCurrent })}
                                value={item.value}
                            >
                                {item.title}
                            </Button>
                        );
                    })}
                </div>
            </div>
            <div className={cx('content-feedback')}>
                {data.map((item,index) => (
                    <AccountFeedback key={index} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Feedback;
