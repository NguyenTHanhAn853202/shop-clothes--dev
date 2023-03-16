import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import Render from '~/renderTippy';
import 'tippy.js/dist/tippy.css';
import Bag from './bagShop';
import Search from './search';
import { Link, useLocation } from 'react-router-dom';
import { useState, useContext, useEffect, useRef, useMemo } from 'react';
import { Context } from '~/GlobalContext';
import Default from '~/announcement/accept';

const cx = classNames.bind(styles);

function Tool() {
    const [isShow, setIsShow] = useState(false);
    const [agree, setAgree] = useState(false);
    const [isPath, setIsPath] = useState(true);
    const displayRef = useRef();
    const location = useLocation();
    const [states] = useContext(Context);
    const { cart } = states;

    useEffect(() => {
        // nếu đang ở trang giỏ hàng thì sẻ k suất hiện tippy khi hover
        setIsPath((props) => {
            return location.pathname === '/gio-hang' ? false : true;
        });
    }, [location.pathname]);

    const number = useMemo(() => {
        return cart.reduce((total, item) => {
            return total + item.number*1;
        }, 0);
    }, [JSON.stringify(cart)]);
    return (
        <div className={cx('wrapper')}>
            <div>
                <Tippy
                    offset={[15, 15]}
                    interactive
                    // disabled ={false}
                    // visible
                    // hideOnClick={false}
                    placement="bottom-end"
                    interactiveBorder={0}
                    render={(attrs) => (
                        <div>
                            {isPath && (
                                <Render isNotPadding={true} attrs={attrs}>
                                    <Bag ref={displayRef} agree={agree} setAgree={setAgree} setIsShow={setIsShow} />
                                </Render>
                            )}
                        </div>
                    )}
                >
                    <Link
                        onMouseOver={() => {
                            displayRef.current?.block();
                        }}
                        to={'gio-hang'}
                        className={cx('icon-bag')}
                    >
                        <div className={cx('number-of-product')}>
                            <span>{number}</span>
                        </div>
                        <FontAwesomeIcon className={cx('icon-bag__icon')} icon={faBagShopping} />
                    </Link>
                </Tippy>
                {isShow && (
                    <Default
                        setAgree={setAgree}
                        setIsShow={setIsShow}
                        setIsPath={setIsPath}
                        title={'Xoa san pham'}
                        message="ban co chac muon xoa san pham nay khoi gio hang"
                    />
                )}
            </div>
            <div>
                <Tippy
                    // visible
                    // hideOnClick={false}
                    interactive
                    offset={[15, 15]}
                    placement="bottom-end"
                    interactiveBorder={0}
                    render={(attrs) => (
                        <Render classNames={cx('tippy-search')} attrs={attrs}>
                            <Search />
                        </Render>
                    )}
                >
                    <button className={cx('icon-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </Tippy>
            </div>
        </div>
    );
}

export default Tool;
