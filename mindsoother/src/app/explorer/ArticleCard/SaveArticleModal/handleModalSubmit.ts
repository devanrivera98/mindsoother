import { articleInfo, customArticleInfo } from "./types/saveArticleInterfaces";

export default function handleModalSubmit(
  articleInfo: articleInfo,
  customArticleInfo: customArticleInfo,
) {
  const { title, authors, publishedDate, articleLink } = articleInfo;
  const { folder, dateAdded, notes } = customArticleInfo;
}
