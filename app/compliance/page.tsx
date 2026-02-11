import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionIcon from '../../components/SectionIcon';

export const metadata: Metadata = {
  title: 'Compliance',
  description:
    'Cabana Collectives delivers compliance-led trade governance, including due diligence, documentation integrity, quality assurance, and ethical reporting.'
};

export default function CompliancePage() {
  return (
    <>
      <section className="section" aria-labelledby="compliance-hero-title">
        <div className="container grid-hero">
          <div className="fade-in">
            <p className="badge">Compliance & Governance</p>
            <h1 id="compliance-hero-title" className="heading hero-title" style={{ marginTop: '1rem' }}>
              Governance That Protects Every Transaction
            </h1>
            <p className="lead">
              Cabana Collectives operates with compliance-led governance to protect stakeholders, ensure traceability, and uphold international standards across every transaction. We integrate regulatory alignment into our procurement and trading workflows from the first engagement.
            </p>
            <p className="lead">
              Our governance team monitors documentation, inspection requirements, and customs compliance to ensure that trade execution remains audit-ready and transparent.
            </p>
          </div>
          <div className="banner">
            <Image
              src="/images/collage.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className="banner-image"
            />
            <div className="banner-overlay" aria-hidden="true" />
            <div className="banner-content">
              <h2 className="heading" style={{ fontSize: '1.2rem', color: 'var(--white)' }}>Governance Focus</h2>
              <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Compliance alignment, documentation integrity, and risk controls across the trade lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="due-diligence-title">
        <div className="container fade-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <SectionIcon name="compliance" />
            <h2 id="due-diligence-title" className="heading" style={{ fontSize: '1.8rem' }}>Supplier Due Diligence</h2>
          </div>
          <p className="lead">
            We conduct thorough due diligence on every supplier and counterparty. This includes verifying licensing, operational capacity, financial standing, and compliance readiness.
          </p>
          <p className="lead">
            Our diligence process is designed to reduce counterparty risk and ensure alignment with client governance requirements. We document findings and maintain auditable records for stakeholder review.
          </p>
          <p className="lead">
            By confirming supplier capability before contract execution, we protect timelines, pricing stability, and delivery performance.
          </p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="documentation-title">
        <div className="container grid-two">
          <div className="fade-in">
            <h2 id="documentation-title" className="heading" style={{ fontSize: '1.8rem' }}>Documentation & Customs Integrity</h2>
            <p className="lead">
              Trade documentation is reviewed at each milestone to ensure accuracy and compliance with customs regulations. We validate certificates, shipping documents, and regulatory approvals before shipment release.
            </p>
            <p className="lead">
              Cabana Collectives aligns documentation with trade finance requirements, ensuring contracts and shipments meet lender and insurer expectations.
            </p>
            <p className="lead">
              This process reduces delays, prevents regulatory penalties, and supports smooth clearance at destination ports.
            </p>
          </div>
          <div className="card">
            <h3 className="heading" style={{ fontSize: '1.25rem' }}>Documentation Checklist</h3>
            <ul style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
              <li className="pill">Certificates of origin and compliance.</li>
              <li className="pill">Inspection reports and release approvals.</li>
              <li className="pill">Customs declarations and shipping documentation.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="quality-title">
        <div className="container fade-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <SectionIcon name="quality" />
            <h2 id="quality-title" className="heading" style={{ fontSize: '1.8rem' }}>Quality Assurance & Inspection</h2>
          </div>
          <p className="lead">
            Quality assurance is integrated into our trade workflows through independent inspections, sampling protocols, and documentation verification. We align inspection criteria with contract requirements to protect buyer expectations.
          </p>
          <p className="lead">
            Cabana Collectives coordinates third-party inspection services and confirms compliance before shipment release. This reduces the risk of non-conformance and ensures product integrity at delivery.
          </p>
          <p className="lead">
            We maintain detailed inspection records that support audits, claims resolution, and future procurement planning.
          </p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="ethics-title">
        <div className="container grid-two">
          <div className="fade-in">
            <h2 id="ethics-title" className="heading" style={{ fontSize: '1.8rem' }}>Ethics & Reporting</h2>
            <p className="lead">
              Our governance standards emphasize ethical trading practices, transparency, and accountability across stakeholders. We maintain clear escalation paths and documentation to address compliance concerns quickly.
            </p>
            <p className="lead">
              Cabana Collectives provides reporting frameworks that track compliance metrics, supplier performance, and inspection outcomes. This helps clients maintain internal governance standards and external reporting commitments.
            </p>
            <p className="lead">
              Ethical compliance is reinforced through ongoing monitoring, partner engagement, and documented corrective action plans when required.
            </p>
          </div>
          <div className="card">
            <h3 className="heading" style={{ fontSize: '1.25rem' }}>Governance Outputs</h3>
            <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
              <div className="pill">Compliance dashboards and milestone reporting.</div>
              <div className="pill">Supplier performance scorecards and audits.</div>
              <div className="pill">Incident escalation and corrective action logs.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="compliance-cta-title">
        <div className="container">
          <div className="card" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ maxWidth: '36rem' }}>
              <h2 id="compliance-cta-title" className="heading" style={{ fontSize: '1.8rem' }}>Strengthen Your Compliance Program</h2>
              <p className="lead">
                Engage Cabana Collectives to build governance frameworks tailored to your trade and procurement requirements.
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
