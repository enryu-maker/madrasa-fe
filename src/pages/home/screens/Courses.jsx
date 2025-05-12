import React from 'react'
import SideBar from '../../../components/Sidebar'
import { image } from '../../../assets/Image'
import { useSelector } from 'react-redux'
import AddCourses from '../modal/AddCourses'

export default function Courses() {
    const [AShow, setAShow] = React.useState(false)
    const madrasa = useSelector(state => state.reducer.madrasa)
    const courses = useSelector(state => state.reducer.courses)
    return (
        <div className="bg-background min-h-screen flex font-Poppins">
            <SideBar />
            <main className="flex-1 h-screen overflow-y-scroll flex flex-col px-4 space-y-6">
                {
                    AShow && <AddCourses setShow={setAShow} />
                }
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
                <div className=" w-full flex justify-between items-center  self-center">
                    <div className="">
                        <h1 className=' font-Poppins text-3xl font-medium'>
                            Courses Dashboard
                        </h1>
                        <p className=' font-Poppins font-normal text-sm text-gray-500'>View your courses, check progress.</p>
                    </div>
                    <button
                        onClick={() => {
                            setAShow(!AShow)
                        }}
                        className="w-auto bg-primary border py-2 px-4 text-center flex justify-between items-center text-white "
                    >
                        Add Course
                    </button>
                </div>
                <div className=" w-full flex justify-between items-center  self-center">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search Courses"
                            className="border py-2 px-4 w-[400px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button className="bg-primary text-white py-2 px-4 ">Search</button>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th className="py-2 px-4">Course ID.</th>
                                <th className="py-2 px-4">Name</th>
                                <th className="py-2 px-4">Fees</th>
                                <th className="py-2 px-4">View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courses?.data?.map((item, index) => (
                                    <tr className="bg-white border-b">
                                        <td className="py-2 px-4">{item?.id}</td>
                                        <td className="py-2 px-4">{item?.name}</td>
                                        <td className="py-2 px-4">{item?.fee}</td>
                                        <td className="py-2 px-4">
                                            <button className=" text-primary hover:underline underline-primary text-start py-1  rounded">
                                                view &#8599;
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
