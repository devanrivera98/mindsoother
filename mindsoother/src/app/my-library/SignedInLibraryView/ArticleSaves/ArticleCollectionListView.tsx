import SavedArticleCard from "./SavedArticleCard";

export default function ArticleCollectionListView() {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
        <SavedArticleCard />
        <SavedArticleCard />
      </div>
    </>
  );
}
