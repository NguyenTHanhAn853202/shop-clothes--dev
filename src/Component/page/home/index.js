import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import Begin from './begin';
import Introduction from './introduction';
import NewProduct from './newProduct';
import Benefit from './benefit';
import IntroductStore from './introductStore';
import Feedback from './feedback';
import StoreImage from '../../storeImage';
import LogoBrand from '../../logoBrand';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('begin')}>
                <Begin />
            </div>
            <div className={cx('introduction')}>
                <Introduction />
            </div>
            <div className={cx('new-product')}>
                <NewProduct />
            </div>
            <div className={cx('benefit')}>
                <Benefit />
            </div>
            <div className={cx('introduct-store')}>
                <IntroductStore />
            </div>
            <div className={cx('feedback')}>
                <Feedback />
            </div>
            <div className={cx('store-image')}>
                <StoreImage />
            </div>
            <div className={cx('logo-brands')}>
                <LogoBrand />
            </div>
        </div>
    );
}

export default Home;
