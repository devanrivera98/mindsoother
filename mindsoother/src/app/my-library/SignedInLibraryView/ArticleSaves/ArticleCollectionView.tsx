import { useState } from "react";
import ArticleCollectionEmptyView from "./ArticleCollectionEmptyView";
import ArticleCollectionListView from "./ArticleCollectionListView";
import { UserArticlesType } from "./types/UserArticleTypes";

export default function ArticleCollectionView({
  userArticles,
  setUserArticlesState
}: {
  userArticles: UserArticlesType[] | [];
  setUserArticlesState: (input: UserArticlesType[]) => void;
}) {
  const [isViewEmpty, setIsViewEmpty] = useState(userArticles.length === 0);

  return (
    <>
      {isViewEmpty ? (
        <ArticleCollectionEmptyView />
      ) : (
        <ArticleCollectionListView userArticles={userArticles} setUserArticlesState={setUserArticlesState} />
      )}
    </>
  );
}
