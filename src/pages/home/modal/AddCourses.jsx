import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { image } from '../../../assets/Image';
import { TailSpin } from 'react-loader-spinner';
import { createCourse } from '../../../store/actions/homeAction';

export default function AddCourses({
    setShow
}) {
    const [data, setData] = React.useState({
        "name": "",
        "description": "",
        "fee": "",
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
                    <h1 className="text-2xl font-semibold text-gray-800">Add Course</h1>
                    <button onClick={() => setShow(false)}>
                        <img className="h-7 w-7" src={image.close} alt="Close" />
                    </button>
                </div>
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
                            required
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="description" className="text-sm md:text-base">
                            Course Desription <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            type="text"
                            id="description"
                            value={data.description}
                            onChange={(e) => setData({ ...data, description: e.target.value })}
                            className="h-24 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                            required
                        >
                        </textarea>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="amount" className="text-sm md:text-base">
                            Course Fee <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="amount"
                            value={data.fee}
                            onChange={(e) => setData({ ...data, fee: e.target.value })}
                            className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                            required
                        />
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(createCourse(data, setLoading, setShow))
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

        </motion.div>
    )
}
