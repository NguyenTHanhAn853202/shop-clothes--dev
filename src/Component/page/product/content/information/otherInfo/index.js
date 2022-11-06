import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function OtherInfo({ data }) {
    return (
        <div className={cx('wrapper')}>
            <table style={{ width: '100%' }}>
                <tbody>
                    <tr className={cx('color')}>
                        <td className={cx('title-color')}>Màu sắc:</td>
                        <td className={cx('typeof-color')}>Xanh lục, Vàng</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OtherInfo;
