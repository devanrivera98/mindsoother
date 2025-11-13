import { getUser } from "@/app/components/header/helper/getUser";
import { createServerClient } from "@/lib/supabase/server";

import UserFolderOptionsClient from "./UserFolderOptionClient";

export default async function UserFolderOptions() {
  const supabase = await createServerClient();

  const { data, error } = await supabase.from("folders").select();

  console.log(data);

  const folders = [{ name: "First" }, { name: "Second" }];

  return (
    <>
      <UserFolderOptionsClient folders={folders} />
    </>
  );
}
// redo the component its going to need to be server side to prevent that 3000ms delay for any options to be displayed on the frontend. That data will need to be passed to a  client component.

// const [folders, setFolders] = useState<JSX.Element[]>([])

//   useEffect(() => {

//     async function getFolders() {

//         const {
//             data: { user },
//           } = await supabaseClient.auth.getUser();

//         const {data, error} = await supabaseClient.from('folders').select();

//         if (data) {
//             console.log(data[0].name)
//         }

//         const folderMap = data?.map((folder, index) => (
//           <option key={index} value={folder.name}>{folder.name}</option>
//         ))

//         return setFolders(folderMap || [])
//       }

//       getFolders();

//   }, [])

// return (
//     <>
//     {folders}
//     </>
// )
// }
