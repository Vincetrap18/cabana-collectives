import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sustainability',
  description:
    'Cabana Collectives helps clients build sustainable and future-ready supply programs, including responsible sourcing, circular materials, and ESG-aligned trade execution.'
};

export default function SustainabilityPage() {
  return (
    <>
      <section className="section" aria-labelledby="sustainability-hero-title">
        <div className="container grid-hero">
          <div className="fade-in">
            <p className="badge">Sustainable & Future Markets</p>
            <h1 id="sustainability-hero-title" className="heading hero-title" style={{ marginTop: '1rem' }}>
              Future-Ready Supply Programs
            </h1>
            <p className="lead">
              Cabana Collectives helps clients build sustainable supply programs that meet ESG expectations while maintaining commercial performance. We focus on responsible sourcing, ethical trade practices, and traceability across global markets.
            </p>
            <p className="lead">
              Our teams evaluate supplier practices, certification readiness, and environmental impact to ensure that sustainable trade objectives are supported by verified operational capacity.
            </p>
          </div>
          <div className="card-brand">
            <h2 className="heading" style={{ fontSize: '1.2rem' }}>Sustainability Focus</h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Responsible sourcing, circular materials, and ESG-aligned governance across supply chains.
            </p>
            <img
              style={{ marginTop: '1.25rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}
              src="/assets/section-placeholder.svg"
              alt="Sustainability focus"
            />
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="responsible-title">
        <div className="container fade-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img className="section-icon" src="/assets/icon-placeholder.svg" alt="Responsible sourcing icon" />
            <h2 id="responsible-title" className="heading" style={{ fontSize: '1.8rem' }}>Responsible Sourcing</h2>
          </div>
          <p className="lead">
            We design sourcing programs that balance ethical procurement standards with commercial objectives. Our due diligence process includes supplier audits, compliance verification, and social responsibility assessments.
          </p>
          <p className="lead">
            Cabana Collectives collaborates with suppliers to improve documentation, traceability, and transparency. This enables clients to meet internal governance standards and stakeholder expectations.
          </p>
          <p className="lead">
            Our approach creates stable supply relationships that reinforce accountability while ensuring reliable delivery performance.
          </p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="circular-title">
        <div className="container grid-two">
          <div className="fade-in">
            <h2 id="circular-title" className="heading" style={{ fontSize: '1.8rem' }}>Circular & Bio-Based Materials</h2>
            <p className="lead">
              We identify suppliers and producers that offer circular, recycled, and bio-based inputs for clients seeking reduced environmental impact. Our team evaluates certification requirements and lifecycle analysis data to support procurement decisions.
            </p>
            <p className="lead">
              Through market mapping and supplier qualification, we help clients access innovative materials while maintaining compliance with import regulations and quality standards.
            </p>
            <p className="lead">
              Cabana Collectives ensures documentation integrity and traceability across each material flow to support sustainability reporting.
            </p>
          </div>
          <div className="card">
            <h3 className="heading" style={{ fontSize: '1.25rem' }}>Materials Focus</h3>
            <ul style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
              <li className="pill">Recycled industrial inputs and secondary materials.</li>
              <li className="pill">Bio-based packaging and biodegradable alternatives.</li>
              <li className="pill">Renewable feedstocks aligned to ESG reporting goals.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="esg-title">
        <div className="container fade-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img className="section-icon" src="/assets/icon-placeholder.svg" alt="ESG alignment icon" />
            <h2 id="esg-title" className="heading" style={{ fontSize: '1.8rem' }}>Climate & ESG Alignment</h2>
          </div>
          <p className="lead">
            We align procurement programs with ESG commitments by tracking supplier performance, emissions considerations, and compliance requirements. Our reporting frameworks help clients measure progress against sustainability targets.
          </p>
          <p className="lead">
            Cabana Collectives coordinates compliance documentation, certification tracking, and supplier engagement to maintain audit readiness. This builds confidence for investors, regulators, and internal governance teams.
          </p>
          <p className="lead">
            Our ESG advisory focus ensures that sustainability initiatives remain grounded in operational reality and measurable outcomes.
          </p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="innovation-title">
        <div className="container grid-two">
          <div className="fade-in">
            <h2 id="innovation-title" className="heading" style={{ fontSize: '1.8rem' }}>Innovation Pipeline</h2>
            <p className="lead">
              Cabana Collectives tracks emerging markets and future supply opportunities to help clients stay ahead of demand shifts. We monitor regulatory trends, product innovation, and regional investment priorities.
            </p>
            <p className="lead">
              Our advisory teams identify viable suppliers and assess readiness for scale, enabling clients to plan future procurement strategies with confidence.
            </p>
            <p className="lead">
              This proactive approach helps clients diversify supply portfolios while aligning with long-term sustainability commitments.
            </p>
          </div>
          <div className="card">
            <h3 className="heading" style={{ fontSize: '1.25rem' }}>Emerging Focus Areas</h3>
            <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
              <div className="pill">Responsible mining inputs and traceable minerals.</div>
              <div className="pill">Renewable energy components and storage materials.</div>
              <div className="pill">Regenerative agriculture supply chains.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="sustainability-cta-title">
        <div className="container">
          <div className="card" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ maxWidth: '36rem' }}>
              <h2 id="sustainability-cta-title" className="heading" style={{ fontSize: '1.8rem' }}>Build a Sustainable Supply Roadmap</h2>
              <p className="lead">
                Share your sustainability priorities and our team will design a compliant, traceable sourcing program.
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
