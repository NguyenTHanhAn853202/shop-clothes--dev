import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import logo from '~/media/image/logo/logo-1.jpg';
import Func from './function/index';
import Tool from './tool';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
const cx = classNames.bind(styles);

function Header() {
    const [scroll, setScroll] = useState();
    const [resetAnimate, setResetAnimate] = useState(true);
    const headerRef = useRef();

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollYs = window.scrollY;
            const law = [{ transform: 'translateY(-120px)' }, { transform: 'translateY(0)' }];
            const time = {
                duration: 1000,
                iterations: 1,
            };
            if (scrollYs <= 100) {
                Object.assign(headerRef.current.style, {
                    position: 'absolute',
                    height: '100px',
                    top: '0',
                });
                setResetAnimate(true);
            } else if (scrollYs >= 150) {
                Object.assign(headerRef.current.style, {
                    height: '70px',
                    top:'0',
                    position:'fixed',  
                });
                if (resetAnimate) {
                    headerRef.current.animate(law, time);
                }
                setResetAnimate(false);
            }
            setScroll(scrollYs);
        };
        document.addEventListener('scroll', handleScroll);
        return function () {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scroll]);

    return (
        <div ref={headerRef} className={cx('wrapper', { wrap: true })}>
            <div className={cx('contain', { grid: true })}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img className={cx('img-logo')} src={logo} alt="logo" />
                    </Link>
                </div>
                <div className={cx('function')}>
                    <Func />
                </div>
                <div className={cx('tool')}>
                    <Tool />
                </div>
            </div>
        </div>
    );
}

export default Header;
