import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="header" aria-label="Primary">
      <div className="container header-inner">
        <Link className="logo" href="/" aria-label="Cabana Collectives home">
          <img className="logo-image" src="/assets/cabana-logo.svg" alt="Cabana Collectives" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

