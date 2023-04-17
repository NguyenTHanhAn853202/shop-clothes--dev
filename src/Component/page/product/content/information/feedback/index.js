import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import ShowStar from '~/Component/showStar';
import Button from '~/button';
import { useEffect, useState } from 'react';
import { listBtn } from './listBtn';
import AccountFeedback from './accountFeedback';
import { showFeedback } from '~/api-server/feedback';
const cx = classNames.bind(styles);

const starCurrent = 4;

function Feedback() {
    const [activeBtn, setActiveBtn] = useState('all');
    const [data, setData] = useState([]);
    const handleClickActive = (e) => {
        const value = e.target.getAttribute('value');
        setActiveBtn(value);
    };

    useEffect(() => {
        (async () => {
            const data = await showFeedback('64314953cee56ef5e5784d3d',1);
            console.log(data);
            setData(data);
        })();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('main-title')}>ĐÁNH GIÁ SẢN PHẨM</h1>
            <div className={cx('header')}>
                <div className={cx('average-star')}>
                    <h3 className={cx('current-star')}>
                        4 <span> trên 5</span>
                    </h3>
                    <div className={cx('show-stars')}>
                        <ShowStar starCurrent={starCurrent} />
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
                {data.map((item) => (
                    <AccountFeedback key={item} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Feedback;
