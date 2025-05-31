import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { image } from '../../../assets/Image';
import { TailSpin } from 'react-loader-spinner';
import { deleteTeacher, updateTeacher } from '../../../store/actions/homeAction';
// import { createTeacher, updateTeacher } from '../../../store/actions/homeAction';

export default function AddOrEditTeacher({ setShow, editData = null }) {
    const [data, setData] = useState({
        name: '',
        qualification: '',
        date_of_joining: '',
        salary: '',
        year_of_experience: '',
        icon: ''
    });

    console.log('Edit Data:', editData);

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (editData) setData({ ...editData, icon: '' }); // Don’t preload icon
    }, [editData]);

    const handleSubmit = () => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (value !== null && value !== undefined && value !== '') {
                formData.append(key, value);
            }
        });

        if (editData && editData.id) {
            dispatch(updateTeacher(editData.id, formData, setLoading, setShow));
        }
    };

    const handleDelete = () => {
        if (editData && window.confirm('Are you sure you want to delete this teacher?')) {
            dispatch(deleteTeacher(editData.id, setLoading, setShow));
        }
    };

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
                    <h1 className="text-2xl font-semibold text-gray-800">{editData ? 'Edit' : 'Add'} Teacher</h1>
                    <button onClick={() => setShow(false)}>
                        <img className="h-7 w-7" src={image.close} alt="Close" />
                    </button>
                </div>

                {/* Upload Photo */}
                <div className="mt-2">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">Teacher Photo</h2>
                    <label htmlFor="photo-upload" className="cursor-pointer">
                        <div className="w-[150px] h-[180px] bg-gray-100 border border-gray-300 flex items-center justify-center rounded hover:opacity-80 transition">
                            {data.icon ? (
                                <img src={URL.createObjectURL(data.icon)} alt="Teacher" className="h-full w-full object-cover rounded" />
                            ) : (
                                <img src={`data:image/png;base64,${editData.photo_base64}`} alt="Teacher" className="h-full w-full object-cover rounded" />
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

                {/* Input Fields */}
                {['name', 'qualification', 'date_of_joining', 'salary', 'year_of_experience'].map((field, index) => (
                    <div className="mt-2" key={index}>
                        <div className="w-full space-y-1 font-Poppins">
                            <label htmlFor={field} className="text-sm md:text-base capitalize">
                                {field.replace(/_/g, ' ')} <span className="text-red-500">*</span>
                            </label>
                            <input
                                type={field === 'date_of_joining' ? 'date' : field === 'salary' || field === 'year_of_experience' ? 'number' : 'text'}
                                id={field}
                                value={data[field]}
                                onChange={(e) => setData({ ...data, [field]: e.target.value })}
                                className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                                required
                            />
                        </div>
                    </div>
                ))}

                {/* Save Button */}
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="bg-primary hover:bg-gray-900 h-10 px-6 text-white flex justify-center items-center text-sm md:text-base font-medium transition"
                    >
                        {loading ? <TailSpin height={20} width={20} color="#fff" /> : 'Update Teacher'}
                    </button>
                    <button type="button" onClick={handleDelete} className="bg-white border border-red-500 text-red-500 hover:bg-red-500 hover:text-white h-10 px-6 flex justify-center items-center text-sm md:text-base font-medium transition">
                        Delete
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}
