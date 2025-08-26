import ArticleCard from "./ArticleCard";

interface Author {
  raw_author_name: string;
}

interface Result {
  title: string;
  publication_year: string;
  primary_location: { landing_page_url: string };
  authorships: Author[];
  [key: string]: any; // allow unknown extra properties
}

export default function SearchResults({ results }: { results: Result[] }) {
  const mappedResults = results.map((result, index) => {
    const authors = result.authorships;
    let authorsString;
    if (authors.length === 0) {
      authorsString = "Not Provided";
    } else {
      const allAuthors = authors.map((author: any) => {
        return author.raw_author_name;
      });
      if (allAuthors.length > 3) {
        const slicedAuthors = allAuthors.slice(0, 3);
        authorsString = slicedAuthors.join(", ") + ", et al.";
      } else {
        authorsString = allAuthors.join(", ");
      }
    }

    return (
      <ArticleCard
        key={index}
        title={result.title}
        abstractIndex={result.abstract_inverted_index}
        url={result.primary_location.landing_page_url}
        publishDate={result.publication_year}
        authors={authorsString}
      />
    );
  });

  return (
    <div className="py-7.5 px-5 sm:px-6 lg:px-8">
      <h2 className="font-bold text-[24px] pb-10">
        Research Articles ({results.length})
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {mappedResults}
      </div>
    </div>
  );
}
