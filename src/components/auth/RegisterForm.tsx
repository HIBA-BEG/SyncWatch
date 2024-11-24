import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full max-w-md">
            <div className="bg-white/30 backdrop-blur-md rounded-lg px-8 py-10 drop-shadow-2xl border border-white/20">
                <h2 className="text-center text-5xl  tracking-tight text-white mb-8">
                    Create an Account
                </h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                                <label htmlFor="firstName" className="block text-xl text-white">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                className="mt-1 block w-full rounded-full bg-white  drop-shadow-2xl border-0 px-3 py-2 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block  text-xl text-white">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                className="mt-1 block w-full rounded-full bg-white  drop-shadow-2xl border-0 px-3 py-2 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-xl text-white">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            className="mt-1 block w-full rounded-full bg-white  drop-shadow-2xl border-0 px-3 py-2 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
                            placeholder="Choose a username"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-xl text-white">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="mt-1 block w-full rounded-full bg-white  drop-shadow-2xl border-0 px-3 py-2 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-xl text-white">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="mt-1 block w-full rounded-full bg-white  drop-shadow-2xl border-0 px-3 py-2 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
                            placeholder="Create a password"
                        />
                    </div>
                    <div className="flex justify-end">
                        <span className="text-white">Already have an account? </span>
                        <div
                            onClick={() => navigate('/login')}
                            className="text-primary hover:text-primary-dark font-medium cursor-pointer"
                        >
                            Sign in
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="flex justify-center text-2xl rounded-full bg-primary px-3 py-2 text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
