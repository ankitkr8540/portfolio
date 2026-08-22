import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaTwitter, FaLinkedinIn, FaLink } from 'react-icons/fa';
import { getPostBySlug } from '../../posts';

// ── Utilities ──────────────────────────────────────────────────────────────

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function extractHeadings(content) {
  const matches = [...content.matchAll(/^##\s+(.+)$/gm)];
  return matches.map((m) => {
    const text = m[1].trim();
    return { text, id: slugify(text) };
  });
}

// Custom ReactMarkdown heading renderers — inject id so TOC links + observer work
const headingComponents = {
  h2: ({ children }) => {
    const text = typeof children === 'string' ? children : String(children);
    return <h2 id={slugify(text)}>{children}</h2>;
  },
  h3: ({ children }) => {
    const text = typeof children === 'string' ? children : String(children);
    return <h3 id={slugify(text)}>{children}</h3>;
  },
};

// ── Giscus ─────────────────────────────────────────────────────────────────

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

// ── Table of Contents ──────────────────────────────────────────────────────

function TableOfContents({ headings, activeId, onLinkClick }) {
  if (headings.length === 0) return null;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    onLinkClick(id);
  };

  return (
    <aside className="blog-toc">
      <p className="blog-toc-label">On This Page</p>
      <ul className="blog-toc-list">
        {headings.map((h) => (
          <li
            key={h.id}
            className={`blog-toc-item${activeId === h.id ? ' active' : ''}`}
          >
            <button className="blog-toc-link" onClick={() => scrollTo(h.id)}>
              {h.text}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// ── Share Bar ──────────────────────────────────────────────────────────────

function ShareBar({ title, excerpt, tags }) {
  const [copied, setCopied] = useState(false);
  const url = window.location.href;

  const hashtags = (tags || [])
    .map((t) => t.replace(/\s+/g, ''))
    .join(',');

  const tweetText = `${title}\n\n${excerpt}`;

  const twitterUrl =
    `https://twitter.com/intent/tweet` +
    `?text=${encodeURIComponent(tweetText)}` +
    `&url=${encodeURIComponent(url)}` +
    (hashtags ? `&hashtags=${encodeURIComponent(hashtags)}` : '');

  const linkedInUrl =
    `https://www.linkedin.com/shareArticle?mini=true` +
    `&url=${encodeURIComponent(url)}` +
    `&title=${encodeURIComponent(title)}` +
    `&summary=${encodeURIComponent(excerpt || '')}`;

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="blog-share-bar">
      <span className="blog-share-label">Share</span>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noreferrer"
        className="blog-share-btn"
        aria-label="Share on X"
      >
        <FaTwitter size={14} />
      </a>
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noreferrer"
        className="blog-share-btn"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedinIn size={14} />
      </a>
      <button className="blog-share-copy" onClick={copyLink}>
        <FaLink size={11} />
        {copied ? 'Copied!' : 'Copy link'}
      </button>
    </div>
  );
}

// ── BlogPost ───────────────────────────────────────────────────────────────

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);
  const [activeId, setActiveId] = useState('');
  const ignoreScrollUntil = useRef(0);

  const headings = post ? extractHeadings(post.content) : [];

  // Scroll tracker — active = last heading whose top crossed the navbar
  useEffect(() => {
    if (headings.length === 0) return;

    const OFFSET = 100;

    const handleScroll = () => {
      // Don't override an explicit click for 1 second
      if (Date.now() < ignoreScrollUntil.current) return;

      // At bottom of page → last heading is active
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 60;
      if (atBottom) {
        setActiveId(headings[headings.length - 1].id);
        return;
      }

      let current = headings[0].id;
      for (const { id } of headings) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= OFFSET) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

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

  const { title, date, tags, excerpt } = post.meta;
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

        <div className="blog-post-layout">
          {/* ── Sidebar TOC (left) ── */}
          <TableOfContents
            headings={headings}
            activeId={activeId}
            onLinkClick={(id) => {
              setActiveId(id);
              ignoreScrollUntil.current = Date.now() + 1000;
            }}
          />

          {/* ── Main article ── */}
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

            <ShareBar title={title} excerpt={excerpt} tags={tags} />

            <div className="blog-post-body">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={headingComponents}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>

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
