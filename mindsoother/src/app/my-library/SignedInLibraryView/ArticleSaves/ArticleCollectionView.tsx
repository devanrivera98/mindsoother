import { useState } from "react";
import ArticleCollectionEmptyView from "./ArticleCollectionEmptyView";
import ArticleCollectionListView from "./ArticleCollectionListView";

export default function ArticleCollectionView() {
  const [isViewEmpty, setIsViewEmpty] = useState(false);

  return (
    <>
      {isViewEmpty ? (
        <ArticleCollectionEmptyView />
      ) : (
        <ArticleCollectionListView />
      )}
    </>
  );
}
