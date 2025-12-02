import { useEffect, useState } from "react";
import ArticleCollectionEmptyView from "./ArticleCollectionEmptyView";
import ArticleCollectionListView from "./ArticleCollectionListView";
import { UserArticlesType } from "./types/UserArticleTypes";

export default function ArticleCollectionView({
  userArticles,
}: {
  userArticles: UserArticlesType[] | [];
}) {
  const [userArticlesState, setUserArticlesState] =
    useState<UserArticlesType[]>(userArticles);
  const [isViewEmpty, setIsViewEmpty] = useState(
    userArticlesState.length === 0,
  );

  useEffect(() => {
    if (userArticlesState.length === 0) {
      setIsViewEmpty(true);
    } else {
      setIsViewEmpty(false);
    }
  }, [userArticlesState]);

  return (
    <>
      {isViewEmpty ? (
        <ArticleCollectionEmptyView />
      ) : (
        <ArticleCollectionListView
          userArticles={userArticlesState}
          setUserArticlesState={setUserArticlesState}
        />
      )}
    </>
  );
}
