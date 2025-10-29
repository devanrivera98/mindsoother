import HowCards from "./components/HowCards";
import {
  FaMagnifyingGlass,
  RiPsychotherapyLine,
  IoBookOutline,
} from "../components/icons";

export default function HowItWorks() {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-7xl lg:px-8 sm:px-6 px-4">
          <div>
            <h2 className="flex justify-center font-bold text-[30px]">
              How It Works?
            </h2>
            <p className="text-lg pt-5 flex justify-center text-faded-gray text-center">
            Powerful research tools designed for psychology professionals and students
            </p>
          </div>
          <div className="pt-12 grid md:grid-cols-3">
            <HowCards
              icon={FaMagnifyingGlass}
              title={"Share Your Experience"}
              description={
                "Search by concepts, not just keywords. Find relevant research even when using different terminology."
              }
            />
            <HowCards
              icon={RiPsychotherapyLine}
              title={"Get Matched"}
              description={
                "Get instant AI-generated summaries of search term and related concepts for quick understanding."
              }
            />
            <HowCards
              icon={IoBookOutline}
              title={"Track Your Progress"}
              description={
                "Save articles to custom folders, add personal notes, and build your research library over time."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
