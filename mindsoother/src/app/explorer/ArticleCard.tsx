import { IoCalendarClearOutline, IoPerson, LuBookmark, TfiNewWindow } from "../components/icons";
import buildAbstractFromIndex from './helpers/buildAbstractFromIndex'

interface abstractInterface {
    [key: string ]: number[]
}

interface ArticleCardInterface {
    abstractIndex: abstractInterface;
    title: string;
    authors: string;
    publishDate: string;
    url: string;
}

export default function ArticleCard({abstractIndex, title, url, publishDate, authors} : ArticleCardInterface) {

    const abstract = buildAbstractFromIndex(abstractIndex)

    return (
        <div className="p-5 bg-white shadow-lg rounded flex flex-col">
            <div className="flex justify-end">
                <LuBookmark fontSize={22} className={'cursor-pointer hover:text-brand-purple'} />
            </div>
            <h3 className="font-semibold text-xl pr-5">{title}</h3>
            <div className="flex pt-3  gap-x-4 font-medium text-gray-700">
                <div className="flex items-center gap-x-2">
                <IoPerson />
                <h3>{authors}</h3>
                </div>
                <div className="flex items-center gap-x-2">
                  <IoCalendarClearOutline />
                    <span>{publishDate}</span>
                </div>
            </div>
            <div className="py-5 flex-grow-1 font-medium text-gray-700">
                <p>{abstract.length > 450 ? abstract.substring(0, 125) + '...' : abstract} </p>
            </div>
            <div className="text-brand-purple">
                <a href={url} target="_blank" className="flex items-center gap-x-1">
                    Read Full Article 
                    <TfiNewWindow fontSize={15} className="-translate-y-px" />
                </a>
            </div>
        </div>
    )
}