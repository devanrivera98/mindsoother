import { useState } from "react";
import ArticleCollectionEmptyView from "./ArticleCollectionEmptyView";
import ArticleCollectionListView from "./ArticleCollectionListView";
import { UserArticlesType } from "./types/UserArticleTypes";

export default function ArticleCollectionView({
  userArticles,
}: {
  userArticles: UserArticlesType[] | [];
}) {
  const [isViewEmpty, setIsViewEmpty] = useState(false);

  return (
    <>
      {isViewEmpty ? (
        <ArticleCollectionEmptyView />
      ) : (
        <ArticleCollectionListView userArticles={userArticles} />
      )}
    </>
  );
}
