import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import StoreProvider from './handleContext/Context';
import HeaderStore from './headerStore';
import SideBar from './sideBar';
import Content from './content';
const cx = classNames.bind(styles);

function Store() {
    
    return (
        <StoreProvider>
            <div className={cx('wrapper', { wrap: true })}>
                <div className={cx('contain', { grid: true })}>
                    <div className={cx('header')}>
                        <HeaderStore />
                    </div>
                    <div className={cx('layout')}>
                        <div className={cx('SideBar-layout')}>
                            <SideBar />
                        </div>
                        <div className={cx('content-layout')}>
                            <Content />
                        </div>
                    </div>
                </div>
            </div>
        </StoreProvider>
    );
}

export default Store;
