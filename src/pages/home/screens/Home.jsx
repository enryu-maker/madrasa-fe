import React, { useState } from 'react';
import SideBar from '../../../components/Sidebar';
import { image } from '../../../assets/Image';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../store/actions/homeAction';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [timeframe, setTimeframe] = useState(12);
    const [selectedOption, setSelectedOption] = useState('Show Stats: Yearly');
    const optionsList = [
        { name: 'Show Stats: Yearly', timeframe: 12 },
        { name: 'Show Stats: last 6 month', timeframe: 6 },
        { name: 'Show Stats: last 3 month', timeframe: 3 },
        { name: 'Show Stats: 1 month', timeframe: 1 },
    ];

    const handleSelect = (option) => {
        setSelectedOption(option?.name);
        setTimeframe(option?.timeframe);
        setIsOpen(false);
    };

    const MetricCard = ({ title, value }) => (
        <div className="w-full md:w-[25%] flex flex-col items-start px-4 py-6 border-r last:border-none">
            <h1 className="font-Poppins text-lg font-medium">{title}</h1>
            <h1 className="font-Poppins text-3xl font-bold text-primary">{value}</h1>
        </div>
    );

    const handleToggle = () => setIsOpen(!isOpen);

    // Dummy Sale Count Data
    const salecount = {
        currency: 'INR',
        labelList: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        revenueDataList: [1200, 2100, 1800, 3000, 2500, 3200, 2700, 2900, 3100, 3600, 4000, 4200],
    };

    // Dummy Today's Sale Data
    const today = {
        labels: ['9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
        datasets: [
            {
                label: 'Revenue ($)',
                data: [120, 300, 150, 400, 250],
                backgroundColor: '#34D39970',
                borderColor: '#10B981',
                borderWidth: 1,
            },
        ],
    };

    const data = {
        labels: salecount?.labelList,
        datasets: [
            {
                label: `Revenue (${salecount?.currency})`,
                data: salecount?.revenueDataList,
                backgroundColor: '#20665C70',
                borderColor: '#20665C',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    font: { family: 'Poppins', size: 12 },
                },
            },
            tooltip: { mode: 'index', intersect: false },
        },
        scales: {
            x: { ticks: { font: { family: 'Poppins', size: 12 } } },
            y: { ticks: { beginAtZero: true, font: { family: 'Poppins', size: 12 } } },
        },
    };
    const dispatch = useDispatch()


    const madrasa = useSelector(state => state.reducer.madrasa)

    return (
        <div className="bg-background min-h-screen flex font-Poppins">
            <SideBar />
            <main className="flex-1 h-screen overflow-y-scroll flex flex-col px-4 space-y-6">
                <div className="flex flex-col sticky top-0 z-50 h-[80px] pt-4 bg-white justify-center items-end">
                    <h1 className="flex items-center text-xl font-body font-medium">
                        <img
                            src={`data:image/png;base64,${madrasa.icon_base64}`}
                            alt="logo"
                            className="h-[30px] mr-3"
                        />
                        {madrasa?.madarasa_name}
                    </h1>
                    <p className="text-[12px] text-gray-700">{madrasa?.name}</p>
                </div>

                {/* Welcome Section */}
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div>
                        <h1 className="font-body text-3xl font-medium">Welcome back, {madrasa?.name}</h1>
                        <p className="font-body text-sm text-gray-500">
                            Here's what's happening with your {madrasa?.madarasa_name}
                        </p>
                    </div>

                    {/* Dropdown */}
                    <div className="relative w-72">
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
                </div>

                <div className="flex flex-wrap bg-white shadow-sm">
                    <MetricCard title="Total Students" value={120} />
                    <MetricCard title="Total Revenue" value="$15,000" />
                    <MetricCard title="Total Course" value={22} />
                    <MetricCard title="Total Teachers" value={5} />
                </div>

                <div className="flex w-full space-x-4">
                    {/* Revenue vs Orders Chart */}
                    <div className="bg-white px-4 py-2 flex flex-col justify-center items-center shadow-md w-full h-[500px]">
                        <div className="h-full w-full flex justify-center items-center">
                            <Bar data={data} options={options} />
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-wrap bg-white shadow-sm">
                    <MetricCard title="Received Fees" value={"$15,000"} />
                    <MetricCard title="Pending Fees" value="$15,000" />
                </div> */}

            </main>
        </div>
    );
}
