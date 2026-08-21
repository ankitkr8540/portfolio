import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../../posts';

function GiscusComments() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'ankitkr8540/portfolio');
    script.setAttribute('data-repo-id', 'R_kgDOL_prfg');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOL_prfs4DD5qg');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'dark_dimmed');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} />;
}

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="blog-page">
        <div className="blog-page-inner" style={{ textAlign: 'center', paddingTop: '80px' }}>
          <h2 style={{ color: 'white' }}>Post not found.</h2>
          <button className="blog-back-btn" onClick={() => navigate('/blogs')} style={{ marginTop: '16px' }}>
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const { title, date, tags } = post.meta;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
  const readingTime = Math.ceil(post.content.split(/\s+/).length / 200);

  return (
    <div className="blog-page">
      <div className="blog-page-inner">

        <div className="blog-post-nav">
          <button className="blog-back-btn" onClick={() => navigate('/blogs')}>
            ← All Posts
          </button>
        </div>

        <article className="blog-post-article">
          <header className="blog-post-article-header">
            <div className="blog-article-tags" style={{ marginBottom: '16px' }}>
              {tags.map((tag) => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
            <h1 className="blog-post-article-title">{title}</h1>
            <div className="blog-article-meta" style={{ marginTop: '12px' }}>
              <span className="blog-article-date">{formattedDate}</span>
              <span className="blog-article-dot">·</span>
              <span className="blog-article-read">{readingTime} min read</span>
            </div>
          </header>

          <div className="blog-post-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </article>

        <div className="blog-comments-section">
          <h2>Discussion</h2>
          <p className="blog-comments-hint">Sign in with GitHub to leave a comment.</p>
          <GiscusComments />
        </div>

      </div>
    </div>
  );
}

export default BlogPost;
