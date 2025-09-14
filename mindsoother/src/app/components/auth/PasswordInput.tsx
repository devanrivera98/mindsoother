'use client'

import { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from '../icons/index'

interface PasswordInputInterface {
    Icon: React.ElementType
    name: string;
    placeholder: string;
    field: string;
    autoComplete?: string;
    onInputChange: (name: string, value: string) => void;
}


export default function PasswordInput({Icon, name, field, placeholder, autoComplete, onInputChange} : PasswordInputInterface) {
    const [isShowing, setIsShowing] = useState(false);
    const [password, setPassword] = useState("");


    const passwordRules = [
        { test: (pw: string) => pw.length >= 8, message: "At least 8 characters" },
        { test: (pw: string) => /[A-Z]/.test(pw), message: "Must contain an uppercase letter" },
        { test: (pw: string) => /[!@#$%^&*]/.test(pw), message: "Must contain a special character" },
        { test: (pw: string) => /\d/.test(pw), message: "Must contain a number" }
      ];

    return (
        <div className="flex flex-col gap-y-2">
                    <label htmlFor={field}>{name}</label>
                    <div className="relative">
                    <input type={isShowing ? "text" : "password"} id={field} name={field} className="py-1 w-full pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={placeholder} {...(autoComplete ? {autoComplete} : {})} onChange={(e) => onInputChange(e.target.name , e.target.value)}/>
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
                    {passwordRules.map((rule, i) => (
                        !rule.test(password) && (
                            <p className='text-red-500 pl-1' key={i}>{rule.message}</p>
                        )
                    ))}
                </div>
    )
}