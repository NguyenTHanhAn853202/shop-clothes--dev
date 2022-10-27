import Home from '~/Component/page/home';
import Introduct from '~/Component/page/introduction';
import Contact from '~/Component/page/contact';
import Brand from '~/Component/page/brand';
import Collection from '~/Component/page/collection';
import Store from '~/Component/page/store';
const layout = [
    {
        element: Home,
        path: '/',
    },
    {
        element: Introduct,
        path: '/gioi-thieu',
    },
    {
        element: Contact,
        path: '/lien-he',
    },
    {
        element: Brand,
        path: '/thuong-hieu',
    },
    {
        element: Collection,
        path: '/bo-suu-tap',
    },
    {
        element: Store,
        path: '/cua-hang',
        slug:true
    },
];

export default layout;
