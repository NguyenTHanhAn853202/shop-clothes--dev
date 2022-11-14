import FormLogin from "~/formLogin";

function Register() {
    return ( <FormLogin
        title="ĐĂNG KÝ"
        titleAccount="Địa chỉ email *"
        titlePassword="Mật khẩu *"
        placeholder=""
        type="text"
        titleButton="Đăng ký"
    />);
}

export default Register;