import React from 'react';
import './Articles.scss';

function Articles({ articles }) {
  return (
    <div data-testid='articles' className='Articles'>
      {articles.map((article, i) => (
        <div className='Article-wrapper' key={i}>
          <article key={article.id} className='Article'>
            <div
              className='Article-image'
              style={{ backgroundImage: `url(${article.imageUrl})` }}
            />
            <div className='Article-content'>
              <h2 className='Article-title'>{article.title}</h2>
              <p className='Article-description'>{article.description}</p>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export default Articles;
