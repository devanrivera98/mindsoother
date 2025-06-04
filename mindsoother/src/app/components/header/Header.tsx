import React from 'react';
import { LuBrain as LuBrainRaw } from 'react-icons/lu';
import { LuHouse as LuHouseRaw } from "react-icons/lu";
import { LuBookmark as LuBookmarkRaw} from "react-icons/lu";
import NavLink from './components/NavLink';





export default function Header() {


    const LuBrain = (props: React.ComponentProps<'svg'>) => <>{LuBrainRaw({...props})}</>
    const LuHouse = () => <>{LuHouseRaw({size: 20})}</>
    const LuBookmark = () => <>{LuBookmarkRaw({size: 20})}</>


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
                    <NavLink Icon={LuHouse} name="Home" isActive={false} />
                    <NavLink Icon={LuBrain} name="Technique Explorer" fontSize={20} isActive={false} />
                    <NavLink Icon={LuBookmark} name="Saved Technique" isActive={false}/>
                    <button className='bg-[#4f45e4] text-white px-4 py-2 rounded-md'>
                        Sign In
                    </button>
                </div>
            </div>
        </header>
    )
}