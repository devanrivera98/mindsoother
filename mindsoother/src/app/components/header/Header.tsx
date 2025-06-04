'use client'
import React from 'react';
import { LuBrain as LuBrainRaw } from 'react-icons/lu';
import { LuHouse as LuHouseRaw } from "react-icons/lu";
import { LuBookmark as LuBookmarkRaw} from "react-icons/lu";
import NavLink from './components/NavLink';
import { useState } from 'react';





export default function Header() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNavClick = (index: number) => {
        setActiveIndex(index)
    }

    const LuBrain = (props: React.ComponentProps<'svg'>) => <>{LuBrainRaw({...props})}</>
    const LuHouse = (props: React.ComponentProps<'svg'>) => <>{LuHouseRaw({...props})}</>
    const LuBookmark = (props: React.ComponentProps<'svg'>) => <>{LuBookmarkRaw({...props})}</>

    return (
        <header className="shadow-md/10">
            <div className="flex justify-between mx-auto max-w-7xl lg:px-8 sm:px-6 px-4 py-4">
                <div className='flex items-center'>
                    <LuBrain fontSize={35} color={'#4f45e4'} />
                    <div className='pl-2 font-bold text-xl'>
                        MindSoother
                    </div>
                </div>
                <div className='flex items-center gap-x-10'>
                    <NavLink Icon={LuHouse} name="Home" fontSize={20} isActive={activeIndex === 0} onClick={() => handleNavClick(0)}  />
                    <NavLink Icon={LuBrain} name="Technique Explorer" fontSize={20} isActive={activeIndex === 1} onClick={() => handleNavClick(1)} />
                    <NavLink Icon={LuBookmark} name="Saved Technique" fontSize={20} isActive={activeIndex === 2} onClick={() => handleNavClick(2)}/>
                    <button className='bg-[#4f45e4] text-white px-4 py-2 rounded-md'>
                        Sign In
                    </button>
                </div>
            </div>
        </header>
    )
}