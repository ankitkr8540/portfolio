import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts } from '../../posts';

function BlogList() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(posts.map((p) => p.meta.category).filter(Boolean))];

  const filtered =
    activeFilter === 'All'
      ? posts
      : posts.filter((p) => p.meta.category === activeFilter);

  return (
    <div className="blog-page">
      <div className="blog-page-inner">
        <div className="blog-list-header">
          <h1>My <strong className="purple">Blogs</strong></h1>
          <p>Learning something new every day — writing it down so I don't forget.</p>
        </div>

        <div className="blog-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`blog-filter-btn${activeFilter === cat ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-article-list">
          {filtered.map((post) => {
            const { title, date, slug, tags, excerpt } = post.meta;
            const formattedDate = new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            const readingTime = Math.ceil(post.content.split(/\s+/).length / 200);

            return (
              <article
                key={slug}
                className="blog-article-item"
                onClick={() => navigate(`/blogs/${slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') navigate(`/blogs/${slug}`);
                }}
              >
                <div className="blog-article-meta">
                  <span className="blog-article-date">{formattedDate}</span>
                  <span className="blog-article-dot">·</span>
                  <span className="blog-article-read">{readingTime} min read</span>
                </div>
                <h2 className="blog-article-title">{title}</h2>
                <p className="blog-article-excerpt">{excerpt}</p>
                <div className="blog-article-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
