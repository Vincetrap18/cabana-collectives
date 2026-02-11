import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionIcon from '../components/SectionIcon';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Cabana Collectives delivers structured procurement and compliant trade execution for producers, processors, and global buyers across Africa, the Middle East, and Asia.'
};

export default function HomePage() {
  return (
    <>
      <section className="section" aria-labelledby="hero-title">
        <div className="container grid-hero">
          <div className="fade-in">
            <p className="badge">Headquartered in Kenya, operating globally</p>
            <h1 id="hero-title" className="heading hero-title" style={{ marginTop: '1rem' }}>
              Cabana Collectives
              <span className="text-muted" style={{ display: 'block', marginTop: '0.75rem', fontSize: '1rem', fontWeight: 500 }}>
                Global Consultancy | Strategic Sourcing | International Trade
              </span>
            </h1>
            <p className="lead">
              Cabana Collectives partners with producers, processors, and global buyers to move commodities and industrial inputs with precision. Our team combines advisory depth with disciplined execution so every procurement and trading mandate stays aligned to commercial goals.
            </p>
            <p className="lead">
              From Kenya to the Gulf, Europe, and Asia, we manage cross-border transactions with compliance-led workflows, structured documentation, and measurable performance reporting for all stakeholders.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link className="btn btn-primary" href="/contact#request" data-testid="hero-cta">
                Request Sourcing
              </Link>
              <Link className="btn btn-outline" href="/services">
                Explore Services
              </Link>
            </div>
            <div className="grid-three" style={{ marginTop: '2rem' }}>
              <div className="pill">
                <strong className="heading" style={{ display: 'block', color: 'var(--ink)' }}>Structured Procurement</strong>
                Clear requirements, verified suppliers, and transparent pricing.
              </div>
              <div className="pill">
                <strong className="heading" style={{ display: 'block', color: 'var(--ink)' }}>Compliance-Led Trade</strong>
                Aligned with regulatory, customs, and documentation standards.
              </div>
              <div className="pill">
                <strong className="heading" style={{ display: 'block', color: 'var(--ink)' }}>Risk-Managed Logistics</strong>
                Inspection, quality control, and delivery assurance built in.
              </div>
            </div>
          </div>
          <div className="media-frame hero-media">
            <div className="media-overlay" aria-hidden="true" />
            <Image
              src="/images/hero.png"
              alt="Cabana Collectives global trade network"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="advisory-title">
        <div className="container grid-two">
          <div className="fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <SectionIcon name="advisory" />
              <h2 id="advisory-title" className="heading" style={{ fontSize: '1.8rem' }}>
                Strategic Advisory & Trade Execution
              </h2>
            </div>
            <p className="lead">
              We translate client objectives into procurement and trading frameworks that prioritize value protection, delivery reliability, and regulatory compliance. Our advisory teams work alongside procurement leaders to define specifications, pricing guardrails, and supplier qualification criteria.
            </p>
            <p className="lead">
              Execution is managed by trade specialists with experience across commodities, chemicals, and industrial materials. Every engagement includes inspection protocols, shipping oversight, and post-trade reporting so partners can scale with confidence.
            </p>
            <p className="lead">
              Cabana Collectives supports clients across Africa, the Middle East, and global markets with an emphasis on contract clarity, responsive logistics coordination, and risk mitigation at each checkpoint.
            </p>
          </div>
          <div className="card">
            <h3 className="heading" style={{ fontSize: '1.25rem' }}>Engagement Outcomes</h3>
            <p className="lead">
              Clients work with Cabana Collectives to improve supplier performance, reduce procurement volatility, and unlock new regional supply corridors with transparent governance.
            </p>
            <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
              <div className="pill">
                <strong className="heading" style={{ display: 'block', color: 'var(--ink)' }}>Verified Supply Networks</strong>
                Qualification, audits, and benchmarking to confirm supplier readiness.
              </div>
              <div className="pill">
                <strong className="heading" style={{ display: 'block', color: 'var(--ink)' }}>Contract Discipline</strong>
                Structured terms that align pricing, delivery, and inspection triggers.
              </div>
              <div className="pill">
                <strong className="heading" style={{ display: 'block', color: 'var(--ink)' }}>Governance Reporting</strong>
                Milestone tracking, documentation controls, and stakeholder updates.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="divisions-title">
        <div className="container">
          <div className="fade-in" style={{ maxWidth: '40rem' }}>
            <h2 id="divisions-title" className="heading" style={{ fontSize: '1.8rem' }}>Core Divisions Snapshot</h2>
            <p className="lead">
              Our multi-division structure allows us to respond quickly to high-value trade programs, industrial sourcing mandates, and sustainability-driven procurement initiatives. Each division is staffed by specialists who understand supply market dynamics and regional regulatory frameworks.
            </p>
            <p className="lead">
              We collaborate across teams to ensure alignment on pricing intelligence, inspection requirements, and delivery timelines so every engagement benefits from centralized governance and local execution expertise.
            </p>
          </div>
          <div className="grid-three" style={{ marginTop: '2.5rem' }}>
            <article className="card">
              <SectionIcon name="sourcing" />
              <h3 className="heading" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>Sourcing & Procurement</h3>
              <p className="lead">
                Strategic sourcing frameworks connecting verified suppliers to global buyer demand, with measurable procurement KPIs.
              </p>
            </article>
            <article className="card">
              <SectionIcon name="trading" />
              <h3 className="heading" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>Commodity Trading & Chemicals</h3>
              <p className="lead">
                Structured trading programs with inspection controls, compliant handling, and delivery assurance across corridors.
              </p>
            </article>
            <article className="card">
              <SectionIcon name="sustainability" />
              <h3 className="heading" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>Sustainable Markets</h3>
              <p className="lead">
                Responsible sourcing and future-focused product strategies for long-term supply resilience.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="model-title">
        <div className="container fade-in">
          <h2 id="model-title" className="heading" style={{ fontSize: '1.8rem' }}>Operating Model</h2>
          <p className="lead">
            Our operating model is built to protect both buyers and suppliers through disciplined trade execution, clear checkpoints, and documented accountability. Each stage is governed by quality standards, compliance reviews, and delivery protocols.
          </p>
          <p className="lead">
            From requirement mapping to final delivery, we provide visibility through milestone reporting and transparent escalation pathways. This ensures that partners understand status, risk exposure, and next actions at every phase.
          </p>
          <ol className="grid-two" style={{ marginTop: '2rem' }} aria-label="Operating model steps" data-testid="operating-steps">
            <li className="card">
              <p className="heading">Requirement Mapping</p>
              <p className="lead">Define specifications, volume commitments, and pricing thresholds.</p>
            </li>
            <li className="card">
              <p className="heading">Supplier Verification</p>
              <p className="lead">Validate credentials, capacity, and compliance readiness.</p>
            </li>
            <li className="card">
              <p className="heading">Contract Structuring</p>
              <p className="lead">Align terms, documentation, and payment security.</p>
            </li>
            <li className="card">
              <p className="heading">Inspection & Release</p>
              <p className="lead">Third-party inspections and release protocols before shipment.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="compliance-title">
        <div className="container grid-two">
          <div className="fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <SectionIcon name="compliance" />
              <h2 id="compliance-title" className="heading" style={{ fontSize: '1.8rem' }}>Compliance & Governance</h2>
            </div>
            <p className="lead">
              Cabana Collectives operates with compliance-led governance to protect stakeholders, ensure traceability, and uphold international standards across every transaction. We integrate regulatory alignment, supplier due diligence, and quality assurance into each trade mandate.
            </p>
            <p className="lead">
              Our governance framework structures procurement workflows, escalation paths, and reporting so buyers gain transparency and suppliers gain predictable execution. This approach minimizes counterparty risk and strengthens long-term partnerships.
            </p>
          </div>
          <div className="card">
            <h3 className="heading" style={{ fontSize: '1.25rem' }}>Governance Focus</h3>
            <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
              <div className="pill">
                <strong className="heading" style={{ display: 'block', color: 'var(--ink)' }}>Regulatory Alignment</strong>
                Customs, trade, and documentation compliance validated at each stage.
              </div>
              <div className="pill">
                <strong className="heading" style={{ display: 'block', color: 'var(--ink)' }}>Supplier Due Diligence</strong>
                Verification of capacity, licensing, and quality management systems.
              </div>
              <div className="pill">
                <strong className="heading" style={{ display: 'block', color: 'var(--ink)' }}>Traceable Logistics</strong>
                Milestone reporting and document integrity throughout shipment lifecycle.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="reach-title">
        <div className="container grid-two">
          <div className="fade-in">
            <h2 id="reach-title" className="heading" style={{ fontSize: '1.8rem' }}>Global Reach, Regional Precision</h2>
            <p className="lead">
              Our regional access spans Africa, the Middle East, and Asia, supported by strategic port corridors and experienced trade partners. We use this footprint to secure competitive supply, coordinate inspection services, and manage logistics across borders.
            </p>
            <p className="lead">
              Clients benefit from local intelligence and global standards, ensuring their procurement and trading programs remain agile in fluctuating markets while meeting strict compliance requirements.
            </p>
          </div>
          <div className="card-brand">
            <h3 className="heading" style={{ fontSize: '1.2rem' }}>Regional Advantage</h3>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
              East Africa port access, COMESA and AfCFTA trade frameworks, and expanding Gulf and Asia supply routes provide dependable sourcing pathways.
            </p>
            <div className="media-frame" style={{ marginTop: '1.25rem' }}>
              <Image
                src="/images/global-trade.png"
                alt="Regional trade corridors across Africa, the Middle East, and Asia"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="cta-title">
        <div className="container">
          <div className="card" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ maxWidth: '36rem' }}>
              <h2 id="cta-title" className="heading" style={{ fontSize: '1.8rem' }}>Engage Cabana Collectives</h2>
              <p className="lead">
                Share your sourcing goals or trade inquiry and our team will respond with a structured roadmap, compliance checklist, and next steps tailored to your market requirements.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link className="btn btn-outline" href="/contact#request">Request Sourcing</Link>
              <Link className="btn btn-primary" href="/contact#inquiry">Trade Inquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
