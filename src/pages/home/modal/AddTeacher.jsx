import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { image } from '../../../assets/Image';
import { TailSpin } from 'react-loader-spinner';
import { createTeacher, updateFees } from '../../../store/actions/homeAction';

export default function AddTeacher({
    setShow,
}) {
    const [data, setData] = React.useState({
        "name": "",
        "qualification": "",
        "date_of_joining": "",
        "salary": "",
        "year_of_experience": "",
        "icon": "",
    })

    const [loading, setLoading] = React.useState(false);
    const dispatch = useDispatch();

    const modalVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
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
                    <h1 className="text-2xl font-semibold text-gray-800">Add Teacher</h1>
                    <button onClick={() => setShow(false)}>
                        <img className="h-7 w-7" src={image.close} alt="Close" />
                    </button>
                </div>
                <div className="mt-2">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">Teacher Photo</h2>
                    <div className="flex items-center">
                        <label htmlFor="photo-upload" className="cursor-pointer">
                            <div className="w-[150px] h-[180px] bg-gray-100 border border-gray-300 flex items-center justify-center rounded hover:opacity-80 transition">
                                {data.icon ? (
                                    <img
                                        src={URL.createObjectURL(data.icon)}
                                        alt="Student"
                                        className="h-full w-full object-cover rounded"
                                    />
                                ) : (
                                    <span className="text-sm text-gray-500">Click to Upload</span>
                                )}
                            </div>
                        </label>
                        <input
                            id="photo-upload"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setData({ ...data, icon: e.target.files[0] })}
                            className="hidden"
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="name" className="text-sm md:text-base">
                            Teacher Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                            required
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="qualification" className="text-sm md:text-base">
                            Qualification <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="qualification"
                            value={data.qualification}
                            onChange={(e) => setData({ ...data, qualification: e.target.value })}
                            className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                            required
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="doj" className="text-sm md:text-base">
                            Date of Joining <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="doj"
                            value={data.date_of_joining}
                            onChange={(e) => setData({ ...data, date_of_joining: e.target.value })}
                            className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                            required
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="salary" className="text-sm md:text-base">
                            Salary <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="salary"
                            value={data.salary}
                            onChange={(e) => setData({ ...data, salary: e.target.value })}
                            className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                            required
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="year_of_experience" className="text-sm md:text-base">
                            Year of Experience <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="year_of_experience"
                            value={data.year_of_experience}
                            onChange={(e) => setData({ ...data, year_of_experience: e.target.value })}
                            className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                            required
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => {
                            const formData = new FormData();
                            Object.entries(data).forEach(([key, value]) => {
                                if (value !== null && value !== undefined) {
                                    formData.append(key, value);
                                }
                            });
                            dispatch(createTeacher(formData, setLoading, setShow))
                        }}
                        className="bg-primary hover:bg-gray-900 h-10 px-6 text-white flex justify-center items-center text-sm md:text-base font-medium transition"
                    >
                        {loading ? (
                            <TailSpin height={20} width={20} color="#fff" />
                        ) : (
                            'Save'
                        )}
                    </button>

                </div>
            </motion.div>

        </motion.div >
    )
}
