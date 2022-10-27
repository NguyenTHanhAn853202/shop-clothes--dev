import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import LogoBrand from '~/Component/logoBrand';
import HeaderEachPage from '~/headerEachPage';

const cx = classNames.bind(styles);

function Brand() {
    return (
        <div className={cx('wrapper')}>
            <HeaderEachPage title="Thương hiệu" />
            <div className={cx('contain')}>
                <h1 className={cx('title')}>Thương hiệu của chúng tôi</h1>
                <LogoBrand />
            </div>
        </div>
    );
}

export default Brand;
