import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { image } from '../../../assets/Image';
import { TailSpin } from 'react-loader-spinner';
import { createStudent } from '../../../store/actions/homeAction';

export default function AddStudents({ setShow }) {
    const [data, setData] = React.useState({
        name: "",
        dob: "",
        doa: "",
        mobile_number: "",
        adhar_card: "",
        father_name: "",
        mother_name: "",
        photo: null,
        address: "",
        course_id: ""
    });

    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select Course');

    const dispatch = useDispatch();

    const modalVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
    };
    const courses = useSelector(state => state.reducer.courses)
    const handleSelect = (option) => {
        console.log(option)
        setData({ ...data, course_id: option.id });
        setSelectedOption(option.name)
        setIsOpen(false);
    };
    const handleToggle = () => setIsOpen(!isOpen);
    return (
        <motion.div
            className="fixed inset-0 flex justify-end items-center w-screen h-screen z-[1000] bg-black/25 font-Poppins"
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div
                className="w-[75%] h-screen bg-white shadow-xl flex flex-col px-8 py-6 relative overflow-y-auto"
                variants={modalVariants}
            >
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4">
                    <h1 className="text-2xl font-semibold text-gray-800">Add New Student</h1>
                    <button onClick={() => setShow(false)}>
                        <img className="h-7 w-7" src={image.close} alt="Close" />
                    </button>
                </div>

                {/* Photo Upload */}
                <div className="mt-2">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">Student Photo</h2>
                    <div className="flex items-center">
                        <label htmlFor="photo-upload" className="cursor-pointer">
                            <div className="w-[150px] h-[180px] bg-gray-100 border border-gray-300 flex items-center justify-center rounded hover:opacity-80 transition">
                                {data.photo ? (
                                    <img
                                        src={URL.createObjectURL(data.photo)}
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
                            onChange={(e) => setData({ ...data, photo: e.target.files[0] })}
                            className="hidden"
                        />
                    </div>
                </div>

                {/* Personal Info */}
                {/* Personal Info */}
                <div className="mt-2">
                    <h2 className="text-lg font-medium text-gray-700 mb-4">Personal Information</h2>
                    <div className="flex flex-wrap  gap-x-4 gap-y-4">
                        {[
                            { label: "Name", key: "name", type: "text", placeholder: "Full Name" },
                            { label: "Date of Birth", key: "dob", type: "date" },
                            { label: "Mobile", key: "mobile_number", type: "tel", placeholder: "Mobile Number" },
                            { label: "Aadhar Number", key: "adhar_card", type: "number", placeholder: "Aadhar Number" },
                            { label: "Father Name", key: "father_name", type: "text", placeholder: "Father Name" },
                            { label: "Mother Name", key: "mother_name", type: "text", placeholder: "Mother Name" },
                            { label: "Date of Admission", key: "doa", type: "date" },
                        ].map(({ label, key, type, placeholder }) => (
                            <div key={key} className="w-[32%] flex flex-col">
                                <label className="text-sm text-gray-700 mb-1 font-medium">
                                    {label} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type={type}
                                    value={data[key]}
                                    onChange={(e) => setData({ ...data, [key]: e.target.value })}
                                    placeholder={placeholder}
                                    className="h-11 w-full border border-gray-300 px-3 rounded-lg bg-white text-gray-800 focus:ring-2 ring-primary focus:outline-none transition"
                                    required
                                />
                            </div>
                        ))}
                        <div className="relative w-[32%]">
                            <label className="text-sm text-gray-700 font-medium">
                                Select Course <span className="text-red-500">*</span>
                            </label>
                            <button
                                onClick={handleToggle}
                                className="h-11 w-full border flex justify-between items-center border-gray-300 px-3 rounded-lg bg-white text-gray-800 focus:ring-2 ring-primary focus:outline-none transition"
                            >
                                <span>{selectedOption}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            {isOpen && (
                                <div className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-10">
                                    {courses?.data?.map((option, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleSelect(option)}
                                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {option.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                </div>


                {/* Address */}
                <div className="mt-2">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">Address</h2>
                    <textarea
                        id="address"
                        rows="3"
                        value={data.address}
                        onChange={(e) => setData({ ...data, address: e.target.value })}
                        className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-white text-gray-800 focus:ring-2 ring-primary focus:outline-none resize-none"
                        placeholder="Full Address"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-3 flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => {
                            const formData = new FormData();

                            Object.entries(data).forEach(([key, value]) => {
                                if (value !== null && value !== undefined) {
                                    formData.append(key, value);
                                }
                            });
                            dispatch(createStudent(formData, setLoading, setShow))
                        }}
                        className="bg-primary hover:bg-gray-900 h-10 px-6 text-white flex justify-center items-center text-sm md:text-base font-medium transition"
                    >
                        {loading ? (
                            <TailSpin height={20} width={20} color="#fff" />
                        ) : (
                            'Save'
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            window.print(); // Replace with custom print logic if needed
                        }}
                        className="bg-white border border-primary text-primary hover:bg-primary hover:text-white h-10 px-6 flex justify-center items-center text-sm md:text-base font-medium transition"
                    >
                        Print
                    </button>
                </div>

            </motion.div>
        </motion.div>
    );
}
