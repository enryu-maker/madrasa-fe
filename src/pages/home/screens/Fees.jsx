import React from 'react'
import SideBar from '../../../components/Sidebar'
import { useSelector } from 'react-redux'
import AddCourses from '../modal/AddCourses'
import AddOrEditCourse from '../modal/ViewCourse'

export default function Fees() {
    const [AShow, setAShow] = React.useState(false)
    const [VShow, setVShow] = React.useState(false)
    const [currentCourse, setCurrentCourse] = React.useState({})
    const [searchTerm, setSearchTerm] = React.useState('')

    const madrasa = useSelector(state => state.reducer.madrasa)
    const fees = useSelector(state => state.reducer.fees)
    console.log(fees)

    // Filtered courses based on search term
    const filteredCourses = fees?.filter(fees =>
        fees?.student?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    )

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

                <div className="w-full flex justify-between items-center self-center">
                    <div>
                        <h1 className='text-3xl font-medium'>Fees Dashboard</h1>
                        <p className='text-sm text-gray-500'>View your fees data, check progress.</p>
                    </div>
                </div>

                <div className="w-full flex justify-between items-center self-center">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search Courses"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border py-2 px-4 w-[400px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                            className="bg-primary text-white py-2 px-4"
                            onClick={() => { }} // Optional, can remove or use for manual trigger
                        >
                            Search
                        </button>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th className="py-2 px-4">Fees ID</th>
                                <th className="py-2 px-4">Name</th>
                                <th className="py-2 px-4">Date</th>
                                <th className="py-2 px-4">month</th>
                                <th className="py-2 px-4">Amount</th>
                                <th className="py-2 px-4">Mode</th>
                                <th className="py-2 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredCourses?.length > 0 ? filteredCourses.map(item => (
                                    <tr key={item.id} className="bg-white border-b">
                                        <td className="py-2 px-4">{item?.id}</td>
                                        <td className="py-2 px-4">{item?.student.name}</td>
                                        <td className="py-2 px-4">{item?.date_of_payment}</td>
                                        <td className="py-2 px-4">{item?.month}</td>
                                        <td className="py-2 px-4">{item?.amount}</td>
                                        <td className="py-2 px-4">{item?.mode}</td>
                                        <td className="py-2 px-4">
                                            <button
                                                onClick={() => {
                                                    // setCurrentCourse(item)
                                                    // setVShow(true)
                                                }}
                                                className="text-red-500 hover:underline text-start py-1 rounded"
                                            >
                                                Receipt &#8599;
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="4" className="text-center py-4 text-gray-500">No Fees Data found.</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}
