import { IoArrowForwardSharp } from "react-icons/io5";


export default function Homepage() {
    return (
      <>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 min-h-36 w-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 py-20">
            <div>
              <h2 className="text-white text-5xl">Find the right therapeutic technique for your unique journey</h2>
              <p className="pt-5 text-white text-lg">Describe your mental health challenges, and our AI will match you with evidence-based techniques from CBT, DBT, ACT, and other therapeutic approaches.</p>
              <div>
                <button className="bg-white rounded-lg px-6 py-3">
                  Try the Explorer
                  <IoArrowForwardSharp />
                  </button>

            </div>
            </div>
          </div>
        </div>
      </section>
      </>  
    )
}