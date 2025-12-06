export type articleInfo = {
  title: string;
  authors: string;
  publishedDate: string;
  articleLink: string;
};

export type customArticleInfo = {
  folderId: number | null;
  folderName: string;
  dateAdded: string;
  notes?: string | null;
};

export type allArticleInfo = articleInfo & customArticleInfo;
