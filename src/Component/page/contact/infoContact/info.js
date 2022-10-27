const { faEnvelope, faCopyright } = require("@fortawesome/free-regular-svg-icons");
const { faLocationDot, faPhone } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

export const contactAt = [
    {
        title: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM',
        icon:<FontAwesomeIcon icon={faLocationDot} />
    },
    {
        title: '0387667382',
        icon:<FontAwesomeIcon icon={faPhone} />
    },
    {
        title: 'nguyenthanhanqt@gmail.com',
        icon:<FontAwesomeIcon icon={faEnvelope} />
    },
    {
        title: 'demoshop',
        icon:<FontAwesomeIcon icon={faCopyright} />
    }
]
