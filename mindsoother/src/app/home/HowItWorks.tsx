import HowCards from "./components/HowCards";
import { LuBrain, RiPsychotherapyLine, IoBookOutline } from "../components/icons"

export default function HowItWorks() {
    return(
        <>
        <section className="py-16">
            <div className="mx-auto max-w-7xl lg:px-8 sm:px-6 px-4">
                <div>
                    <h1 className="flex justify-center font-bold text-[30px]">How It Works?</h1>
                    <p className="text-lg pt-5 flex justify-center text-faded-gray">Your personalized path to better mental well-being in three simple steps</p>
                </div>
                <div className="pt-12 grid grid-cols-3">
                    <HowCards icon={LuBrain} title={"Share Your Experience"} description={"Describe what you're struggling with, whether it's anxiety, work stress, or relationship challenges."}/>
                    <HowCards icon={RiPsychotherapyLine} title={"Get Matched"} description={"Our AI analyzes your description and recommends evidence-based techniques tailored to your specific needs."}/>
                    <HowCards icon={IoBookOutline} title={"Track Your Progress"} description={"Save techniques, take notes on your experiences, and build a personalized library of what works for you."}/>                    
                </div>
            </div>
        </section>
        </>
    )
}