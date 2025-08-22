import ArticleCard from "./ArticleCard";

interface SearchResultDataInterface {
    length: number;
    title: string;
    description: string;
    url?: string
}

export default function SearchResults({}) {

    return (
        <div className="py-7.5 px-5 sm:px-6 lg:px-8">
            <h2 className="font-bold text-[24px] pb-10">Research Articles (6)</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <ArticleCard title="Cognitive Behavioral Therapy for Anxiety Disorders: A Meta-Analysis"  description="This comprehensive meta-analysis examines the effectiveness of cognitive behavioral therapy interventions for various anxiety disorders" />
                <ArticleCard title="Dialectical Behavior Therapy Skills Training for Emotion Regulation" description="This study investigates the impact of DBT skills training on emotion regulation capabilities in individuals with borderline personality disorder" />
                <ArticleCard title="Mindfulness-Based Stress Reduction: Neuroplasticity and Clinical Outcomes" description="Recent neuroimaging studies reveal significant structural brain changes following 8-week MBSR interventions" />
                <ArticleCard title="Acceptance and Commitment Therapy for Chronic Pain Management" description="This randomized controlled trial examines ACT interventions for individuals with chronic pain conditions" />
            </div>
        </div>
    )
}