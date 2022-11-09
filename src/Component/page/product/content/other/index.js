import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import productImg from '~/media/image/product/product-1.jpg';
import Card from '~/card';
import { useRef, useEffect, useState } from 'react';
import Slider from '~/utils/Slider';

const cx = classNames.bind(styles);

function Other() {
    const CardRef = useRef();
    const settings = {
        speed: 1000,
        // className: 'slider variable-width',
        infinite: true,
        slidesToShow: 4,
        // slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('main-title')}>SẢN PHẨM TƯƠNG TỰ</h1>
            <div className={cx('contain-slider')}>
                <Slider {...settings} element={CardRef}>
                    {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                        return (
                            <div ref={CardRef} key={index} className={cx('contain-card')}>
                                <Card
                                    src={productImg}
                                    alt={''}
                                    name={`Áo quần bộ cao cấp năng động ${item}`}
                                    cost={item}
                                />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default Other;
