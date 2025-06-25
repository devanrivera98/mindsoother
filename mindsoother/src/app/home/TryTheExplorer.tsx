import { IoArrowForwardSharp } from "../components/icons"

export default function TryTheExplorer() {

    return (
        <section className="bg-indigo-900 text-white py-12">
            <div className="mx-auto max-w-7xl lg:px-8 sm:px-6 px-4">
                <div className="text-center">
                    <h2 className="text-[30px]">Ready to find techniques that work for you?</h2>
                    <p className="pt-5 text-indigo-200 text-lg max-w-3xl mx-auto">Start your journey to better mental well-being with personalized, evidence-based techniques.</p>
                </div>
                <div className="flex pt-10">
                    <a className="flex inline-flex mx-auto items-center bg-white hover:bg-indigo-50 py-4 px-6 text-indigo-900 font-bold rounded-xl cursor-pointer">
                    Try the Explorer
                    <IoArrowForwardSharp className="ml-2 text-indigo-900" fontSize={20} />
                    </a>
                </div>                
            </div>
        </section>
    )
}