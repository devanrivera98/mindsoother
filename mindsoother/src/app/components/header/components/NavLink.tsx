import React from "react";

interface IconInterface {
    Icon: React.ElementType;
    name: string;
    fontSize?: number;
    isActive: boolean;
    onClick: () => void;
}

export default function NavLink({isActive, onClick, Icon, name, fontSize} :  IconInterface) {

    return (
        <div className={`cursor-pointer p-1.5 rounded  ${isActive ? 'bg-indigo-50' : 'hover:bg-gray-50'}`} onClick={onClick}>
            <a className="flex pointer">
            <Icon size={fontSize} />
            <span className={`pl-2 hover:text-indigo-600 ${isActive ? 'text-indigo-600' : ''}`}>{name}</span>
            </a>
        </div>
    )
}