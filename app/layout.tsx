import type { Metadata } from 'next';
import { Montserrat, Source_Sans_3 } from 'next/font/google';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { WHATSAPP_LINK } from '../lib/contact';

const headingFont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading'
});

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cabanacollectives.com'),
  title: {
    default: 'Cabana Collectives | Global Consultancy & International Trade',
    template: '%s | Cabana Collectives'
  },
  description:
    'Cabana Collectives is a global consultancy and international trade firm delivering structured procurement, compliant trade execution, and risk-managed logistics across global markets.',
  openGraph: {
    title: 'Cabana Collectives | Global Consultancy & International Trade',
    description:
      'Structured sourcing, compliant trade execution, and risk-managed logistics for global buyers and producers.',
    type: 'website',
    locale: 'en_KE',
    siteName: 'Cabana Collectives'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabana Collectives | Global Consultancy & International Trade',
    description:
      'Structured sourcing, compliant trade execution, and risk-managed logistics for global buyers and producers.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} ${headingFont.variable}`}>
        <a className="skip-link" href="#main">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <a
          className="whatsapp-float"
          href={WHATSAPP_LINK}
          aria-label="Chat on WhatsApp"
          target="_blank"
          rel="noreferrer"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M19.11 17.7c-.22-.11-1.31-.64-1.51-.71-.2-.07-.35-.11-.5.11-.15.22-.58.71-.71.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.69-1.64-.18-.43-.36-.37-.5-.37h-.43c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.86 0 1.1.8 2.16.91 2.31.11.15 1.57 2.4 3.8 3.36.53.23.94.37 1.26.47.53.17 1.01.15 1.39.09.42-.06 1.31-.53 1.5-1.04.19-.5.19-.94.13-1.04-.06-.1-.2-.15-.42-.26zM16.01 4.5c-6.35 0-11.51 5.16-11.51 11.51 0 2.04.53 4.03 1.54 5.79L4 28l6.38-1.95c1.7.93 3.61 1.41 5.63 1.41 6.35 0 11.51-5.16 11.51-11.51S22.36 4.5 16.01 4.5zm0 20.77c-1.82 0-3.6-.5-5.14-1.45l-.37-.22-3.78 1.16 1.2-3.69-.24-.38a9.62 9.62 0 0 1-1.51-5.17c0-5.32 4.33-9.65 9.65-9.65 5.32 0 9.65 4.33 9.65 9.65 0 5.32-4.33 9.65-9.65 9.65z"
            />
          </svg>
        </a>
      </body>
    </html>
  );
}
