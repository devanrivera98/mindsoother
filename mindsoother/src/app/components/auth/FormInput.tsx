interface FormInputInterface {
    Icon: React.ElementType
    name: string;
    field: string;
    placeholder: string;
    autoComplete?: string;
    onInputChange: (name: string, value: string) => void;
}


export default function FormInput({Icon, name, field, placeholder, autoComplete, onInputChange} : FormInputInterface) {
    return (
        <div className="flex flex-col gap-y-2">
                    <label htmlFor={field}>{name}</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center" aria-hidden="true">
                        <Icon stroke="gray" fontSize={20} />
                        </div>
                    <input id={field} name={field} className="py-1 w-full pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={placeholder} {...(autoComplete ? { autoComplete } : {})} onChange={(e) => onInputChange(e.target.name, e.target.value)} />
                    </div>
                </div>
    )
}