import styles from './updateInfoOfUser.module.scss';
import classNames from 'classnames/bind';
import Button from '~/button';
import Input from '~/Input';
import DatePicker from 'react-date-picker';
import { createRef, useMemo, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'universal-cookie';
import { updateInfoOfUser } from '~/api-server/updateInfoOfUser';
import Loading from '~/utils/loading';
import NotifyContainer, { notify } from '~/utils/notification';

const cx = classNames.bind(styles);

const cookies = new Cookies();
const listInput = [
    { name: 'name', defaultValue: cookies.get('name'), placeholder: 'Họ và tên', type: 'text' },
    { name: 'phoneNumber', defaultValue: cookies.get('phoneNumber'), placeholder: 'Số điện thoại', type: 'text' },
    { name: 'address', defaultValue: cookies.get('address'), placeholder: 'Địa chỉ', type: 'text' },
    { name: 'email', defaultValue: cookies.get('email'), placeholder: 'Email', type: 'email' },
];

function UpdateInfoOfUser() {
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const imgRef = useRef();
    const sexRef = useRef();
    const newDateBirthday = cookies.get('birthday') ? new Date(cookies.get('birthday')) : new Date();
    const [birthday, setBirthday] = useState(newDateBirthday);
    const [file, setFile] = useState();
    const refInputs = useMemo(() => {
        const refs = [];
        listInput.forEach((item, index) => {
            refs[index] = createRef(null);
        });
        return refs;
    }, []);
    const handlChangeAvatar = (e) => {
        const avatar = e.target.files[0];
        imgRef.current.src = URL.createObjectURL(avatar);
        setFile(avatar);
    };
    const handleSubmit = async () => {
        setLoadingSubmit(true);
        const formData = new FormData();
        if (file) {
            formData.append('image', file);
        }
        refInputs.forEach((ref, i) => {
            const refCurrent = ref.current;
            const value = refCurrent.value;
            if (value) {
                const name = refCurrent.name;
                formData.append(name, value);
            }
        });
        if (birthday) {
            formData.append('birthday', birthday);
        }
        formData.append('id', localStorage.id);
        formData.append('sex', sexRef.current.value);
        const data = await updateInfoOfUser(formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        if (data && data.success) {
            setLoadingSubmit(false);
            notify('success', 'Cập nhật thành công');
        } else {
            setLoadingSubmit(false);
            notify('warning', 'Lỗi cập nhât, mời thử lại');
        }
    };

    return (
        <div className={cx('wrapper', { wrap: true })}>
            {loadingSubmit && <Loading fixed bigSize />}
            <NotifyContainer />
            <div className={cx('container', { grid: true })}>
                <div className={cx('informations', '')}>
                    <div>
                        {listInput.map((item, i) => (
                            <Input
                                key={i}
                                ref={refInputs[i]}
                                type={item.type}
                                name={item.name}
                                w100
                                defaultValue={item?.defaultValue || ''}
                                placeholder={item?.placeholder}
                            />
                        ))}
                        <div className={cx('contain-selection')}>
                            <DatePicker
                                className={cx('birthday')}
                                minDate={new Date('1900')}
                                maxDate={new Date(`${new Date().getFullYear() + 1}`)}
                                format="dd/MM/yyyy"
                                onChange={setBirthday}
                                value={birthday}
                            />
                            <select
                                defaultValue={(cookies.get('sex') || '').toLowerCase() === 'female' ? 'Female' : 'Male'}
                                ref={sexRef}
                            >
                                <option value="Male">Nam</option>
                                <option value="Female">Nữ</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={cx('image')}>
                    <div>
                        <input onChange={handlChangeAvatar} id={cx('file-upload')} type="file" />
                        <img ref={imgRef} src={cookies.get('avatar')} />
                        <label htmlFor={cx('file-upload')}>
                            <FontAwesomeIcon icon={faPencilAlt} />
                            <span>Chỉnh sữa </span>
                        </label>
                    </div>
                </div>
                <div className={cx('btn-comfirm')}>
                    <Button onClick={handleSubmit}>Xác nhận</Button>
                </div>
            </div>
        </div>
    );
}

export default UpdateInfoOfUser;
