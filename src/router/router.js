// import Home from '~/Component/page/home';
import { lazy } from 'react';
const Home = lazy(() => import('~/Component/page/home'));

const Introduct = lazy(() => import('~/Component/page/introduction'));
const Contact = lazy(() => import('~/Component/page/contact'));
const Brand = lazy(() => import('~/Component/page/brand'));
const Collection = lazy(() => import('~/Component/page/collection'));
const Store = lazy(() => import('~/Component/page/store'));
const Cart = lazy(() => import('~/Component/page/cart'));
const Product = lazy(() => import('~/Component/page/product'));
const Login = lazy(() => import('~/Component/page/login'))
const Register = lazy(() => import('~/Component/page/register'))
// import Home from '~/Component/page/home';
// import Product from '~/Component/page/product';
// import Cart from '~/Component/page/cart';
// import Store from '~/Component/page/store';
// import Collection from '~/Component/page/collection';
// import Brand from '~/Component/page/brand';
// import Contact from '~/Component/page/contact';
// import Introduct from '~/Component/page/introduction';

export const layoutPrivate=[
    {
        element: Cart,
        path: '/gio-hang',
    },
]

export const layoutPublic = [
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
        slug: true,
    },
    
    {
        element: undefined,
        path: '/tin-tuc-su-kien',
    },
    {
        element: Product,
        path: '/san-pham',
        slug: true,
    }

];
export const layoutAccount = [
    {
        element:Login,
        path:'login',
    },
    {
        element:Register,
        path:'register',
    }
]

