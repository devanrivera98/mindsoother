export type articleInfo = {
  title: string;
  authors: string;
  publishedDate: string;
  articleLink: string;
};

export type customArticleInfo = {
  folder: string;
  dateAdded: string;
  notes?: string;
};

export type allArticleInfo = articleInfo & customArticleInfo;
