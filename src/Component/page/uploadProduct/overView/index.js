import styles from './overView.module.scss';
import classNames from 'classnames/bind';
import Input from '~/Input';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function OverView({ setOverView }) {
    const optionRef = useRef();
    const handleChangeName = (e) => {
        setOverView((props) => {
            return { ...props, name: e.target.value };
        });
    };
    const handleChangeType = (e) => {
        setOverView((props) => {
            return { ...props, type: e.target.value };
        });
    };
    const handleChangeDescription = (e) => {
        setOverView((props) => {
            return { ...props, description: e.target.value };
        });
    };
    useEffect(() => {
        setOverView((props) => ({ ...props, type: optionRef.current.value }));
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Input w70 onBlur={handleChangeName} classNames={cx('input')} placeholder="Tên sản phẩm" />
            <select ref={optionRef} onChange={handleChangeType}>
                <option value="quan-ao">Quần áo</option>
                <option value="tui-sach-and-balo">Balo</option>
                <option value="phu-kien-and-trang-suc">Trang sức và phụ kiện</option>
                <option value="giay-dep">Giày dép</option>
            </select>
            <textarea onBlur={handleChangeDescription} placeholder="Mô tả sản phẩm..."></textarea>
        </div>
    );
}

export default OverView;
