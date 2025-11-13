"use client";

export default function UserFolderOptionsClient({
  folders,
}: {
  folders: { name: string }[];
}) {
  const folderMap = folders?.map((folder, index) => (
    <option key={index} value={folder.name}>
      {folder.name}
    </option>
  ));

  return <>{folderMap}</>;
}
