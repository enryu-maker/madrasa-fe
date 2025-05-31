import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { image } from '../../../assets/Image';
import { TailSpin } from 'react-loader-spinner';
import { updateCourse, deleteCourse } from '../../../store/actions/homeAction';
// import { createCourse, updateCourse, deleteCourse } from '../../../store/actions/homeAction';

export default function AddOrEditCourse({ setShow, selectedCourse = null }) {
    const [data, setData] = useState({
        name: '',
        description: '',
        fee: '',
    });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedCourse) {
            setData({
                name: selectedCourse.name || '',
                description: selectedCourse.description || '',
                fee: selectedCourse.fee || '',
            });
        }
    }, [selectedCourse]);

    const modalVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
    };

    const handleSubmit = () => {
        if (selectedCourse) {
            dispatch(updateCourse(selectedCourse.id, data, setLoading, setShow));
        }
    };

    const handleDelete = () => {
        if (selectedCourse && window.confirm('Are you sure you want to delete this course?')) {
            dispatch(deleteCourse(selectedCourse.id, setLoading, setShow));
        }
    };

    return (
        <motion.div
            className="fixed inset-0 flex justify-end items-center w-screen h-screen z-[1000] bg-black/25 font-Poppins"
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div
                className="w-[35%] h-screen bg-white shadow-xl flex flex-col px-8 py-6 relative overflow-y-auto"
                variants={modalVariants}
            >
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        {selectedCourse ? 'Edit Course' : 'Add Course'}
                    </h1>
                    <button onClick={() => setShow(false)}>
                        <img className="h-7 w-7" src={image.close} alt="Close" />
                    </button>
                </div>

                {/* Form Fields */}
                <div className="mt-2">
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="name" className="text-sm md:text-base">
                            Course Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                        />
                    </div>
                </div>

                <div className="mt-2">
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="description" className="text-sm md:text-base">
                            Course Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="description"
                            value={data.description}
                            onChange={(e) => setData({ ...data, description: e.target.value })}
                            className="h-24 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                        />
                    </div>
                </div>

                <div className="mt-2">
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="fee" className="text-sm md:text-base">
                            Course Fee <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="fee"
                            value={data.fee}
                            onChange={(e) => setData({ ...data, fee: e.target.value })}
                            className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex justify-end items-center">
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="bg-primary hover:bg-gray-900 h-10 px-6 text-white flex justify-center items-center text-sm md:text-base font-medium transition"
                        >
                            {loading ? (
                                <TailSpin height={20} width={20} color="#fff" />
                            ) : (
                                selectedCourse ? 'Update' : 'Save'
                            )}
                        </button>

                        {selectedCourse && (
                            <button
                                type="button"
                                onClick={handleDelete}
                                className="bg-white border border-red-500 text-red-500 hover:bg-red-500 hover:text-white h-10 px-6 flex justify-center items-center text-sm md:text-base font-medium transition"
                            >
                                Delete
                            </button>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
