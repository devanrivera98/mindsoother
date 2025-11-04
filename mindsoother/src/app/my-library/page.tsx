import { IoBookOutline } from "../components/icons";
import Link from "next/link";
import SignedInLibraryView from "./SignedInLibraryView";
import SignedOutLibraryView from "./SignedOutLibraryView";
export default async function MyLibrary() {
  return (
    <section className="bg-gray-50 min-h-screen">
      <SignedOutLibraryView />
    </section>
  );
}
