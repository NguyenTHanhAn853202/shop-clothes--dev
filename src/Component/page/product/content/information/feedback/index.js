import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import ShowStar from '~/Component/showStar';
import Button from '~/button';
import { useContext, useEffect, useState } from 'react';
import { listBtn } from './listBtn';
import AccountFeedback from './accountFeedback';
import { showFeedback } from '~/api-server/feedback';
import { Context } from '../../../ConetextProduct';
import { perPageFeedback } from '~/utils/perPage';
const cx = classNames.bind(styles);

function Feedback() {
    const [activeBtn, setActiveBtn] = useState('all');
    const [bfActiveBtn, setBfActiveBtn] = useState('all');
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [states, dispatch] = useContext(Context);
    const [more, setMore] = useState(true);
    const handleClickActive = (value) => {
        setBfActiveBtn(activeBtn);
        setActiveBtn(value);
    };
    const handleClickSeeMore = (e) => {
        setPage(page + 1);
    };

    useEffect(() => {
        (async () => {
            const data = await showFeedback(states?.product?._id, page, activeBtn);
            data.length ? setMore(true) : setMore(false);
            if (activeBtn !== bfActiveBtn) {
                setData(data);
                setBfActiveBtn(activeBtn);
                setPage(1);
            } else setData((props) => [...props, ...data]);
        })();
    }, [page, activeBtn]);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('main-title')}>ĐÁNH GIÁ SẢN PHẨM</h1>
            {states?.product?.numberFeedback ? (
                <>
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
                                        onClick={() => handleClickActive(item.value)}
                                        classNames={cx('btn-general', { activeBtnShow: activeBtn === valueCurrent })}
                                    >
                                        {item.title}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                    <div className={cx('content-feedback')}>
                        {data.map((item, index) => (
                            <AccountFeedback key={index} data={item} />
                        ))}
                        {data.length % perPageFeedback === 0 && more && (
                            <Button onClick={handleClickSeeMore} more center>
                                Xem thêm
                            </Button>
                        )}
                    </div>
                </>
            ) : (
                <span className={cx('empty-feedback')}>Chưa có đánh giá nào cho sản phẩm này</span>
            )}
        </div>
    );
}

export default Feedback;
