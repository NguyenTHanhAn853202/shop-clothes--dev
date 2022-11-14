import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Button from '~/button';
import { Link } from 'react-router-dom';

import modelImg from '~/media/image/model/nguoi-mau-01.png';

const cx = classNames.bind(styles);

function Begin() {
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-model')}>
                <img className={cx('img')} src={modelImg} alt={'img-model'} />
            </div>
            <div className={cx('contain')}>
                <div className={cx('info')}>
                    <h3 className={cx('title')}>2019 New Arrivals</h3>
                    <h1 className={cx('sale')}>Sale off up</h1>
                    <h1 className={cx('sale')}>to 70%</h1>
                    <h2 className={cx('description')}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </h2>
                    
                        <Button ishover to={'/cua-hang'}>Mua Ngay</Button>
                </div>
            </div>
        </div>
    );
}

export default Begin;
