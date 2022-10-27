import styles from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Map() {
    return (
        <div className={cx('wrapper')}>
            <iframe
                className={cx('map')}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15276.953741454838!2d107.21830117589099!3d16.81452345516545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3140e3c42146f5d5%3A0x27682386c55a9400!2zTGluaCBBbiwgVHJp4buHdSBUcuG6oWNoLCBUcmnhu4d1IFBob25nLCBRdeG6o25nIFRy4buLLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1666611790438!5m2!1svi!2s"
            ></iframe>
        </div>
    );
}

export default Map;
