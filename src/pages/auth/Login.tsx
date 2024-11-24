import LoginForm from '../../components/auth/LoginForm';
const Login = () => {
    return (
        <>
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
            <div className="fixed inset-0 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <LoginForm />
            </div>
        </>
    );
};

export default Login;
