import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import ContainFeedback from './contain';

const cx = classNames.bind(styles);

function Feedback() {
    const settings = {
        dots: true
    }
    return (
        <div className={cx('wrapper', { ['wrap']: 'wrap' })}>
            <div className={cx('contain', { ['grid']: 'grid' })}>
                <h1 className={cx('title')}>Khách hàng nói gì về chúng tôi</h1>
                <div className={cx('feedback')}>
                   <ContainFeedback />
                </div>
            </div>
        </div>
    );
}

export default Feedback;
