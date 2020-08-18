import React from 'react';

export const filterArticlesByQuery = (query, articles) => {
  if (!query) return articles;

  const queryParts = query.split(' ');

  return articles.filter((article) =>
    queryParts.some((qry) =>
      article.title.toLowerCase().includes(qry.toLowerCase())
    )
  );
};

export const highlightArticleTitle = (query, articles) => {
  const articlesCopy = JSON.parse(JSON.stringify(articles));

  const highlightedArticles = articlesCopy.map((article) => {
    if (query) {
      const queryParts = query.split(' ');

      queryParts.forEach((query) => {
        if (article.title.includes(query)) {
          const parts = article.title.split(query);

          const joined = parts.reduce((acc, part, index) => {
            acc.push(part);
            if (index < parts.length - 1) {
              acc.push(
                <span style={{ backgroundColor: `yellow` }}>{query}</span>
              );
            }
            return acc;
          }, []);

          article.title = joined;
        }
      });
    }

    return article;
  });

  return highlightedArticles;
};
