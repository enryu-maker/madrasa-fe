import axios from "axios";
import axiosIns, { baseURL } from "../../helper/Helper";
import { toast } from "react-toastify";

export const Init = () => {
    return async dispatch => {
        try {
            let access = await localStorage.getItem('access');
            console.log(access)
            dispatch({
                type: 'SET_ACCESS',
                payload: access,
            });
        } catch (error) {
            dispatch({
                type: 'SET_ACCESS',
                payload: null,
            });
        }
    };
};


export const madarasaLogin = (data, setLoading, navigate) => {

    return async (dispatch) => {
        try {
            await axios.post(baseURL + '/v1/admin/madarasa-login', data)
                .then((res) => {
                    toast.success(res?.data?.message || "Authentication done Successfully", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    console.log(res.data)
                    localStorage.setItem('access', res?.data?.access_token)
                    navigate("/dashboard")
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err?.response?.data?.message || "Something went wrong!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setLoading(false);
                });
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "An error occurred during login.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        }
    };
};