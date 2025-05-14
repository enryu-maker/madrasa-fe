import axios from "axios";
import axiosIns, { baseURL } from "../../helper/Helper";
import { toast } from "react-toastify";


export const getProfile = (setLoading) => {
    return async (dispatch) => {
        try {
            await axiosIns.get(baseURL + '/v1/admin/madarasa-profile')
                .then((res) => {
                    dispatch({
                        type: "SET_MADRASA",
                        payload: res.data
                    })
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

export const getCourses = (setLoading) => {
    return async (dispatch) => {
        try {
            await axiosIns.get(baseURL + '/v1/courses/get-course')
                .then((res) => {
                    dispatch({
                        type: "GET_COURSES",
                        payload: res.data
                    })
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

export const createCourse = (data, setLoading, setShow) => {
    return async (dispatch) => {
        try {
            await axiosIns.post(baseURL + '/v1/courses/create-course', data)
                .then((res) => {
                    toast.success(res?.data?.message || "Something went wrong!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    dispatch(getCourses(setLoading))
                    setLoading(false);
                    setShow(false)
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

export const getStudent = (setLoading) => {
    return async (dispatch) => {
        try {
            await axiosIns.get(baseURL + '/v1/student/get-student')
                .then((res) => {
                    dispatch({
                        type: "GET_STUDENT",
                        payload: res.data
                    })
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

export const createStudent = (data, setLoading, setShow) => {
    return async (dispatch) => {
        try {
            await axiosIns.post(baseURL + '/v1/student/create-student', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    toast.success(res?.data?.message || "Student created successfully!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    dispatch(getStudent(setLoading));
                    setLoading(false);
                    setShow(false);
                })
                .catch((err) => {
                    console.error(err);
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
            console.error(error);
            toast.error(error?.response?.data?.message || "An error occurred during creation.", {
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


export const getFees = (setLoading) => {
    return async (dispatch) => {
        try {
            await axiosIns.get(baseURL + '/v1/fees/get-fees')
                .then((res) => {
                    dispatch({
                        type: "GET_FEES",
                        payload: res.data
                    })
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

export const updateFees = (data, setLoading, setShow) => {
    return async (dispatch) => {
        try {
            await axiosIns.post(baseURL + '/v1/fees/update-fees', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    toast.success(res?.data?.message || "Student created successfully!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    dispatch(getFees(setLoading));
                    setLoading(false);
                    setShow(false);
                })
                .catch((err) => {
                    console.error(err);
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
            console.error(error);
            toast.error(error?.response?.data?.message || "An error occurred during creation.", {
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

export const addreport = (data, setLoading, setShow) => {
    return async (dispatch) => {
        try {
            await axiosIns.post(baseURL + '/v1/student/add-report', data)
                .then((res) => {
                    toast.success(res?.data?.message || "Student Report added successfully!", {
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
                    setShow(false);
                })
                .catch((err) => {
                    console.error(err);
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
            console.error(error);
            toast.error(error?.response?.data?.message || "An error occurred during creation.", {
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
    }
}

export const getTeacher = (setLoading) => {
    return async (dispatch) => {
        try {
            await axiosIns.get(baseURL + '/v1/admin/get-teacher')
                .then((res) => {
                    dispatch({
                        type: "GET_TEACHER",
                        payload: res.data
                    })
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

export const createTeacher = (data, setLoading, setShow) => {
    return async (dispatch) => {
        try {
            await axiosIns.post(baseURL + '/v1/admin/add-teacher', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    toast.success(res?.data?.message || "Teacher created successfully!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    dispatch(getTeacher(setLoading));
                    setLoading(false);
                    setShow(false);
                })
                .catch((err) => {
                    console.error(err);
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
            console.error(error);
            toast.error(error?.response?.data?.message || "An error occurred during creation.", {
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
