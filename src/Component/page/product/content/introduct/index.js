import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import CountNumber from '~/Component/countNumber';
import Button from '~/button';
import imgProduct from '~/media/image/product/product-1.jpg';
import { allLogo as logoShip } from '~/media/image/logoShip';
import { allLogo as logoBank } from '~/media/image/logoBank';
import { useState, useEffect } from 'react';
// import api
import { add } from '~/api-server/cartService';

const cx = classNames.bind(styles);

function Introduct({ data }) {
    const [datas, setData] = useState(data.length > 0 ? data[0] : {});
    const [number, setNumber] = useState(0);
    const [dataAddCart, setDataAddCart] = useState();
    useEffect(() => {
        setData(data.length > 0 ? data[0] : {});
    }, [data.length]);

    // handle event
    const addIntoCart = (e) => {
        (async function () {
            const data = await add(datas._id, number);
            setDataAddCart(data);
        })();
        console.log(data, dataAddCart);
    };
    //
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-product')}>
                <img src={datas.imageDefualt} />
            </div>
            <div className={cx('main-info')}>
                <span className={cx('goto')}>
                    <Link className={cx('link')} to="/">
                        TRANG CHỦ
                    </Link>
                    <span>/</span>
                    <Link className={cx('link')} to="/cua-hang/quan-ao">
                        QUẦN ÁO
                    </Link>
                </span>
                <h1 className={cx('name-product')}>{datas.name}</h1>
                <h1 className={cx('price-product')}>{`$${datas.costDefualt}`}</h1>
                <p className={cx('introduct-product')}>
                    Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế kỉ thứ 16 và được tái bản sau đó cho những
                    người quan tâm đến nó. Đoạn 1.10.32 và 1.10.33 trong cuốn “De Finibus Bonorum et Malorum” của Cicero
                    cũng được tái bản lại theo đúng cấu trúc gốc, kèm theo phiên bản tiếng Anh được dịch bởi H. Rackham
                    vào năm 1914.
                </p>
                <div className={cx('count-and-add')}>
                    <CountNumber setNumber={setNumber} number={number} />
                    <Button onClick={addIntoCart} ishover classNames={cx('add-cart')}>
                        THÊM VÀO GIỎ
                    </Button>
                </div>
                <div className={cx('ship-paid')}>
                    <div className={cx('ship')}>
                        <h3 className={cx('title-logo')}>Tính phí ship tự động</h3>
                        <div className={cx('list-logo')}>
                            {logoShip.map((item, index) => (
                                <img key={index} className={cx('img-ship')} src={item} />
                            ))}
                        </div>
                    </div>
                    <div className={cx('add')}>
                        <h3 className={cx('title-logo')}>Thanh toán</h3>
                        <div className={cx('list-logo')}>
                            {logoBank.map((item, index) => (
                                <img key={index} className={cx('img-ship')} src={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('category')}>
                    <span>Danh mục:</span>
                    <Link to={'/cua-hang/quan-ao'}>Quần áo,</Link>
                    <Link to={'/cua-hang/giay-dep'}>Giày dép,</Link>
                    <Link to={'/cua-hang/phu-kien-trang-suc'}>Phụ kiện & Trang sức,</Link>
                    <Link to={'/cua-hang/tui-xach-ba-lo'}>Túi xách và Balo</Link>
                </div>
            </div>
        </div>
    );
}

export default Introduct;
