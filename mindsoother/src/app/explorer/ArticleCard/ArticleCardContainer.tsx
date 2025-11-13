import ArticleCard from "./ArticleCard";
import { createServerClient } from "@/lib/supabase/server";

interface abstractInterface {
  [key: string]: number[];
}

interface ArticleCardInterface {
  abstractIndex: abstractInterface;
  title: string;
  authors: string;
  publishDate: string;
  url: string;
}

export default async function ArticleCardContainer({
  abstractIndex,
  title,
  url,
  publishDate,
  authors,
}: ArticleCardInterface) {
  const supabase = await createServerClient();

  const { data, error } = await supabase.from("folders").select();

  console.log(data);

  // return (
  //     <ArticleCard abstractIndex={abstractIndex} title={title} url={url} publishDate={publishDate} authors={authors}/>
  // )
}
