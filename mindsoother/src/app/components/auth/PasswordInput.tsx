import { useState } from 'react'

interface FormInputInterface {
    Icon: React.ElementType
    name: string;
    placeholder: string;
}


export default function FormInput({Icon, name, placeholder} : FormInputInterface) {
    const [isShowing, setIsShowing] = useState(false);

    return (
        <div className="flex flex-col gap-y-2">
                    <label htmlFor={name}>{name}</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center" aria-hidden="true">
                        <Icon stroke="gray" fontSize={20} />
                        </div>
                    <input id={name} name={name} className="py-1 w-full pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={placeholder} />
                    </div>
                </div>
    )
}