import { useEffect, useState } from "react";
import ArticleCollectionEmptyView from "./ArticleCollectionEmptyView";
import ArticleCollectionListView from "./ArticleCollectionListView";
import { UserArticlesType } from "./types/UserArticleTypes";
import { userFolderListType } from "./types/userFolderListType";

export default function ArticleCollectionView({
  userArticlesState,
  setUserArticlesState,
}: {
  userArticlesState: UserArticlesType[] | [];
  setUserArticlesState: (input: UserArticlesType[]) => void;
  existingFolders: userFolderListType[] | [];
}) {
  // const [userArticlesState, setUserArticlesState] =
  //   useState<UserArticlesType[]>(userArticles);
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
