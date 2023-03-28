import styles from './type.module.scss';
import classNames from 'classnames/bind';
import Input from '~/Input';
import { forwardRef, useRef, useImperativeHandle, useState } from 'react';

const cx = classNames.bind(styles);

function Type({ index }, ref) {
    const imgRef = useRef();
    const sizeRef = useRef();
    const colorRef = useRef();
    const priceRef = useRef();
    const numberRef = useRef();
    const [file, setFile] = useState([]);

    const handlChangeImage = (e) => {
        const image = e.target.files[0];
        if (image) {
            imgRef.current.src = URL.createObjectURL(image);
            setFile(image);
        }
    };
    useImperativeHandle(ref, () => ({
        info() {
            return {
                color: colorRef.current.value,
                size: sizeRef.current.value.split(' '),
                price: priceRef.current.value * 1,
                number: numberRef.current.value * 1,
                fileName: file?.name,
                fileSize: file?.size,
            };
        },
        image() {
            return file;
        },
    }));
    return (
        <div className={cx('wrapper')}>
            <div className={cx('input')}>
                <Input ref={colorRef} w70 className={cx('color')} placeholder="Màu săc" />
                <Input ref={sizeRef} w70 className={cx('size')} placeholder="size" />
                <Input ref={priceRef} w70 type="number" min={1} className={cx('price')} placeholder="Giá" />
                <Input ref={numberRef} w70 type="number" min={1} className={cx('number')} placeholder="Số lượng" />
            </div>
            <div className={cx('image')}>
                <img ref={imgRef} />
                <input
                    style={{ display: 'none' }}
                    index={index}
                    onChange={handlChangeImage}
                    id={cx(`file-upload-${index}`)}
                    type="file"
                />
                <label htmlFor={cx(`file-upload-${index}`)}>Thêm ảnh</label>
            </div>
        </div>
    );
}

export default forwardRef(Type);
