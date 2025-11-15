import {
  IoCalendarClearOutline,
  IoPersonOutline,
  LuBookmark,
  TfiNewWindow,
} from "../../components/icons";
import buildAbstractFromIndex from "../helpers/buildAbstractFromIndex";
import BookmarkButton from "./BookmarkButton";
import { UserFolderInterface } from "../interface/explorerInterface";

interface abstractInterface {
  [key: string]: number[];
}

interface ArticleCardInterface {
  abstractIndex: abstractInterface;
  title: string;
  authors: string;
  publishDate: string;
  url: string;
  isThereUser: boolean;
  folders: UserFolderInterface[];
  setFolders: (folders: UserFolderInterface[]) => void;
}

export default function ArticleCard({
  abstractIndex,
  title,
  url,
  publishDate,
  authors,
  folders,
  setFolders,
  isThereUser,
}: ArticleCardInterface) {
  const abstract = buildAbstractFromIndex(abstractIndex);

  return (
    <article className="p-5 bg-white shadow-lg rounded flex flex-col">
      <div className="flex justify-end">
        <BookmarkButton
          folders={folders}
          setFolders={setFolders}
          isThereUser={isThereUser}
        />
      </div>
      <h3 className="font-semibold text-xl pr-5">{title}</h3>
      <div className="flex pt-3  gap-x-4 font-medium text-gray-700">
        <div className="flex items-center gap-x-2">
          <div>
            <IoPersonOutline fontSize={16} />
          </div>
          <span className="pr-2">{authors}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <IoCalendarClearOutline fontSize={16} />
          <span>{publishDate}</span>
        </div>
      </div>
      <div className="py-5 flex-grow-1 font-medium text-gray-700">
        <p>
          {abstract.length > 125
            ? abstract.substring(0, 125) + "..."
            : abstract}{" "}
        </p>
      </div>
      <div className="text-brand-purple">
        <a href={url} target="_blank" className="flex items-center gap-x-1">
          Read Full Article
          <TfiNewWindow fontSize={15} className="-translate-y-px" />
        </a>
      </div>
    </article>
  );
}
