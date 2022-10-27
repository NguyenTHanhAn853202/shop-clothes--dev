import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LogoBrand() {
    const imgArr = [
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/logo-brian-orlando-six.png',
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/logo-clark-downey.png',
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/logo-frk-island.png',
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/logo-gilbert-stephany.png',
    ];
    return (
        <div className={cx('wrapper', { ['wrap']: 'wrap' })}>
            <div className={cx('contain', { ['grid']: 'grid' })}>
                {imgArr.map((item, index) => (
                    <div key={index} className={cx('contain-img')}>
                        <img className={cx('img')} src={item} alt="gallery" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LogoBrand;
