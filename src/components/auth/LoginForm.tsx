import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full max-w-md">
            <div className="bg-white/30 backdrop-blur-md rounded-lg px-8 py-10 shadow-lg border border-white/20">
                <h2 className="text-center text-5xl  tracking-tight text-white mb-8">
                    Welcome Back!
                </h2>
                <form className="">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-xl text-white">
                            Email :
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="mt-1 block w-full rounded-full bg-white drop-shadow-2xl border-0 px-3 py-2 text-black placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-xl text-white">
                            Password :
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="mt-1 block w-full rounded-full bg-white drop-shadow-2xl border-0 px-3 py-2 text-black placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
                            placeholder="Enter your password"
                        />
                    </div>
                    </div>

                    <div className="text-lg mt-2 flex justify-end">
                        <span className="text-white">Be one of us only with few clicks, </span>
                        <div
                            onClick={() => navigate('/register')}
                            className="text-my-purple hover:text-primary-dark font-medium cursor-pointer"
                        >
                            here
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button
                            type="submit"
                            className="flex justify-center text-2xl rounded-full bg-primary px-3 py-2 text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
