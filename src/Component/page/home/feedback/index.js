import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import ContainFeedback from './contain';

const cx = classNames.bind(styles);

function Feedback() {
    
    return (
        <div className={cx('wrapper', { wrap: true })}>
            <div className={cx('contain', { grid: true })}>
                <h1 className={cx('title')}>Khách hàng nói gì về chúng tôi</h1>
                <div className={cx('feedback')}>
                    <ContainFeedback />
                </div>
            </div>
        </div>
    );
}

export default Feedback;
