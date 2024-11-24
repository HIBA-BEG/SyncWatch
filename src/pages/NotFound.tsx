const NotFound = () => {
    return (
        <>
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
            <div className="fixed inset-0 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg px-8 py-10 shadow-lg border border-white/20 text-center">
                        <div className="flex flex-col justify-center items-center mb-4">

                            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
                            <div className="bg-[#F56B69] px-2 text-lg rounded rotate-12 absolute">
                                Page Not Found
                            </div>
                        </div>
                        <p className="text-white/80 mb-8">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                        <button
                            onClick={() => window.history.back()}
                            className="mr-4 px-6 py-2 text-lg rounded-full bg-primary text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
                        >
                            Go Back
                        </button>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="px-6 py-2 text-lg rounded-full bg-white/10 text-white shadow-sm hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 transition-colors duration-200"
                        >
                            Home
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;