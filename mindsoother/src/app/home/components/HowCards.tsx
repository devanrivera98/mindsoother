import { ComponentType } from "react"

interface IconPropInterface {
    className?: string;
    fontSize?: number;
}

interface HowCardsInterface {
    icon: ComponentType<IconPropInterface>;
    title: string;
    description: string;
}

export default function HowCards({icon : Icon, title, description} : HowCardsInterface) {
    return (
        <>
            <div className="bg-gray-50 px-10 py-5 text-center m-5">
                <div className="">
                    <span className="inline-block bg-indigo-100 p-3 rounded-full">
                    <Icon className="bg-indigo-100 text-brand-purple" fontSize={35} />
                    </span>
                </div>
                <h1 className="font-bold text-[20px]">{title}</h1>
                <p className="text-md">{description}</p>
            </div>        
        </>
    )
}