import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import ShowStar from '~/Component/showStar';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Button from '~/button';
import video from './download.mp4';
import { favouriteFeedback } from '~/api-server/feedback';

const cx = classNames.bind(styles);

function AccountFeedback({ data }) {
    const [isHeart, SetIsHeart] = useState(data?.liked);
    const [numberFavorite, setNumberFavorite] = useState(data?.favourite || 0);

    const handleClickFavouriteComment = async (e) => {
        try {
            await favouriteFeedback(data?._id || null);
            setNumberFavorite(isHeart ? numberFavorite - 1 : numberFavorite + 1);
            SetIsHeart(!isHeart);
        } catch (error) {}
    };
    const date = new Date(data?.createdAt || Date.now());
    const dateString = `${date?.getDate() < 10 ? `0${date?.getDate()}` : date?.getDate()}-${
        date?.getMonth() < 10 ? `0${date?.getMonth()}` : date?.getMonth()
    }-${date?.getFullYear()}`;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img className={cx('avatar-img')} src={data?.userID?.avatar} alt="avatar" />
            </div>
            <div className={cx('feedback')}>
                <h4 className={cx('name-account')}>{data?.userID?.name}</h4>
                <ShowStar starCurrent={data?.stars || 1} classNames={cx('star')} />
                <h4 className={cx('date-type')}>{dateString}</h4>
                <p className={cx('content-feedback')}>{data?.comment}</p>
                <div className={cx('media')}>
                    {date?.video && (
                        <div className={cx('video-media')}>
                            <video>
                                <source src={video} type="video/mp4" />
                                <source src="./download.mp4" type="video/ogg" />
                            </video>
                        </div>
                    )}
                    {data?.image && (
                        <div className={cx('img-media')}>
                            <img
                                src={'https://toigingiuvedep.vn/wp-content/uploads/2022/04/anh-meme-cheems.jpg'}
                                alt={'anh'}
                            />
                        </div>
                    )}
                </div>
                <div className={cx('others-feature')}>
                    <div>
                        <Button onClick={handleClickFavouriteComment} classNames={cx('btn-heart', { loved: isHeart })}>
                            <FontAwesomeIcon icon={faHeart} />
                        </Button>
                        <h4>{numberFavorite}</h4>
                    </div>
                    <Button classNames={cx('btn-report')}>Báo cáo</Button>
                </div>
            </div>
        </div>
    );
}

export default AccountFeedback;
