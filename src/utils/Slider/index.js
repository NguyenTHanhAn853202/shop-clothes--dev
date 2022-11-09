import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Slider({ children, classNames, element, slidesToScroll = 1, ...props }) {
    const [location, setLocation] = useState(0);
    const sliderRef = useRef();
    //Cần tối ưu hóa ở dây để k cần nhập kích thước ở css thẻ khác

    // useEffect(() => {
    //     Object.assign(element.current.style, {
    //         flexBasis: '25%',
    //         position: 'relative',
    //         flexShrink: '0',
    //     });
    // }, []);
    const handleScroll = (scrollNumber) => {
        sliderRef.current.scroll({ left: scrollNumber, behavior: 'smooth' });
    };
    const hanbdleClickRight = (e) => {
        const maxScroll = sliderRef.current.scrollWidth - location - sliderRef.current.clientWidth + 1;
        if (maxScroll >= element.current.clientWidth) {
            setLocation((props) => {
                const step = props + element.current.clientWidth * slidesToScroll;
                handleScroll(step);
                return step;
            });
        } else return;
    };
    const hanbdleClickLeft = (e) => {
        if (location >= element.current.clientWidth) {
            setLocation((props) => {
                const step = props - element.current.clientWidth * slidesToScroll;
                handleScroll(step);
                return step;
            });
        } else return;
    };
    return (
        <div className={cx('wrapper')}>
            <button onClick={hanbdleClickLeft} className={cx('btn-left')}>
                <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            <div ref={sliderRef} className={cx('slider')}>
                {children}
            </div>
            <button onClick={hanbdleClickRight} className={cx('btn-right')}>
                <FontAwesomeIcon icon={faCaretRight} />
            </button>
        </div>
    );
}

export default Slider;
