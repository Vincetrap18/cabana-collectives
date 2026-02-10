import type { Metadata } from 'next';
import { Montserrat, Source_Sans_3 } from 'next/font/google';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      </body>
    </html>
  );
}
