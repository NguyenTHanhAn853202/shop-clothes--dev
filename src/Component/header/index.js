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
    const imgLogoRef = useRef();
    useEffect(() => {
        const handleScroll = (e) => {
            const scrollYs = window.scrollY;
            const law = [{ transform: 'translateY(-100px)' }, { transform: 'translateY(0)' }];
            const time = {
                duration: 1000,
                iterations: 1,
            };
            if (scrollYs <= 40) {
                Object.assign(headerRef.current.style, {
                    position: 'relative',
                    top: '0',
                    height: '100px',
                });
                setResetAnimate(true);
            } else if(scrollYs>=155) {
                Object.assign(headerRef.current.style, {
                    position: 'fixed',
                    top: '0',
                    height: '70px',
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
        <div ref={headerRef} className={cx('wrapper', { ['wrap']: 'wrap' })}>
            <div className={cx('contain', { ['grid']: 'grid' })}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img ref={imgLogoRef} className={cx('img-logo')} src={logo} alt="logo" />
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
