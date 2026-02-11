import Link from 'next/link';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, WHATSAPP_LINK } from '../lib/contact';

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer" data-testid="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="logo" href="/">
            <img className="logo-image" src="/assets/cabana-logo.svg" alt="Cabana Collectives" />
          </Link>
          <p className="text-muted" style={{ marginTop: '0.75rem' }}>
            Global consultancy and international trade firm headquartered in Nairobi, Kenya.
          </p>
          <p className="text-muted" style={{ marginTop: '0.75rem' }}>
            Market entry · Strategic sourcing · Investment facilitation · Trade & logistics
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
            <Link href="/contact" aria-label="Contact">Start a Project</Link>
            <Link href="/insights" aria-label="Insights">Read Insights</Link>
          </div>
          <div style={{ marginTop: '0.9rem' }}>
            <iframe
              title="Nairobi map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.24977486056!2d36.8073!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNairobi!5e0!3m2!1sen!2ske!4v1710000000000"
              width="100%"
              height="170"
              style={{ border: 0, borderRadius: '12px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-muted" style={{ marginTop: '0.6rem' }}>
            East Africa hub for cross-border trade and investment.
          </p>
        </div>
        <div>
          <h3 className="heading" style={{ fontSize: '1rem' }}>Contact</h3>
          <p className="text-muted" style={{ marginTop: '0.75rem' }}>Nairobi HQ · Serving Global Markets</p>
          <p className="text-muted">{CONTACT_EMAIL}</p>
          <p className="text-muted">{CONTACT_PHONE_DISPLAY}</p>
          <a
            href={WHATSAPP_LINK}
            aria-label="WhatsApp Cabana Collectives"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.9rem',
              borderRadius: '999px',
              border: '1px solid currentColor',
              marginTop: '0.75rem',
              textDecoration: 'none',
            }}
          >
            WhatsApp Direct
          </a>
          <p className="text-muted" style={{ marginTop: '0.75rem' }}>Mon–Fri, 08:30–18:00 EAT</p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
            <Link href="#" aria-label="LinkedIn">LinkedIn</Link>
            <Link href="#" aria-label="X">X</Link>
            <Link href="#" aria-label="Facebook">Facebook</Link>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <h4 className="heading" style={{ fontSize: '0.95rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.6rem' }}>
              <Link href="/about" aria-label="About">About</Link>
              <Link href="/services" aria-label="Services">Services</Link>
              <Link href="/industries" aria-label="Industries">Industries</Link>
              <Link href="/contact" aria-label="Contact">Contact</Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="heading" style={{ fontSize: '1rem' }}>Sectors</h3>
          <p className="text-muted" style={{ marginTop: '0.75rem' }}>Agribusiness & food systems</p>
          <p className="text-muted">Energy & industrials</p>
          <p className="text-muted">Infrastructure & logistics</p>
          <p className="text-muted">Technology & digital trade</p>
          <p className="text-muted">Healthcare & consumer goods</p>
          <p className="text-muted" style={{ marginTop: '0.75rem' }}>
            Global partners across Africa, EU, GCC, and North America.
          </p>
        </div>
      </div>
      <small>
        © 2026 Cabana Collectives. All rights reserved. Privacy · Terms · Compliance
      </small>
    </footer>
  );
}
