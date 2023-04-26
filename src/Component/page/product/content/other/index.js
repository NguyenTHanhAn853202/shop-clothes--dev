import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import productImg from '~/media/image/product/product-1.jpg';
import Card from '~/card';
import { useRef, useEffect, useState, useContext } from 'react';
import Slider from '~/utils/Slider';
import { Context } from '../../ConetextProduct';

const cx = classNames.bind(styles);

function Other() {
    const [states, dispatch] = useContext(Context);
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
                    {
                        states?.suggestion.map((item, index) => {
                            return (
                                <div ref={CardRef} key={index} className={cx('contain-card')}>
                                    <Card
                                        src={item.image}
                                        alt={item.name}
                                        name={item.name}
                                        cost={item.price}
                                        href={`/san-pham/${item.slug}`}
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
