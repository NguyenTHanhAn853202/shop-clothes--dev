import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const functions = [
    {
        name: 'Giới thiệu',
        path: '/gioi-thieu',
        more: false,
        icon: false,
    },
    {
        name: 'Liên hệ',
        path: '/lien-he',
        more: false,
        icon: false,
    },
    {
        name: 'Thương hiệu',
        path: '/thuong-hieu',
        more: false,
        icon: false,
    },
    {
        name: 'Tin tức &Sự kiện',
        path: '/tin-tuc-su-kien',
        more: false,
        icon: false,
    },
    {
        name: 'Bộ sưu tập',
        path: '/bo-suu-tap',
        more: false,
        icon: false,
    },
    {
        name: 'Cửu hàng',
        path: '/cua-hang',
        more: [
            {
                name:'Quần áo'
            },
            {
                name:'Túi xách & Balo'
            },
            {
                name:'Giày dép'
            },
            {
                name:'Phụ kiện & Trang sức'
            },
        ],
        icon: <FontAwesomeIcon icon={faAngleDown} />,
    },
];
