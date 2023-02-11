const { faEnvelope, faCopyright } = require('@fortawesome/free-regular-svg-icons');
const { faLocationDot, faPhone } = require('@fortawesome/free-solid-svg-icons');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');

export const contactAt = [
    {
        title: 'Đội 2, Linh An, Triệu Trạch, Triệu Phong, Quảng Trị',
        icon: <FontAwesomeIcon icon={faLocationDot} />,
    },
    {
        title: '0387667382',
        icon: <FontAwesomeIcon icon={faPhone} />,
    },
    {
        title: 'nguyenthanhanqt@gmail.com',
        icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
    {
        title: 'shopOfAn',
        icon: <FontAwesomeIcon icon={faCopyright} />,
    },
];
