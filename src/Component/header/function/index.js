import { functions as func } from './functions';
import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Fragment } from 'react';
import Render from '~/renderTippy';
import { handleSlug } from '~/handleSlug';

const cx = classNames.bind(styles);
function Func() {
    return (
        <div className={cx('wrapper')}>
            {func.map((item, index) => {
                let Wrap = Fragment;
                let more = [];
                if (item.more) {
                    Wrap = Tippy;
                    more = [...item.more];
                }
                const _props = item.more
                    ? {
                          interactive: true,
                          offset: [-10, 15],
                        //   visible: true,
                          placement: 'bottom-start',
                          render: (attrs) => (
                              <Render attrs={attrs}>
                                  <div className={cx('more')}>
                                      {more.map((item, index) => {
                                          const slug = handleSlug(item.name);
                                          return (
                                              <Link to={`cua-hang/${slug}`} key={index} className={cx('more-name')}>
                                                  {item.name}
                                              </Link>
                                          );
                                      })}
                                  </div>
                              </Render>
                          ),
                      }
                    : {};

                return (
                    <Wrap {..._props} key={index}>
                        <NavLink className={(nav) => cx('name-page', { active: nav.isActive })} to={item.path}>
                            {item.name}
                            {item.icon && <span className={cx('icon')}>{item.icon}</span>}
                        </NavLink>
                    </Wrap>
                );
            })}
        </div>
    );
}

export default Func;
