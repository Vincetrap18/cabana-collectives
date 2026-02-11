import type { Metadata } from 'next';
import Image from 'next/image';
import SectionIcon from '../../components/SectionIcon';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Cabana Collectives for sourcing requests, trade inquiries, and compliance-led procurement support across global markets.'
};

export default function ContactPage() {
  return (
    <>
      <section className="section" aria-labelledby="contact-title">
        <div className="container grid-hero">
          <div className="fade-in">
            <p className="badge">Contact Cabana Collectives</p>
            <h1 id="contact-title" className="heading hero-title" style={{ marginTop: '1rem' }}>
              Start a Sourcing or Trade Conversation
            </h1>
            <p className="lead">
              For sourcing, procurement, or trade partnership inquiries, connect with our team. We respond with structured guidance, timelines, and next steps tailored to your market and compliance requirements.
            </p>
            <p className="lead">
              Our advisory group will review your request, confirm specifications, and provide a clear roadmap for execution, inspection, and delivery.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'grid', gap: '0.5rem' }}>
              <p className="text-muted"><strong className="heading" style={{ color: 'var(--ink)' }}>Headquarters:</strong> Kenya, Serving Global Markets</p>
              <p className="text-muted"><strong className="heading" style={{ color: 'var(--ink)' }}>Email:</strong> info@cabanacollectives.com</p>
              <p className="text-muted"><strong className="heading" style={{ color: 'var(--ink)' }}>Phone:</strong> +254 000 000 000</p>
            </div>
          </div>
          <div className="banner">
            <Image
              src="/images/cabana-brand-coast.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className="banner-image"
            />
            <div className="banner-overlay" aria-hidden="true" />
            <div className="banner-content">
              <h2 className="heading" style={{ fontSize: '1.2rem', color: 'var(--white)' }}>Engagement Response</h2>
              <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Expect confirmation within one business day and a structured action plan aligned to your sourcing objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="engagement-title">
        <div className="container fade-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <SectionIcon name="engagement" />
            <h2 id="engagement-title" className="heading" style={{ fontSize: '1.8rem' }}>Engagement Paths</h2>
          </div>
          <p className="lead">
            We offer two primary engagement paths based on your needs. Each path includes compliance review, supplier verification, and a defined delivery plan before execution begins.
          </p>
          <p className="lead">
            Select the option that best matches your requirements and our team will respond with the appropriate scope, documentation checklist, and timeline.
          </p>
          <div className="grid-two" style={{ marginTop: '2rem' }}>
            <div id="request" className="card">
              <h3 className="heading" style={{ fontSize: '1.25rem' }}>Request Sourcing</h3>
              <p className="lead">
                Ideal for procurement programs that require vetted suppliers, pricing benchmarks, and inspection-ready execution across commodities, chemicals, or industrial materials.
              </p>
              <p className="lead">
                We will align specifications, identify qualified suppliers, and present a structured sourcing roadmap for approval.
              </p>
            </div>
            <div id="inquiry" className="card">
              <h3 className="heading" style={{ fontSize: '1.25rem' }}>Trade Inquiry</h3>
              <p className="lead">
                Designed for buyers and producers seeking structured trading programs, including contract support, inspection oversight, and compliant logistics coordination.
              </p>
              <p className="lead">
                Our team will confirm trade terms, compliance obligations, and delivery milestones to guide execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="form-title">
        <div className="container grid-two">
          <div className="fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <SectionIcon name="contact" />
              <h2 id="form-title" className="heading" style={{ fontSize: '1.8rem' }}>Submit Your Request</h2>
            </div>
            <p className="lead">
              Share your requirements in detail so we can align resources, confirm supplier availability, and provide an execution plan. Include timelines, target markets, and any compliance constraints you must meet.
            </p>
            <p className="lead">
              Our team will respond with clear next steps, documentation requirements, and a coordinated engagement pathway.
            </p>
          </div>
          <form className="card" aria-label="Contact form" data-testid="contact-form" method="post">
            <label className="heading" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your full name" required />

            <label className="heading" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" required />

            <label className="heading" htmlFor="company">Company</label>
            <input id="company" name="company" type="text" placeholder="Company name" />

            <label className="heading" htmlFor="interest">Engagement Type</label>
            <select id="interest" name="interest" required>
              <option value="">Select an option</option>
              <option value="request">Request Sourcing</option>
              <option value="inquiry">Trade Inquiry</option>
              <option value="compliance">Compliance & Governance</option>
            </select>

            <label className="heading" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} placeholder="Tell us about your sourcing or trade needs" required></textarea>

            <button className="btn btn-primary" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
