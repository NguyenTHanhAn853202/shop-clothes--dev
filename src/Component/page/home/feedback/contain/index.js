import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import avatar from '~/media/image/model/nguoi-mau-01.png';
import Slider from 'react-slick';
import { useRef, useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

function ContainFeedback() {
    const [width, setWidth] = useState();
    const wrapperRef = useRef();
    const settings = {
        // arrow:true,
        // dots: true,
        speed: 1000,
        // className: 'slider variable-width',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div ref={wrapperRef} className={cx('wrapper-slider')}>
            {/* <div className={cx('contain-slider')}> */}
            <Slider {...settings}>
                <div className={cx('wrapper')}>
                    <div className={cx('contain')}>
                        <img className={cx('avatar')} src={avatar} alt={'avatar'} />
                        <div className={cx('feedback')}>
                            <p className={cx('description')}>
                                I think this is a good website, This helps me is easy to buy faster products. But The
                                shop still don't sales speacial to customers. I hope the shop will take care of the
                                customer a lot of, I think this is a good website, This helps me is easy to buy faster
                                products. But The shop still don't sales speacial to customers. I hope the shop will
                                take care of the customer a lot of
                            </p>
                        </div>
                        <h4 className={cx('name-of-feedbacker')}>
                            Thanh An
                            <span className={cx('application')}> / AnCom</span>
                        </h4>
                    </div>
                </div>
                <div className={cx('wrapper')}>
                    <div className={cx('contain')}>
                        <img className={cx('avatar')} src={avatar} alt={'avatar'} />
                        <div className={cx('feedback')}>
                            <p className={cx('description')}>
                                I think this is a good website, This helps me is easy to buy faster products. But The
                                shop still don't sales speacial to customers. I hope the shop will take care of the
                                customer a lot of, I think this is a good website, This helps me is easy to buy faster
                                products. But The shop still don't sales speacial to customers. I hope the shop will
                                take care of the customer a lot of
                            </p>
                        </div>
                        <h4 className={cx('name-of-feedbacker')}>
                            Thanh An
                            <span className={cx('application')}> / AnCom</span>
                        </h4>
                    </div>
                </div>
                <div className={cx('wrapper')}>
                    <div className={cx('contain')}>
                        <img className={cx('avatar')} src={avatar} alt={'avatar'} />
                        <div className={cx('feedback')}>
                            <p className={cx('description')}>
                                I think this is a good website, This helps me is easy to buy faster products. But The
                                shop still don't sales speacial to customers. I hope the shop will take care of the
                                customer a lot of, I think this is a good website, This helps me is easy to buy faster
                                products. But The shop still don't sales speacial to customers. I hope the shop will
                                take care of the customer a lot of
                            </p>
                        </div>
                        <h4 className={cx('name-of-feedbacker')}>
                            Thanh An
                            <span className={cx('application')}> / AnCom</span>
                        </h4>
                    </div>
                </div>
            </Slider>
            {/* </div > */}
        </div>
    );
}

export default ContainFeedback;
