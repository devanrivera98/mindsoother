import SavedArticleCard from "./SavedArticleCard";
import { UserArticlesType } from "./types/UserArticleTypes";

export default function ArticleCollectionListView({
  userArticles,
  setUserArticlesState
}: {
  userArticles: UserArticlesType[] | [];
  setUserArticlesState: (input: UserArticlesType[]) => void;
}) {
  const userArticlesMap = userArticles.map((article, index) => (
    <div key={index}>
      <SavedArticleCard article={article} setUserArticlesState={setUserArticlesState} />
    </div>
  ));

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
        {userArticlesMap}
      </div>
    </>
  );
}
