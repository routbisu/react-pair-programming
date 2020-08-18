import React, { useState } from 'react';
import data from './data/data.json';

import Articles from './components/Articles';
import Search from './components/Search';

import './App.scss';
import {
  filterArticlesByQuery,
  highlightArticleTitle,
} from './services/search-service';

// function filterArticlesByQuery(query, articles) {
//   if (!query) return articles;

//   return articles.filter((article) => article.title.includes(query));
// }

// function highlightArticleTitle(query, articles) {
//   const articlesCopy = JSON.parse(JSON.stringify(articles));

//   const highlightedArticles = articlesCopy.map((article) => {
//     if (query && article.title.includes(query)) {
//       const parts = article.title.split(query);
//       const joined = parts.reduce((acc, part, index) => {
//         acc.push(part);
//         if (index < parts.length - 1) {
//           acc.push(<span style={{ backgroundColor: `yellow` }}>{query}</span>);
//         }
//         return acc;
//       }, []);

//       article.title = joined;
//     }
//     return article;
//   });

//   return highlightedArticles;
// }

function App() {
  const [query, setQuery] = useState();

  const filteredArticles = filterArticlesByQuery(query, data.articles);

  const filteredArticlesWithHighlights = highlightArticleTitle(
    query,
    filteredArticles
  );

  return (
    <div className='App'>
      <h1 className='App-title'>Resource Center</h1>
      <section className='App-search'>
        <Search value={query} onQueryChange={setQuery} />
      </section>
      <section className='App-articles'>
        <Articles articles={filteredArticlesWithHighlights} />
      </section>
    </div>
  );
}

export default App;
