import SavedArticleCard from "./SavedArticleCard";
import { UserArticlesType } from "./types/UserArticleTypes";
import { userFolderListType } from "./types/userFolderListType";

export default function ArticleCollectionListView({
  userArticles,
  setUserArticlesState,
  folderFilter,
  existingFolders
}: {
  userArticles: UserArticlesType[] | [];
  setUserArticlesState: (input: UserArticlesType[]) => void;
  folderFilter: string | number;
  existingFolders: userFolderListType[] | [];
}) {
  let folderFilterList;
  if (folderFilter !== "all") {
    folderFilterList = userArticles.filter(
      (folder) => Number(folder.folder_id) === Number(folderFilter),
    );
  } else {
    folderFilterList = userArticles;
  }

  const userArticlesMap = folderFilterList.map((article, index) => (
    <div key={index}>
      <SavedArticleCard
        article={article}
        setUserArticlesState={setUserArticlesState}
        existingFolders={existingFolders}
      />
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
