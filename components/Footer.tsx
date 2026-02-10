import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer" data-testid="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="logo" href="/">
            <img className="logo-image" src="/assets/cabana-logo.svg" alt="Cabana Collectives" />
          </Link>
          <p className="text-muted" style={{ marginTop: '0.75rem' }}>
            Global consultancy and international trade firm headquartered in Kenya.
          </p>
        </div>
        <div>
          <h4 className="heading" style={{ fontSize: '1rem' }}>Contact</h4>
          <p className="text-muted" style={{ marginTop: '0.75rem' }}>Kenya, Serving Global Markets</p>
          <p className="text-muted">info@cabanacollectives.com</p>
          <p className="text-muted">+254 000 000 000</p>
        </div>
        <div>
          <h4 className="heading" style={{ fontSize: '1rem' }}>Social</h4>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
            <Link href="#" aria-label="LinkedIn">LinkedIn</Link>
            <Link href="#" aria-label="Twitter">Twitter</Link>
            <Link href="#" aria-label="Facebook">Facebook</Link>
          </div>
        </div>
      </div>
      <small>© 2024 Cabana Collectives. All rights reserved.</small>
    </footer>
  );
}

