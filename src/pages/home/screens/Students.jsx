import React, { useState } from 'react'
import SideBar from '../../../components/Sidebar'
import { image } from '../../../assets/Image'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../../store/actions/homeAction';
import AddStudents from '../modal/AddStudents';
import UpdateFees from '../modal/UpdateFees';
import AddReport from '../modal/AddReport';

export default function Students() {
    const [loading, setLoading] = useState(false);
    const [addShow, setAddShow] = useState(false);
    const [FShow, setFShow] = useState(false);
    const [RShow, setRShow] = useState(false);

    const [currentCourse, setCurrentCourse] = useState({});
    const [currentStudent, setCurrentStudent] = useState({});




    const dispatch = useDispatch()
    const madrasa = useSelector(state => state.reducer.madrasa)
    const student = useSelector(state => state.reducer.student)

    const MetricCard = ({ title, value }) => (
        <div className="w-full md:w-[25%] flex flex-col items-start px-4 py-6 border-r last:border-none">
            <h1 className="font-Poppins text-lg font-medium">{title}</h1>
            <h1 className="font-Poppins text-3xl font-bold text-primary">{value}</h1>
        </div>
    );
    return (
        <div className="bg-background min-h-screen flex font-Poppins">
            <SideBar />

            <main className="flex-1 h-screen overflow-y-scroll flex flex-col px-4 space-y-6">
                {
                    addShow && <AddStudents setShow={setAddShow} />
                }
                {
                    FShow && <UpdateFees setShow={setFShow} course={currentCourse} student={currentStudent} />
                }
                {
                    RShow && <AddReport setShow={setRShow} student={currentStudent} />
                }
                <div className="flex flex-col sticky top-0 z-50 h-[80px] pt-4 bg-white justify-center items-end">
                    <h1 className="flex items-center text-xl font-Poppins font-medium">
                        <img
                            src={`data:image/png;base64,${madrasa.icon_base64}`}
                            alt="logo"
                            className="h-[30px] mr-3"
                        />
                        {madrasa?.madarasa_name}
                    </h1>
                    <p className="text-[12px] text-gray-700">{madrasa?.name}</p>
                </div>
                <div className=" w-full flex justify-between items-center  self-center">
                    <div className="">
                        <h1 className=' font-Poppins text-3xl font-medium'>
                            Student Dashboard
                        </h1>
                        <p className=' font-Poppins font-normal text-sm text-gray-500'>View your students, check progress, and stay up to date with school activities.</p>
                    </div>
                    <button
                        onClick={() => {
                            setAddShow(!addShow)
                        }}
                        className="w-auto bg-primary border py-2 px-4 text-center flex justify-between items-center text-white "
                    >
                        Add Student
                    </button>
                </div>
                <div className="flex flex-wrap bg-white shadow-sm">
                    <MetricCard title="Received Fees" value={"$15,000"} />
                    <MetricCard title="Pending Fees" value="$15,000" />
                </div>
                <div className=" w-full flex justify-between items-center  self-center">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search Students"
                            className="border py-2 px-4 w-[400px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button className="bg-primary text-white py-2 px-4 ">Search</button>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th className="py-2 px-4">Enrollment No.</th>
                                <th className="py-2 px-4">Name</th>
                                <th className="py-2 px-4">Class</th>
                                <th className="py-2 px-4">Mobile No.</th>
                                <th className="py-2 px-4">Fees</th>
                                <th className="py-2 px-4">View</th>
                                <th className="py-2 px-4">Report</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                student?.data?.map((item, index) => (
                                    <tr key={index} className="bg-white border-b">
                                        <td className="py-2 px-4">{item?.id}</td>
                                        <td className="py-2 px-4">{item?.name}</td>
                                        <td className="py-2 px-4">{item?.course?.name}</td>
                                        <td className="py-2 px-4">{item?.mobile}</td>
                                        <td className="py-2 px-4">
                                            <button
                                                onClick={() => {
                                                    setFShow(true)
                                                    setCurrentCourse(item?.course)
                                                    setCurrentStudent(item)
                                                }}
                                                className=" text-primary hover:underline underline-primary text-start py-1  rounded">
                                                fees &#8599;
                                            </button>
                                        </td>
                                        <td className="py-2 px-4">
                                            <button className=" text-primary hover:underline underline-primary text-start py-1  rounded">
                                                view &#8599;
                                            </button>
                                        </td>
                                        <td className="py-2 px-4">
                                            <button className=" text-primary hover:underline underline-primary text-start py-1  rounded"
                                                onClick={() => {
                                                    setRShow(true)
                                                    setCurrentStudent(item)
                                                }}
                                            >
                                                open reports &#8599;
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}
