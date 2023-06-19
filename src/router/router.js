// import Home from '~/Component/page/home';
import { lazy } from 'react';
const CreateAccount = lazy(() => import('~/Component/pageManager/createAccount'));
const SeeOrder = lazy(() => import('~/Component/pageEmployee/seeOrder'));
const Payment = lazy(() => import('~/Component/page/payment'));
const Home = lazy(() => import('~/Component/page/home'));

const Introduct = lazy(() => import('~/Component/page/introduction'));
const Contact = lazy(() => import('~/Component/page/contact'));
const Brand = lazy(() => import('~/Component/page/brand'));
const Collection = lazy(() => import('~/Component/page/collection'));
const Store = lazy(() => import('~/Component/page/store'));
const Cart = lazy(() => import('~/Component/page/cart'));
const Product = lazy(() => import('~/Component/page/product'));
const Login = lazy(() => import('~/Component/page/login'));
const Register = lazy(() => import('~/Component/page/register'));
const updateInfoOfUser = lazy(() => import('~/Component/page/updateInfoOfUser'));
const UploadProduct = lazy(() => import('~/Component/page/uploadProduct'));
const DisableAccount = lazy(() => import('~/Component/page/disableAccount'));
const ChangePassword = lazy(() => import('~/Component/page/changePassword'));

export const layoutPrivate = [
    {
        element: Cart,
        path: '/gio-hang',
    },
    {
        element: Payment,
        path: '/thanh-toan',
    },
    {
        element: updateInfoOfUser,
        path: '/cap-nhat-thong-tin',
    },
    {
        element: ChangePassword,
        path: '/doi-mat-khau',
    },
];

export const layout_employee_manager = [
    {
        element: UploadProduct,
        path: '/upload-product',
    },
    {
        element: SeeOrder,
        path: '/see-order',
    },
];

export const layoutManager = [
    {
        element: CreateAccount,
        path: 'tao-tai-khoan',
    },
    {
        element: DisableAccount,
        path: 'vo-hieu-hoa-tai-khoan',
    },
];

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
    },
];
export const layoutAccount = [
    {
        element: Login,
        path: 'login',
    },
    {
        element: Register,
        path: 'register',
    },
];
