import { films } from './content.js';

const genres = ['Action', 'Comedy', 'Romance', 'Drama'];

function SiteHeader() {
  return (
    <header className="site-header">
      <h1 className="wordmark">watch.it</h1>
      <ul className="genres" aria-label="Genres">
        {genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
      <button className="search-button" type="button">Search</button>
    </header>
  );
}

function MovieCard({ film }) {
  return (
    <article className="movie-card">
      <img className="movie-poster" src={film.poster} alt={`${film.title} film poster`} />
      <div className="movie-details">
        <div>
          <h2>{film.title}</h2>
          <p>{film.description}</p>
        </div>
        <button className="watch-button" type="button" aria-label={`Watch now: ${film.title}`}>
          <span>Watch</span>{' '}<span>Now</span>
        </button>
      </div>
    </article>
  );
}

function MovieCatalogue() {
  return (
    <main className="catalogue" aria-label="Film catalogue">
      {films.map((film) => <MovieCard key={film.title} film={film} />)}
    </main>
  );
}

export default function App() {
  return (
    <>
      <SiteHeader />
      <MovieCatalogue />
    </>
  );
}
