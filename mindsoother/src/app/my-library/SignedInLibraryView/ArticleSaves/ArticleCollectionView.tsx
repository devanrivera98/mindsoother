import { useEffect, useState } from "react";
import ArticleCollectionEmptyView from "./ArticleCollectionEmptyView";
import ArticleCollectionListView from "./ArticleCollectionListView";
import { UserArticlesType } from "./types/UserArticleTypes";

export default function ArticleCollectionView({
  userArticles,
  setUserArticlesState,
}: {
  userArticles: UserArticlesType[] | [];
  setUserArticlesState: (input: UserArticlesType[]) => void;
}) {
  const [isViewEmpty, setIsViewEmpty] = useState(userArticles.length === 0);

  useEffect(() => {
    if (userArticles.length === 0) {
      setIsViewEmpty(true);
    } else {
      setIsViewEmpty(false);
    }
  }, [userArticles]);

  return (
    <>
      {isViewEmpty ? (
        <ArticleCollectionEmptyView />
      ) : (
        <ArticleCollectionListView
          userArticles={userArticles}
          setUserArticlesState={setUserArticlesState}
        />
      )}
    </>
  );
}
