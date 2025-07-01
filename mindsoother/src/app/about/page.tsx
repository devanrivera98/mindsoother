import { IoMdCheckmark, InformationCircle } from "../components/icons";

export default function About() {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-center text-white">
        <h1 className="text-3xl font-bold">About MindSoother Explorer</h1>
        <p className="mt-4 text-xl text-indigo-100">
          Bridging the gap between evidence-based psychology and self-help
        </p>
      </div>
      <div className="mx-auto max-w-7xl my-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-md">
          <div className="p-6 sm:p-10">
            <div className="max-w-3xl mx-auto">
              <div>
                <h2 className="font-bold text-2xl">Our Mission</h2>
                <p className="mt-4 text-faded-gray">
                  Mindsoother was created to make evidence-based
                  psychological techniques more accessible to everyone. We
                  believe that understanding the tools therapists use can help
                  people make progress even between therapy sessions, or while
                  waiting for professional help.
                </p>
                <p className="mt-4 text-faded-gray">
                  Our AI-powered platform matches your specific challenges with
                  techniques from cognitive behavioral therapy (CBT),
                  dialectical behavior therapy (DBT), acceptance and commitment
                  therapy (ACT), internal family systems (IFS), and other
                  evidence-based approaches.
                </p>
              </div>
              <div className="mt-10">
                <h2 className="font-bold text-2xl">How We're Different</h2>
                <ul className="mt-5 flex flex-col gap-y-5">
                  <li className="flex gap-x-2">
                    <IoMdCheckmark
                      className="text-green-500 flex-shrink-0"
                      fontSize={30}
                    />
                    <p className="text-faded-gray">
                      <span className="font-bold text-lg">
                        Specific techniques, not just general advice
                      </span>
                      <br />
                      Instead of vague suggestions, we provide structured,
                      actionable techniques used by therapists.
                    </p>
                  </li>
                  <li className="flex gap-x-2">
                    <IoMdCheckmark
                      className="text-green-500 flex-shrink-0"
                      fontSize={30}
                    />
                    <p className="text-faded-gray">
                      <span className="font-bold text-lg">
                        Evidence-based approaches
                      </span>
                      <br />
                      We focus on therapeutic modalities with scientific
                      research supporting their effectiveness.
                    </p>
                  </li>
                  <li className="flex gap-x-2">
                    <IoMdCheckmark
                      className="text-green-500 flex-shrink-0"
                      fontSize={30}
                    />
                    <p className="text-faded-gray">
                      <span className="font-bold text-lg">
                        Personal progress tracking
                      </span>
                      <br />
                      Save techniques and track what works specifically for you.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <h2 className="font-bold text-2xl">Important Disclaimer</h2>
                <div className="flex bg-orange-100 flex border-l-4 border-orange-400 gap-x-2 p-4 mt-4">
                    <InformationCircle className="text-orange-300 flex-shrink-0" fontSize={25} />
                    <div className="flex flex-col gap-y-2">
                        <p className="text-orange-700 font-semibold">
                        Mindsoother Explorer is intended for informational and self-guided exploration purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician, therapist, or other qualified health provider with any questions you may have regarding a mental health condition. Do not disregard professional advice or delay seeking it because of content or features on this site.
                        </p>
                        <p className="text-orange-700 font-semibold">
                        If you are experiencing a crisis or emergency, contact a mental health professional, call 911, or visit the nearest emergency room immediately.
                        </p>
                        <p className="text-orange-700 font-bold">
                        By using this site, you acknowledge and agree that Mindsoother Explorer and its creators are not responsible for any decisions or actions you take based on the content provided. Use of this site is at your own risk.
                        </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
