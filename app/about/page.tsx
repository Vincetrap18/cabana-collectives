import type { Metadata } from 'next';
import Image from 'next/image';
import SectionIcon from '../../components/SectionIcon';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Cabana Collectives, our mission, leadership, and global trade advisory approach based in Kenya.'
};

export default function AboutPage() {
  return (
    <>
      <section className="section" aria-labelledby="about-hero-title">
        <div className="container grid-hero">
          <div className="fade-in">
            <p className="badge">Who We Are</p>
            <h1 id="about-hero-title" className="heading hero-title" style={{ marginTop: '1rem' }}>
              Global Advisory With Trade Execution Discipline
            </h1>
            <p className="lead">
              Cabana Collectives is a global consultancy and international trade firm headquartered in Kenya. We design procurement and trading programs for clients who need dependable supply, verified counterparties, and clear compliance guardrails.
            </p>
            <p className="lead">
              Our teams span sourcing, chemicals, commodities, industrial materials, and sustainability-focused markets. We balance local intelligence with international standards to ensure transactions are traceable, measurable, and aligned to long-term partnerships.
            </p>
          </div>
          <div className="card-brand">
            <h2 className="heading" style={{ fontSize: '1.2rem' }}>Headquarters & Reach</h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Nairobi-based teams coordinate supply across East Africa, the Middle East, and Asia, supported by trusted logistics and inspection partners.
            </p>
            <div className="media-frame" style={{ marginTop: '1.25rem' }}>
              <Image
                src="/images/team.png"
                alt="Cabana Collectives leadership and advisory team"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="mission-title">
        <div className="container fade-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <SectionIcon name="mission" />
            <h2 id="mission-title" className="heading" style={{ fontSize: '1.8rem' }}>Mission & Principles</h2>
          </div>
          <p className="lead">
            Our mission is to deliver trusted market access and procurement stability for global partners. We do this by building transparent trade frameworks, enforcing compliance requirements, and prioritizing quality assurance across every engagement.
          </p>
          <p className="lead">
            Cabana Collectives is guided by a commitment to accountability, clarity, and shared value creation. We treat every engagement as a long-term partnership and design operational models that protect stakeholders throughout the trade lifecycle.
          </p>
          <div className="grid-three" style={{ marginTop: '2rem' }}>
            <div className="card">
              <p className="heading">Integrity</p>
              <p className="lead">Transparent documentation, verified suppliers, and disciplined governance.</p>
            </div>
            <div className="card">
              <p className="heading">Execution</p>
              <p className="lead">Structured milestones, inspection controls, and accountable delivery.</p>
            </div>
            <div className="card">
              <p className="heading">Partnership</p>
              <p className="lead">Collaborative planning that aligns buyer needs with supplier capacity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="market-title">
        <div className="container grid-two">
          <div className="fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <SectionIcon name="market" />
              <h2 id="market-title" className="heading" style={{ fontSize: '1.8rem' }}>Market Position & Network</h2>
            </div>
            <p className="lead">
              Cabana Collectives leverages strategic port access, regional trade agreements, and long-term supplier relationships to provide dependable market coverage. We support clients with intelligence on pricing movements, availability trends, and regional compliance updates.
            </p>
            <p className="lead">
              Our network includes producers, processors, logistics providers, inspection firms, and compliance advisors. This ecosystem gives clients access to responsive supply corridors while maintaining strict governance standards.
            </p>
          </div>
          <div className="card">
            <h3 className="heading" style={{ fontSize: '1.25rem' }}>Corridor Highlights</h3>
            <ul style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
              <li className="pill">Mombasa corridor access for East Africa trade execution.</li>
              <li className="pill">COMESA and AfCFTA advantages for regional scale.</li>
              <li className="pill">Gulf and Asia supply routes for chemicals and commodities.</li>
              <li className="pill">Strategic logistics partnerships for last-mile delivery.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="leadership-title">
        <div className="container fade-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <SectionIcon name="leadership" />
            <h2 id="leadership-title" className="heading" style={{ fontSize: '1.8rem' }}>Leadership & Advisory Bench</h2>
          </div>
          <p className="lead">
            Our leadership teams bring experience across procurement, trade compliance, supply chain governance, and cross-border logistics. We combine corporate advisory experience with hands-on trade execution to deliver solutions that perform in real market conditions.
          </p>
          <p className="lead">
            Advisory support includes commercial structuring, compliance alignment, and risk management frameworks tailored to each client sector. This ensures stakeholders receive actionable guidance and clear operating guardrails.
          </p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="approach-title">
        <div className="container grid-two">
          <div className="fade-in">
            <h2 id="approach-title" className="heading" style={{ fontSize: '1.8rem' }}>How We Work</h2>
            <p className="lead">
              We begin each engagement with a structured discovery process to align specifications, volumes, and timelines. This allows us to match suppliers with measurable capabilities and build clear procurement roadmaps.
            </p>
            <p className="lead">
              Execution is managed through cross-functional teams that oversee inspection readiness, documentation accuracy, and delivery timelines. We maintain direct communication with stakeholders to resolve issues before they impact performance.
            </p>
          </div>
          <div className="card">
            <h3 className="heading" style={{ fontSize: '1.25rem' }}>Engagement Commitments</h3>
            <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
              <div className="pill">
                <strong className="heading" style={{ display: 'block', color: 'var(--ink)' }}>Structured Reporting</strong>
                Milestone updates, compliance reviews, and post-trade summaries.
              </div>
              <div className="pill">
                <strong className="heading" style={{ display: 'block', color: 'var(--ink)' }}>Quality Assurance</strong>
                Inspection coordination and documentation review before shipment release.
              </div>
              <div className="pill">
                <strong className="heading" style={{ display: 'block', color: 'var(--ink)' }}>Risk Controls</strong>
                Verification of counterparties and compliance alignment for each trade.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
