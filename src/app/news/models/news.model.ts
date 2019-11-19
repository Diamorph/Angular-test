export interface NewsModel {
  articles: Array<ArticleModel>;
  status: string;
  totalResults: number;
}

export interface ArticleModel {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string,
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}
