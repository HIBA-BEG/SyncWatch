import { useNavigate } from 'react-router-dom';
import movieNight from '../assets/undraw_movie_night_re_9umk.svg'
import { FaCirclePause } from "react-icons/fa6";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
            <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:p-12">
                <div className="w-full">
                    <div className="bg-white/10 flex flex-row justify-between items-center backdrop-blur-md rounded-lg p-8 md:p-12 shadow-lg border border-white/20">
                        <div className="flex flex-col items-center justify-center">
                            <img src={movieNight} alt="Movie Night" className="w-full h-full float-animation" />
                            <div className="text-center mb-12">
                                <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                                    Watch <span className="text-primary">M3aya</span>
                                </h1>
                                <p className="text-2xl md:text-3xl text-white/80 mb-8">
                                    Never Watch Alone Again
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 mb-12">
                                    <button
                                        onClick={() => navigate('/register')}
                                        className="px-8 py-3 text-xl rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transform hover:scale-105 transition-all duration-200"
                                    >
                                        Get Started
                                    </button>
                                    <button
                                        onClick={() => navigate('/login')}
                                        className="px-8 py-3 text-xl rounded-full bg-white/10 text-white shadow-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-200"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-1/3 gap-8">
                            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-200">
                                <div className="text-4xl mb-4">🎬</div>
                                <h3 className="text-xl font-bold text-white mb-2">Watch Together</h3>
                                <p className="text-white/70">
                                    Synchronize your viewing experience with friends and family in real-time
                                </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-200">
                                <div className="text-4xl mb-4">💭</div>
                                <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                                <p className="text-white/70">
                                    Share reactions and comments while watching your favorite content
                                </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-200">
                                <div className="text-4xl mb-4"><FaCirclePause /></div>
                                <h3 className="text-xl font-bold text-white mb-2">Perfect Sync</h3>
                                <p className="text-white/70">
                                    Advanced synchronization keeps everyone on the same frame
                                </p>
                            </div>
                        </div>

                        {/* <div className="mt-12 text-center">
                            <div className="flex justify-center items-center gap-8 flex-wrap">
                                <div className="text-white/80">
                                    <div className="text-3xl font-bold">1000+</div>
                                    <div className="text-sm">Active Users</div>
                                </div>
                                <div className="text-white/80">
                                    <div className="text-3xl font-bold">5000+</div>
                                    <div className="text-sm">Watch Parties</div>
                                </div>
                                <div className="text-white/80">
                                    <div className="text-3xl font-bold">10k+</div>
                                    <div className="text-sm">Hours Watched</div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;