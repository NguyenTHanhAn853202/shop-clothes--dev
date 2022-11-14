import FormLogin from "~/formLogin";

function Login() {
    return (
        <FormLogin
            title="ĐĂNG NHẬP"
            titleAccount="Nhập tên đăng nhập hoặc đọa chỉ email *"
            titlePassword="Mật khẩu *"
            placeholder=""
            type="text"
            titleButton="Đăng nhập"
            typeBtn="submit"
            checkbox={true}
        />
    );
}

export default Login;
