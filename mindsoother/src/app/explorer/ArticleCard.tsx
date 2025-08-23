import { LuBookmark, TfiNewWindow } from "../components/icons";

interface ArticleCardInterface {
    description: string;
    title: string;
}

export default function ArticleCard({description, title} : ArticleCardInterface) {
    return (
        <div className="p-5 bg-white shadow-lg rounded flex flex-col">
            <div className="flex justify-end">
                <LuBookmark fontSize={22} className={'cursor-pointer hover:text-brand-purple'} />
            </div>
            <h3 className="font-semibold text-xl pr-5">{title}</h3>
            <div className="py-5 flex-grow-1">
                <p>{description.length > 30 ? description.substring(0, 125) + '...' : description} </p>
            </div>
            <div className="text-brand-purple">
                <a href="#placeholder" target="_blank" className="flex items-center gap-x-1">
                    Read Full Article 
                    <TfiNewWindow fontSize={15} className="-translate-y-px" />
                </a>
            </div>
        </div>
    )
}