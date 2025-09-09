'use client'

import { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from '../icons/index'

interface PasswordInputInterface {
    Icon: React.ElementType
    name: string;
    placeholder: string;
    autoComplete?: string
}


export default function PasswordInput({Icon, name, placeholder, autoComplete} : PasswordInputInterface) {
    const [isShowing, setIsShowing] = useState(false);

    return (
        <div className="flex flex-col gap-y-2">
                    <label htmlFor={name}>{name}</label>
                    <div className="relative">
                    <input type={isShowing ? "text" : "password"} id={name} name={name} className="py-1 w-full pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={placeholder} {...(autoComplete ? {autoComplete} : {})} />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center" aria-hidden="true">
                        <Icon stroke="gray" fontSize={20} />
                        </div>
                        <button type='button' className='absolute inset-y-0 flex items-center right-3 my-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500' aria-label={isShowing ? 'Hide password text' : 'Show password text'} onClick={() => setIsShowing(!isShowing)}>
                            {isShowing ? (
                            <IoEyeOffOutline fontSize={20} aria-hidden="true" focusable="false" />
                            )
                        :
                        (
                            <IoEyeOutline fontSize={20} aria-hidden="true" focusable="false" />
                        )}
                        </button>
                    </div>
                </div>
    )
}