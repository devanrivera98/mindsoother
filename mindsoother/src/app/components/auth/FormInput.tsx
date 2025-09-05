interface FormInputInterface {
    Icon: React.ElementType
    name: string;
    placeholder: string;
}


export default function FormInput({Icon, name, placeholder} : FormInputInterface) {
    return (
        <div className="flex flex-col gap-y-2">
                    <label>{name}</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <Icon stroke="gray" fontSize={20} />
                        </div>
                    <input className="py-1 w-full pl-10 border border-gray-300 rounded" placeholder={placeholder} />
                    </div>
                </div>
    )
}