import React from "react";

interface IconInterface {
    Icon: React.ElementType;
    name: string,
    fontSize?: number;
    isActive: boolean
}

export default function NavLink({isActive, Icon, name, fontSize} :  IconInterface) {

    return (
        <div className={`cursor-pointer p-1.5 rounded  ${isActive ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}>
            <a className="flex pointer">
            <Icon size={fontSize} />
            <span className="pl-2 ">{name}</span>
            </a>
        </div>
    )
}