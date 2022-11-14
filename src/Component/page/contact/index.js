import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import HeaderEachPage from '~/headerEachPage';
import Map from './map';
import InfoContact from './infoContact';

const cx = classNames.bind(styles);

function Contact() {
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <HeaderEachPage title={'Liên hệ'} />
            </div>
            <div className={cx('body', { wrap: true })}>
                <div className={cx('contain-body', { grid:true })}>
                    <div className={cx('map')}>
                        <Map />
                    </div>
                    <div className={cx('info-contact')}>
                        <InfoContact />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
