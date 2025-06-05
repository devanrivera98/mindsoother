'use client'
import React from 'react';
import { LuBrain, LuHouse, LuBookmark, InformationCircle } from '../icons';
import NavLink from './components/NavLink';
import { useState, useEffect } from 'react';
import MobileMenu from './components/MobileMenu';





export default function Header() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


    useEffect(() => {
        const windowWatcher = () => {
            if (window.innerWidth > 1023) {
                setIsMenuOpen(false)
            }
        }
        window.addEventListener('resize', windowWatcher)

        return () => {
            window.removeEventListener('resize', windowWatcher)
        }
    }, [])

    const handleNavClick = (index: number) => {
        setActiveIndex(index)
    }



    return (
        <header className="shadow-md/10 w-full">
            <div className="flex justify-between mx-auto max-w-7xl lg:px-8 sm:px-6 px-4 py-4 ">
                <div className='flex items-center cursor-pointer'>
                    <LuBrain fontSize={35} color={'#4f45e4'} />
                    <div className='pl-2 font-bold text-xl'>
                        MindSoother
                    </div>
                </div>
                <div className={`hidden lg:flex items-center gap-x-7 `}>
                    <NavLink Icon={LuHouse} name="Home" fontSize={20} strokeWidth={1.5} isActive={activeIndex === 0} onClick={() => handleNavClick(0)}  />
                    <NavLink Icon={LuBrain} name="Technique Explorer" fontSize={20} strokeWidth={1.5} isActive={activeIndex === 1} onClick={() => handleNavClick(1)} />
                    <NavLink Icon={LuBookmark} name="Saved Technique" fontSize={20} strokeWidth={1.5} isActive={activeIndex === 2} onClick={() => handleNavClick(2)}/>
                    <NavLink Icon={InformationCircle} name="About" fontSize={20} strokeWidth={5} isActive={activeIndex === 3} onClick={() => handleNavClick(3)}/>                    
                    <div className='p-0.5 rounded-md border-2 border-transparent focus-within:border-[#4f45e4]'>
                        <button className='bg-[#4f45e4] cursor-pointer text-white px-4 py-2 rounded-md'>
                            Sign In
                        </button>
                    </div>
                </div>
                {/* Mobile Menu Button */}
                <MobileMenu onClick={() => 1} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            </div>
            {/* Mobile Dropdown */}
            <div className={`lg:hidden flex flex-col gap-y-2 px-2 ${isMenuOpen ? ' block ' : 'hidden'} `}>
                    <NavLink Icon={LuHouse} name="Home" fontSize={20} strokeWidth={1.5} isActive={activeIndex === 0} onClick={() => handleNavClick(0)}  />
                    <NavLink Icon={LuBrain} name="Technique Explorer" fontSize={20} strokeWidth={1.5} isActive={activeIndex === 1} onClick={() => handleNavClick(1)} />
                    <NavLink Icon={LuBookmark} name="Saved Technique" fontSize={20} strokeWidth={1.5} isActive={activeIndex === 2} onClick={() => handleNavClick(2)}/>
                    <NavLink Icon={InformationCircle} name="About" fontSize={20} strokeWidth={5} isActive={activeIndex === 3} onClick={() => handleNavClick(3)}/>                    
                   <div className='mx-2 pb-4'>
                   <button className='w-full cursor-pointer bg-[#4f45e4] text-white py-2 rounded-md'>
                        Sign In
                    </button>
                   </div>
                </div>
        </header>
    )
}