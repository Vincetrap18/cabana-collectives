'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/trading', label: 'Trading' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/contact', label: 'Contact' }
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <nav className="nav" aria-label="Main navigation" data-testid="desktop-nav">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              className={`nav-link${isActive ? ' active' : ''}`}
              href={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="cta-group">
        <Link className="btn btn-outline" href="/contact#request">
          Request Sourcing
        </Link>
        <Link className="btn btn-primary" href="/contact#inquiry">
          Trade Inquiry
        </Link>
      </div>

      <button
        className="mobile-toggle"
        aria-label="Toggle navigation"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleToggle}
        data-testid="nav-toggle"
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        id="mobile-menu"
        className={`mobile-menu${isOpen ? ' open' : ''}`}
        aria-hidden={!isOpen}
        data-testid="mobile-menu"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              className={`nav-link${isActive ? ' active' : ''}`}
              href={item.href}
              onClick={handleClose}
            >
              {item.label}
            </Link>
          );
        })}
        <div className="cta-group" style={{ display: 'flex', flexDirection: 'column' }}>
          <Link className="btn btn-outline" href="/contact#request" onClick={handleClose}>
            Request Sourcing
          </Link>
          <Link className="btn btn-primary" href="/contact#inquiry" onClick={handleClose}>
            Trade Inquiry
          </Link>
        </div>
      </div>
    </>
  );
}
