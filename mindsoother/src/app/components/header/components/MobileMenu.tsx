'use client'
import { useState } from "react"
import { GiHamburgerMenu } from "../../icons";

export default function MobileMenu() {

    const [isActive, setIsActive] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <button className={`lg:hidden cursor-pointer p-2 rounded-md border ${isActive ? 'bg-indigo-50' : 'hover:bg-gray-50'} ${isFocused ? 'border-[#4f45e4]': 'border-transparent'}`} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
        <div className="flex">
        <GiHamburgerMenu fontSize={20}/>
        </div>
    </button>
    )
}