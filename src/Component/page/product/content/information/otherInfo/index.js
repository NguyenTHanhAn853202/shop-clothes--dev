import { useContext } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Context } from '../../../ConetextProduct';

const cx = classNames.bind(styles);

function OtherInfo() {
    const [states,dispatch] = useContext(Context)
    const {product} = states
    return (
        <div className={cx('wrapper')}>
            <table style={{ width: '100%' }}>
                <tbody>
                    <tr className={cx('color')}>
                        <td className={cx('title-color')}>Màu sắc:</td>
                        <td className={cx('typeof-color')}>{product?.color.join(', ')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OtherInfo;
