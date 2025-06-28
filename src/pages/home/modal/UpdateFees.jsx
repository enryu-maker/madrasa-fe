import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { image } from '../../../assets/Image';
import { TailSpin } from 'react-loader-spinner';
import { updateFees } from '../../../store/actions/homeAction';

export default function UpdateFees({
    setShow,
    course,
    student
}) {
    const [data, setData] = React.useState({
        "date_of_payment": "",
        "month": "",
        "amount": course?.fee,
        "mode": "",
        "donations": "",
    })
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);


    const [loading, setLoading] = React.useState(false);
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState('Select Month');
    const [selectedOption2, setSelectedOption2] = useState('Select Mode');

    const optionsList = [
        { name: 'January' },
        { name: 'February' },
        { name: 'March' },
        { name: 'April' },
        { name: 'May' },
        { name: 'June' },
        { name: 'July' },
        { name: 'August' },
        { name: 'September' },
        { name: 'October' },
        { name: 'November' },
        { name: 'December' },
    ];
    const optionsList2 = [
        { name: 'CASH' },
        { name: 'UPI' },
    ];

    const modalVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
    };
    const handleSelect = (option) => {
        setData({ ...data, month: option.name });
        setSelectedOption(option.name)
        setIsOpen(false);
    };
    const handleSelect2 = (option) => {
        setData({ ...data, mode: option.name });
        setSelectedOption2(option.name)
        setIsOpen2(false);
    };
    const handleToggle = () => setIsOpen(!isOpen);
    const handleToggle2 = () => setIsOpen2(!isOpen2);

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
                    <h1 className="text-2xl font-semibold text-gray-800">Pay Fees</h1>
                    <button onClick={() => setShow(false)}>
                        <img className="h-7 w-7" src={image.close} alt="Close" />
                    </button>
                </div>
                <div className="mt-2">
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="feedate" className="text-sm md:text-base">
                            Payment Date <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="feedate"
                            value={data.date_of_payment}
                            onChange={(e) => setData({ ...data, date_of_payment: e.target.value })}
                            className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-white hover:border-2 hover:border-primary focus:border-primary transition"
                            required
                        />
                    </div>
                </div>
                <div className="relative w-full space-y-1 mt-2">
                    <label htmlFor="feedate" className="text-sm md:text-base">
                        Payment Month <span className="text-red-500">*</span>
                    </label>
                    <button
                        onClick={handleToggle}
                        className="w-full bg-white border rounded-md py-2 px-4 text-left flex justify-between items-center text-gray-700 hover:bg-gray-100"
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
                            {optionsList.map((option, index) => (
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
                <div className="mt-2">
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="amount" className="text-sm md:text-base">
                            Fees Amount <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="amount"
                            value={data.amount}
                            disabled
                            // onChange={(e) => setData({ ...data, date: e.target.value })}
                            className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none bg-gray-200 hover:border-2 hover:border-primary focus:border-primary transition"
                            required
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="w-full space-y-1 font-Poppins">
                        <label htmlFor="donation" className="text-sm md:text-base">
                            Donation Amount <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="donation"
                            value={data.donations}
                            onChange={(e) => setData({ ...data, donations: e.target.value })}
                            className="h-12 w-full border-[1.5px] border-gray-200 px-2 rounded outline-none hover:border-2 hover:border-primary focus:border-primary transition"
                            required
                        />
                    </div>
                </div>
                <div className="relative w-full space-y-1 mt-2">
                    <label htmlFor="feedate" className="text-sm md:text-base">
                        Payment Mode <span className="text-red-500">*</span>
                    </label>
                    <button
                        onClick={handleToggle2}
                        className="w-full bg-white border rounded-md py-2 px-4 text-left flex justify-between items-center text-gray-700 hover:bg-gray-100"
                    >
                        <span>{selectedOption2}</span>
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
                    {isOpen2 && (
                        <div className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-10">
                            {optionsList2.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelect2(option)}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                >
                                    {option.name}
                                </div>
                            ))}
                        </div>
                    )}
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
                            formData.append("student_id", student.id)
                            dispatch(updateFees(formData, setLoading, setShow))
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
    )
}
