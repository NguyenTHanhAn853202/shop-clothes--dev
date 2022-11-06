import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Introduct from './introduct';
import Information from './information';
import Other from './other';

const cx = classNames.bind(styles);

function Content({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('introduct')}>
                <Introduct />
            </div>
            <div className={cx('information')}>
                <Information />
            </div>
            <div className={cx('feedback')}>
                <Other />
            </div>
        </div>
    );
}

export default Content;
