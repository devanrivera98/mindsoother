import SignedInLibraryView from "./SignedInLibraryView";
import SignedOutLibraryView from "./SignedOutLibraryView";
import serverGetUser from "@/lib/helper/serverGetUser";

export default async function MyLibrary() {

  const data = await serverGetUser();

  return (
    <section className="bg-gray-50 min-h-screen">
      {data === null  ? 
      <SignedOutLibraryView />
      :
      <SignedInLibraryView />
    }
    </section>
  );
}
