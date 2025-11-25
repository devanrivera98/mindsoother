import SignedInLibraryView from "./SignedInLibraryView/SignedInLibraryView";
import SignedOutLibraryView from "./SignedOutLibraryView";
import serverGetUser from "@/lib/helper/serverGetUser";
import getUserArticles from "./SignedInLibraryView/ArticleSaves/helpers/getUserArticles";

export default async function MyLibrary() {
  const data = await serverGetUser();
  let userArticles = [];

  if (data) {
    userArticles = await getUserArticles();
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      {data === null ? (
        <SignedOutLibraryView />
      ) : (
        <SignedInLibraryView userArticles={userArticles} />
      )}
    </section>
  );
}
