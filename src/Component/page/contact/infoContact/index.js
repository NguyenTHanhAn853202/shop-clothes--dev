import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import logo from '~/media/image/logo/logo-black-03.png';
import { contactAt } from './info';
import TitleAndIcon from '~/Component/titleAndIcon';
import Input from '~/Input';
import Button from '~/button';
const cx = classNames.bind(styles);

function InfoContact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-contact')}>
                <div className={cx('logo')}>
                    <img className={cx('img-logo')} src={logo} alt={'logo'} />
                </div>
                <div className={cx('info')}>
                    {contactAt.map((item, index) => (
                        <TitleAndIcon key={index} title={item.title} icon={item.icon} />
                    ))}
                </div>
            </div>
            <div className={cx('contact-us')}>
                <h1 className={cx('title-contact-us')}>Liên hệ với chúng tôi</h1>
                <div className={cx('contact-us-input')}>
                    <div className={cx('input-info')}>
                        <Input placeholder={'Họ và tên'} gold w100 />
                        <Input placeholder={'Số điện thoại'} gold w100 />
                    </div>
                    <div className={cx('input-info')}>
                        <Input placeholder={'Họ và tên'} gold w100 />
                        <Input placeholder={'Số điện thoại'} gold w100 />
                    </div>
                </div>
                <textarea placeholder={'Lời nhắn'} ></textarea>
                <Button ishover classNames={cx('btn-send')}>Gửi</Button>
            </div>
        </div>
    );
}

export default InfoContact;
