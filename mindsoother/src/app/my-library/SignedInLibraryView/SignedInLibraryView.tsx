import { UserArticlesType } from "./ArticleSaves/types/UserArticleTypes";
import getUserFolderList from "./helpers/getUserFolderList";
import LibraryDashboardClient from "./LibraryDashboardClient";

export default async function SignedInLibraryView({
  userArticles,
}: {
  userArticles: UserArticlesType[] | [];
}) {
  const userFolderListResults = await getUserFolderList();
  const userFolderList = userFolderListResults.data;

  return (
    <div className="z-2">
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-center text-white  px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Your Saved Techniuqes</h1>
        <p className="mt-4 text-xl text-indigo-100">
          Organize and revisit your saved psychology research
        </p>
      </div>
      <LibraryDashboardClient userArticles={userArticles} userFolderList={userFolderList} />
    </div>
  );
}
