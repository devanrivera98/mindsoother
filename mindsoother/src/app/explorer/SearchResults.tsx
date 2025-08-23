import ArticleCard from "./ArticleCard";

interface SearchResultDataInterface {
    length: number;
    title: string;
    description: string;
    url: string
    results: object [];
}

export default function SearchResults({results}: {results: any []}) {

    const mappedResults = results.map((result, index) => (
        <ArticleCard key={index} title={result.title} description="Placeholder description until we are able to get the proper abstract" url={result.primary_location.landing_page_url} />
    ))

    return (
        <div className="py-7.5 px-5 sm:px-6 lg:px-8">
            <h2 className="font-bold text-[24px] pb-10">Research Articles ({results.length})</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {mappedResults}
            </div>
        </div>
    )
}