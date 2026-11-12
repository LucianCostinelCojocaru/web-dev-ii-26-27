import { Fragment } from 'react';
import logo from '../assets/logo.svg';
import authorPhoto from '../assets/profile_picture.jpg';
import featuredCover from '../assets/all-encores.jpg';
import articulation from '../assets/articulation.jpg';
import blurred from '../assets/blurred.jpg';
import encoresTwo from '../assets/encores-2.jpg';
import eulogy from '../assets/eulogy-for-evolution.jpg';
import facebook from '../assets/facebook-icon.png';
import instagram from '../assets/instagram-icon.svg';
import twitter from '../assets/twitter-icon.svg';
import {
  articleBlocks,
  biography,
  comments,
  copyright,
  introduction,
  subtitle,
  titleName,
} from './content.js';

// Erased Tapes, Artists and About pages.
// https://www.erasedtapes.com/artists and https://www.erasedtapes.com/about
const navigation = [
  { label: 'Our Blog', href: '#article' },
  { label: 'Our Artists', href: 'https://www.erasedtapes.com/artists' },
  { label: 'Our Story', href: 'https://www.erasedtapes.com/about' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/erasedtapes/', icon: facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/erasedtapesrecords/', icon: instagram },
  { label: 'X (Twitter)', href: 'https://x.com/ErasedTapes', icon: twitter },
];

const albums = [
  { name: 'All Encores', cover: featuredCover },
  { name: 'Articulation', cover: articulation },
  { name: 'Blurred', cover: blurred },
  { name: 'Encores 2', cover: encoresTwo },
  { name: 'Eulogy for Evolution', cover: eulogy },
];

function SiteNavigation({ label }) {
  return (
    <nav aria-label={label} className="site-nav">
      <ul>
        {navigation.map(({ label: linkText, href }) => (
          <li key={href}><a href={href}>{linkText}</a></li>
        ))}
      </ul>
    </nav>
  );
}

function SocialLinks({ label }) {
  return (
    <ul className="social-links" aria-label={label}>
      {socialLinks.map(({ label: linkText, href, icon }) => (
        <li key={href}>
          <a href={href}>
            <img src={icon} width="50" height="50" alt={linkText} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <img className="site-logo" src={logo} width="200" height="200" alt="Erased Tapes Records" />
      <SiteNavigation label="Main navigation" />
    </header>
  );
}

function ArticleText() {
  return (
    <div className="article-text">
      <h1>{titleName}: <span>{subtitle}</span></h1>
      <p className="introduction">{introduction}</p>
      <div className="article-columns">
        {articleBlocks.map(({ type, text }, index) => (
          <Fragment key={index}>
            {type === 'heading' ? <h2>{text}</h2> : <p>{text}</p>}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function AlbumGallery() {
  return (
    <figure className="album-gallery" aria-label="Selected Erased Tapes album covers">
      {albums.map(({ name, cover }) => (
        <img key={name} src={cover} alt={`${name} album cover`} width="1440" height="1440" />
      ))}
    </figure>
  );
}

function AuthorBio() {
  return (
    <section className="author" aria-labelledby="author-heading">
      <div className="author-text">
        <h2 id="author-heading">The Author</h2>
        <p>{biography}</p>
      </div>
      <img className="author-photo" src={authorPhoto} alt="Portrait of the article author" width="200" height="200" />
      <SocialLinks label="Author section social links" />
    </section>
  );
}

function Comments() {
  return (
    <section className="comments" aria-labelledby="comments-heading">
      <h2 id="comments-heading">Comments</h2>
      <ul className="comment-list">
        {comments.map(({ name, text }) => (
          <li key={name}>
            <p className="comment-name">{name}</p>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <SiteNavigation label="Footer navigation" />
      <p>{copyright}</p>
      <SocialLinks label="Footer social links" />
    </footer>
  );
}

export default function App() {
  return (
    <>
      <SiteHeader />
      <main className="page-content">
        <article id="article">
          <ArticleText />
          <AlbumGallery />
          <AuthorBio />
        </article>
        <Comments />
      </main>
      <SiteFooter />
    </>
  );
}
