import styles from './uploadProduct.module.scss';
import classNames from 'classnames/bind';
import OverView from './overView';
import Type from './type';
import { createRef, useEffect, useMemo, useState } from 'react';
import Default from '~/announcement/accept';
import { uploadProduct } from '~/api-server/productServer';

const cx = classNames.bind(styles);

function UploadProduct() {
    const [numberType, setNumberType] = useState(1);
    const [dataProduct, setDataProduct] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [agree, setAgree] = useState(false);
    const [file, setFile] = useState([]);
    const [overView, setOverView] = useState({});

    const { refs, Types } = useMemo(() => {
        const refs = [];
        const Types = [];
        for (let index = 0; index < numberType; index++) {
            refs[index] = createRef(null);
            Types.push(
                <div key={index}>
                    <h4 className={cx('title-type')}>{`Loại ${index + 1}`}</h4>
                    <Type index={index} ref={refs[index]} />
                </div>,
            );
        }
        return { refs, Types };
    }, [numberType]);

    useEffect(() => {
        if (agree) {
            (async () => {
                const formData = new FormData();
                formData.append('dataProduct', JSON.stringify(dataProduct));
                formData.append('id',localStorage.id)
                file.forEach((item) => {
                    formData.append('imageName', item);
                });
                formData.append('name', overView.name);
                formData.append('description', overView.description);
                formData.append('type', overView.type);
                const data = await uploadProduct(formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setAgree(false);
            })();
        }
    }, [agree]);

    const handleSubmit = (e) => {
        const data = refs.map((item) => {
            return item.current.info();
        });
        const file = refs.map((item) => item.current.image());
        setDataProduct(data);
        setFile(file);
        setIsShow(true);
    };
    return (
        <div className={cx('wrapper', { wrap: true })}>
            {isShow && (
                <Default
                    title={'Xác nhận'}
                    message="Bạn có muốn cập nhật món hàng này"
                    setIsShow={setIsShow}
                    setAgree={setAgree}
                />
            )}
            <div className={cx('contain', { grid: true })}>
                <div className={cx('overview')}>
                    <OverView setOverView={setOverView} />
                </div>
                <div className={cx('type')}>{Types}</div>
                <div className={cx('btn')}>
                    <div>
                        <button onClick={() => setNumberType(numberType + 1)} className={cx('add-type')}>
                            Thêm
                        </button>
                        {numberType > 1 && (
                            <button onClick={() => setNumberType(numberType - 1)} className={cx('remove')}>
                                Xóa
                            </button>
                        )}
                    </div>
                    <button onClick={handleSubmit} className={cx('comfirm')}>
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UploadProduct;
