import RegisterForm from '../../components/auth//RegisterForm';
const Register = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />

      <div
        className="fixed inset-0 min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <RegisterForm />
      </div>
    </>
  );
};
export default Register;
