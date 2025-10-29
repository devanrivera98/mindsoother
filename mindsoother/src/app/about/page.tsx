import { IoMdCheckmark, InformationCircle } from "../components/icons";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-center text-white">
        <h1 className="text-3xl font-bold">About MindSoother Explorer</h1>
        <p className="mt-4 text-xl text-indigo-100">
          AI-powered research discovery for psychology enthusiast
        </p>
      </div>
      <div className="mx-auto max-w-7xl my-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-md">
          <div className="p-6 sm:p-10">
            <div className="max-w-3xl mx-auto">
              <div>
                <h2 className="font-bold text-2xl">Our Mission</h2>
                <p className="mt-4 text-faded-gray">
                  PsychSearch was created to revolutionize how psychology
                  professionals, researchers, and students discover and organize
                  research. We believe that AI-powered search can dramatically
                  improve the efficiency of literature reviews and
                  evidence-based practice.
                </p>
                <p className="mt-4 text-faded-gray">
                  Our AI-powered platform matches research queries conceptually,
                  not just by keywords, and provides AI-generated summaries to
                  help you quickly understand key findings and identify relevant
                  research directions.
                </p>
              </div>
              <div className="mt-10">
                <h2 className="font-bold text-2xl">How We&apos;re Different</h2>
                <ul className="mt-5 flex flex-col gap-y-5">
                  <li className="flex gap-x-2">
                    <IoMdCheckmark
                      className="text-green-500 flex-shrink-0"
                      fontSize={30}
                    />
                    <p className="text-faded-gray">
                      <span className="font-bold text-lg">
                        Semantic search, not just keyword matching
                      </span>
                      <br />
                      Find relevant research even when using different
                      terminology or concepts than the original papers.
                    </p>
                  </li>
                  <li className="flex gap-x-2">
                    <IoMdCheckmark
                      className="text-green-500 flex-shrink-0"
                      fontSize={30}
                    />
                    <p className="text-faded-gray">
                      <span className="font-bold text-lg">
                        AI-powered research summaries
                      </span>
                      <br />
                      Get instant, contextual summaries of research findings and
                      related concepts to accelerate understanding.
                    </p>
                  </li>
                  <li className="flex gap-x-2">
                    <IoMdCheckmark
                      className="text-green-500 flex-shrink-0"
                      fontSize={30}
                    />
                    <p className="text-faded-gray">
                      <span className="font-bold text-lg">
                        Personal research library
                      </span>
                      <br />
                      Organize articles in custom folders, add personal notes,
                      and build your research collection over time.
                    </p>
                  </li>
                </ul>
              </div>
              <div id="disclaimer" className="mt-10 scroll-mt-[90px]">
                <h2 className="font-bold text-2xl">Important Disclaimer</h2>
                <div className="flex bg-orange-100 flex border-l-4 border-orange-400 gap-x-2 p-4 mt-4">
                  <InformationCircle
                    className="text-orange-300 flex-shrink-0"
                    fontSize={25}
                  />
                  <div className="flex flex-col gap-y-2">
                    <p className="text-orange-700 font-semibold">
                      PsychSearch Explorer is intended for informational and
                      research exploration purposes only. It is not a substitute
                      for professional medical advice, diagnosis, or treatment.
                      Always seek the advice of your physician, therapist, or
                      other qualified health provider with any questions you may
                      have regarding a personal mental health condition. Do not
                      disregard professional advice or delay seeking it because
                      of content or features on this site.
                    </p>
                    <p className="text-orange-700 font-semibold">
                      If you are experiencing a crisis or emergency, contact a
                      mental health professional, call 911, or visit the nearest
                      emergency room immediately.
                    </p>
                    <p className="text-orange-700 font-bold">
                      By using this site, you acknowledge and agree that
                      PsychSearch Explorer and its creators are not responsible
                      for any decisions or actions you take based on the content
                      provided. This platform is provided for educational and
                      research purposes only.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="font-bold text-2xl">Our Team</h2>
                <p className="mt-4 text-faded-gray">
                  PsychSearch Explorer is a personal project developed by a solo
                  developer passionate about leveraging technology to make
                  psychology resources more accessible and personalized.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/explorer"
                className="p-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg font-semibold duration-300 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-white"
              >
                Try the Explorer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
