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
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Tool() {
    const [isPath, setIsPath] = useState(true);
    const location = useLocation();
    useEffect(() => {
        // nếu đang ở trang giỏ hàng thì sẻ k suất hiện tippy khi hover
        setIsPath((props) => {
            return location.pathname === '/gio-hang' ? false : true;
        });
    }, [location.pathname]);

    return (
        <div className={cx('wrapper')}>
            <div>
                <Tippy
                    offset={[15, 15]}
                    interactive
                    // visible
                    // hideOnClick={false}
                    placement="bottom-end"
                    interactiveBorder={0}
                    render={(attrs) => (
                        <div>
                            {isPath && (
                                <Render attrs={attrs}>
                                    <Bag />
                                </Render>
                            )}
                        </div>
                    )}
                >
                    <Link to={'gio-hang'} className={cx('icon-bag')}>
                        <FontAwesomeIcon icon={faBagShopping} />
                    </Link>
                </Tippy>
            </div>
            <div>
                <Tippy
                    // visible
                    hideOnClick={false}
                    interactive
                    offset={[15, 15]}
                    placement="bottom-end"
                    interactiveBorder={0}
                    render={(attrs) => (
                        <Render attrs={attrs}>
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
