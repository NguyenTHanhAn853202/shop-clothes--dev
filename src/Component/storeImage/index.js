import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function StoreImage() {
    const imgArr = [
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/gallery-01.jpg',
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/gallery-02.jpg',
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/gallery-03.jpg',
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/gallery-04.jpg',
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/gallery-05.jpg',
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/gallery-06.jpg',
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/gallery-07.jpg',
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/gallery-08.jpg',
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/gallery-09.jpg',
        'http://mauweb.monamedia.net/pleatskora/wp-content/uploads/2019/04/gallery-10.jpg',
    ];
    return (
        <div className={cx('wrapper', { wrap: true })}>
            <div className={cx('contain', { grid: true })}>
                {imgArr.map((item, index) => (
                    <div key={index} className={cx('contain-img')}>
                        <img className={cx('img')} src={item} alt="gallery" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StoreImage;
