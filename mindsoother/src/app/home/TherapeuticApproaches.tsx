import TherapeuticCard from "./components/TherapeuticCard";

export default function TherapeuticApproaches() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl lg:px-8 sm:px-6 px-4">
          <div>
            <h1 className="flex justify-center font-bold text-[30px]">
              Therapeutic Approaches
            </h1>
            <p className="text-lg pt-5 flex justify-center text-faded-gray">
              Our platform draws from muliple evidence-based therapeutic
              modalities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 gap-y-10 gap-x-5">
            <TherapeuticCard
              heading="CBT"
              color="blue"
              subHeading="Cognitive Behavioral Therapy"
              description="Focuses on identifying and changing negative thought patterns and behaviors."
            />
            <TherapeuticCard
              heading="DBT"
              color="purple"
              subHeading="Dialectical Behavior Therapy"
              description="Combines cognitive techniques with mindfulness and acceptance strategies."
            />
            <TherapeuticCard
              heading="ACT"
              color="green"
              subHeading="Acceptance and Commitment Therapy"
              description="Emphasizes accepting difficult thoughts and feelings while committing to behavior change aligned with personal values."
            />
            <TherapeuticCard
              heading="IFS"
              color="yellow"
              subHeading="Internal Family Systems"
              description="Views the mind as naturally multiple, with different parts that need to be understood and integrated."
            />
            <TherapeuticCard
              heading="MINDFULNESS"
              color="orange"
              subHeading="Mindfulness-Based Approaches"
              description="Practices focused on developing present-moment awareness and non-judgmental acceptance."
            />
          </div>
        </div>
      </section>
    </>
  );
}
