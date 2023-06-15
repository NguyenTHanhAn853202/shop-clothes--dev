import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { func } from './newProduct';
import { useEffect, useRef, createRef, useState } from 'react';
import Products from './product';
import { newProduct } from '~/api-server/suggestProduct';

const cx = classNames.bind(styles);

function NewProduct() {
    const [type, setType] = useState('');
    const [data, setData] = useState([]);
    const numberRef = func.length;
    const ref = [];
    const [outerWidth, setOuterWidth] = useState();
    for (let index = 0; index < numberRef; index++) {
        ref.push(createRef());
    }
    const activeRef = useRef([...ref]);
    const scrollRef = useRef();
    useEffect(() => {
        const firstItem = activeRef.current[0].current;
        firstItem.classList.add(cx('active'));
    }, []);
    useEffect(() => {
        const handleScroll = (e) => {
            setOuterWidth(window.outerWidth);
        };
        activeRef.current.forEach((ref) => {
            const check = ref.current.className.indexOf(cx('active')) !== -1 ? true : false;
            if (check) {
                scrollRef.current.style.left = ref.current.offsetLeft + 'px';
                scrollRef.current.style.width = ref.current.offsetWidth + 'px';
            }
        });
        window.addEventListener('resize', handleScroll);
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [outerWidth]);
    const handleActive = (e) => {
        const element = e.target;
        const nameClass = cx('active');
        activeRef.current.forEach((ref) => {
            const check = ref.current.className.indexOf(nameClass) !== -1 ? true : false;
            if (check) {
                ref.current.classList.remove(nameClass);
            }
        });
        element.classList.add(nameClass);
        scrollRef.current.style.left = element.offsetLeft + 'px';
        scrollRef.current.style.width = element.offsetWidth + 'px';
    };
    useEffect(() => {
        (async () => {
            const limit = 8;
            const data = await newProduct(type, limit);
            setData(data);
        })();
    }, [type]);
    return (
        <div className={cx('wrapper', { wrap: true })}>
            <div className={cx('contain', { grid: true })}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Sản phẩm mới</h2>
                    <div className={cx('category')}>
                        <span ref={scrollRef} className={cx('scroll')}></span>
                        {func.map((item, index) => {
                            return (
                                <h4
                                    onClick={(e) => {
                                        handleActive(e);
                                        setType(item.type);
                                    }}
                                    ref={activeRef.current[index]}
                                    key={index}
                                    className={cx('name-category')}
                                >
                                    {item.name}
                                </h4>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('product')}>
                    <Products data={data} />
                </div>
                <div className={cx('more-product')}>
                    <Link to={'cua-hang'} className={cx('title')}>
                        Xem thêm sản phẩm
                        <span>
                            <FontAwesomeIcon icon={faLongArrowAltRight} />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;
