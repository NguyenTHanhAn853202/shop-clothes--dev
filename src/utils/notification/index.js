import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const attr = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
};

export const notify = (type, title, ...features) => {
    const typeLower = type.toLowerCase();
    switch (typeLower) {
        case 'success':
            return toast.success(title, {
                ...attr,
                ...features,
            });

        case 'warning':
            return toast.warn(title, {
                ...attr,
                ...features,
            });

        case 'error':
            return toast.error(title, {
                ...attr,
                ...features,
            });
        case 'info':
            return toast.info(title, {
                ...attr,
                ...features,
            });
        default:
            return toast(title, {
                ...attr,
                ...features,
            });
    }
};

function NotifyContainer({ ...props }) {
    return <ToastContainer style={{zIndex:'9999999'}} {...props} />;
}

export default NotifyContainer;
