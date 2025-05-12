import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { image } from '../../assets/Image';
import { ParticlesComp } from '../../components/ParticlesComp';
import { useDispatch } from 'react-redux';
import { madarasaLogin } from '../../store/actions/authAction';
// import { loginAction } from '../../actions/authActions'; // Example import

export default function Login() {
    const [data, setData] = React.useState({
        email: '',
        password: ''
    });

    const [loading, setLoading] = React.useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>

            <div className=" min-h-screen w-full flex justify-center items-center font-Poppins p-4 overflow-hidden">
                <ParticlesComp />
                <div className=" z-10 w-full max-w-sm md:max-w-md h-[500px] md:h-[550px] bg-white backdrop-blur-md flex flex-col justify-center items-center p-6 md:p-10 space-y-6 font-Poppins">
                    <div className="flex justify-center items-center space-x-3">
                        <img
                            src={image.logo}
                            alt="Logo"
                            className="h-12 w-12 md:h-24 md:w-24 "
                        />
                        <h1 className="text-2xl md:text-3xl font-semibold text-logo">
                            AlMadrasa
                        </h1>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 text-center">
                        Madrasa Management portal
                    </p>

                    {/* Email */}
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="email" className="text-sm md:text-base">
                            Email address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                            placeholder="Email address*"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="w-full space-y-1">
                        <label htmlFor="password" className="text-sm md:text-base">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                            placeholder="Password*"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(madarasaLogin(data, setLoading, navigate));
                        }}
                        className="bg-primary hover:bg-gray-900 h-12 w-full text-white flex justify-center items-center text-sm md:text-base rounded transition"
                    >
                        {loading ? (
                            <TailSpin
                                visible={true}
                                height={20}
                                width={20}
                                color="#fff"
                                ariaLabel="tail-spin-loading"
                            />
                        ) : (
                            'Login'
                        )}
                    </button>
                </div>
            </div>
        </>
    );
}
