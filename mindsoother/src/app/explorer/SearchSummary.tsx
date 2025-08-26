import { BsStars, InformationCircle } from "../components/icons"

export default function SearchSummary({chatSummary}: {chatSummary: string}) {
    return (
        <div className="bg-faded-purple w-full p-5 sm:px-6 lg:px-8 rounded">
            <div className="flex items-center gap-x-3 pb-5">
                <BsStars color={"#4f45e4"} fontSize={24} />
                <h2 className="font-bold text-[20px]">AI Research Summary</h2>
            </div>
            <div className="leading-7 font-medium text-gray-700">
                <p>{chatSummary}</p>
                <div className="pt-5">
                        <a href="/about#disclaimer" className="inline-flex gap-x-2 hover:underline-100 text-brand-purple hover:text-hover-purple hover:underline hover:underline-offset-1">
                            <span className="flex items-center gap-x-2">
                            <InformationCircle />
                            Disclaimer
                            </span>
                            </a>

            </div>
            </div>
        </div>
    )
}