import { useContext } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Context } from '../../../ConetextProduct/index';

const cx = classNames.bind(styles);

function Description({ data }) {
    const [states, dispatch] = useContext(Context);
    const { product } = states;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contain-concept')}>
                <h1 className={cx('concept')}>{`Vì sao nên mua ${product?.name}?`}</h1>
                <p className={cx('info-concept')}>{product?.description}</p>
            </div>
        </div>
    );
}

export default Description;
