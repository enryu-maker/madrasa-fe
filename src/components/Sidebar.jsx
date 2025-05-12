import React from 'react';
import { useLocation } from 'react-router-dom';
import { image } from '../assets/Image';

export default function SideBar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { path: 'dashboard', label: 'Dashboard', icon: image.dashboard },
        { path: 'students', label: 'Students', icon: image.user },
        { path: 'teachers', label: 'Teachers', icon: image.teacher },
        { path: 'courses', label: 'Courses', icon: image.book },
        { path: 'fees', label: 'Fees', icon: image.wallet },

    ];

    return (
        <div className="w-[20%] h-screen bg-white border-r flex flex-col items-center">
            <h1 className="flex items-center self-start p-3 cursor-pointer text-2xl sm:text-3xl md:text-2xl font-Poppins">
                <img src={image.logo} className="h-[60px] pr-3" alt="logo" />
                AlMadrasa
            </h1>
            <div className="space-y-2 w-[88%] mt-4 self-center">
                {navItems.map((item) => (
                    <a
                        key={item.path}
                        href={item.path}
                        className={`flex font-Poppins py-1 font-light items-center ${isActive(item.path)
                            ? 'text-primary font-medium'
                            : 'hover:text-primary hover:font-normal text-gray-600'
                            }`}
                    >
                        <img
                            src={item.icon}
                            className="w-[22px] h-[22px] mr-2"
                            alt={item.label}
                        />
                        <span className="text-lg ">{item.label}</span>
                    </a>
                ))}
                {/* <hr /> */}
            </div>
        </div>
    );
}