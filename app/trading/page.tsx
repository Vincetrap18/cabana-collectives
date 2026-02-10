import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Trading',
  description:
    'Cabana Collectives delivers structured commodity trading and chemicals supply programs with inspection controls, compliance oversight, and risk-managed logistics.'
};

export default function TradingPage() {
  return (
    <>
      <section className="section" aria-labelledby="trading-hero-title">
        <div className="container grid-hero">
          <div className="fade-in">
            <p className="badge">Commodity Trading & Chemicals</p>
            <h1 id="trading-hero-title" className="heading hero-title" style={{ marginTop: '1rem' }}>
              Structured Trading Programs Built for Compliance
            </h1>
            <p className="lead">
              Cabana Collectives manages commodity trading and chemicals supply programs that demand strict compliance, documentation integrity, and delivery precision. We align counterparties, logistics, and inspection services to protect every transaction.
            </p>
            <p className="lead">
              Our trading teams work across Africa, the Middle East, and Asia to deliver responsive market access with disciplined risk controls and transparent reporting.
            </p>
          </div>
          <div className="card-brand">
            <h2 className="heading" style={{ fontSize: '1.2rem' }}>Trade Execution Focus</h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Inspection-led execution, compliance alignment, and accountable logistics for each shipment.
            </p>
            <img
              style={{ marginTop: '1.25rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}
              src="/assets/section-placeholder.svg"
              alt="Trade execution"
            />
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="mandate-title">
        <div className="container fade-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img className="section-icon" src="/assets/icon-placeholder.svg" alt="Mandate icon" />
            <h2 id="mandate-title" className="heading" style={{ fontSize: '1.8rem' }}>Trading Mandate</h2>
          </div>
          <p className="lead">
            We structure trading mandates to align pricing benchmarks, contract terms, and delivery milestones. This ensures buyers receive predictable outcomes while suppliers benefit from clear execution guidelines.
          </p>
          <p className="lead">
            Our mandate includes supplier verification, quality assurance protocols, and regulatory compliance checks to safeguard each transaction. We document decisions and maintain audit-ready records for every shipment.
          </p>
          <p className="lead">
            Cabana Collectives coordinates with inspection firms, logistics partners, and customs agents to maintain continuity and reduce friction across borders.
          </p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="commodities-title">
        <div className="container grid-two">
          <div className="fade-in">
            <h2 id="commodities-title" className="heading" style={{ fontSize: '1.8rem' }}>Commodity Programs</h2>
            <p className="lead">
              We manage commodity programs across agriculture, energy-aligned inputs, and industrial raw materials. Each program is structured to optimize pricing stability while responding to real-time market shifts.
            </p>
            <p className="lead">
              Our teams manage contract negotiation, specification alignment, and delivery oversight. Buyers gain transparency through milestone tracking and performance reporting.
            </p>
            <p className="lead">
              Quality control is embedded through third-party inspections, sampling protocols, and release approvals that protect against non-conformance.
            </p>
          </div>
          <div className="card">
            <h3 className="heading" style={{ fontSize: '1.25rem' }}>Program Elements</h3>
            <ul style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
              <li className="pill">Spot and term contracts with aligned incoterms.</li>
              <li className="pill">Inspection readiness and pre-shipment verification.</li>
              <li className="pill">Shipping coordination and milestone documentation.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="chemicals-title">
        <div className="container grid-two">
          <div className="card">
            <h2 id="chemicals-title" className="heading" style={{ fontSize: '1.2rem' }}>Chemicals Supply</h2>
            <p className="lead">Compliance-led supply programs for industrial and specialty chemicals.</p>
            <img
              style={{ marginTop: '1.25rem', borderRadius: '1rem', border: '1px solid var(--slate-200)' }}
              src="/assets/section-placeholder.svg"
              alt="Chemicals supply"
            />
          </div>
          <div className="fade-in">
            <p className="lead">
              We coordinate chemicals sourcing with strict adherence to safety standards, transport regulations, and documentation requirements. Every supplier is evaluated for licensing, packaging capability, and compliance readiness.
            </p>
            <p className="lead">
              Cabana Collectives manages MSDS documentation, labeling standards, and handling procedures to ensure that materials move safely across borders and into customer facilities.
            </p>
            <p className="lead">
              Our team works with logistics partners to secure safe warehousing, controlled distribution, and delivery transparency throughout the supply chain.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="risk-title">
        <div className="container grid-two">
          <div className="fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img className="section-icon" src="/assets/icon-placeholder.svg" alt="Risk control icon" />
              <h2 id="risk-title" className="heading" style={{ fontSize: '1.8rem' }}>Risk Controls</h2>
            </div>
            <p className="lead">
              Our risk management framework includes counterparty verification, documentation validation, and inspection sign-offs before shipment release. We maintain defined escalation paths for quality or delivery deviations.
            </p>
            <p className="lead">
              Trade compliance checks are integrated throughout the lifecycle to reduce regulatory exposure. We align stakeholders on expected documentation, customs obligations, and jurisdiction-specific requirements.
            </p>
            <p className="lead">
              This disciplined approach protects buyers and suppliers while maintaining the predictability required for high-value trade programs.
            </p>
          </div>
          <div className="card">
            <h3 className="heading" style={{ fontSize: '1.25rem' }}>Control Areas</h3>
            <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
              <div className="pill">Supplier due diligence and capacity verification.</div>
              <div className="pill">Inspection protocols and sample validation.</div>
              <div className="pill">Customs and export documentation alignment.</div>
              <div className="pill">Shipment tracking with milestone reporting.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="finance-title">
        <div className="container fade-in">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img className="section-icon" src="/assets/icon-placeholder.svg" alt="Finance icon" />
            <h2 id="finance-title" className="heading" style={{ fontSize: '1.8rem' }}>Trade Finance & Logistics</h2>
          </div>
          <p className="lead">
            We align trade finance requirements with shipment documentation and inspection milestones. This ensures that payment terms are secure and compliant with financing partner expectations.
          </p>
          <p className="lead">
            Our logistics oversight includes freight coordination, customs clearance support, and delivery scheduling. We track each stage to ensure goods arrive on time and in full compliance with contractual requirements.
          </p>
          <p className="lead">
            Cabana Collectives provides post-shipment reporting to support audits, reconciliation, and continuous improvement across future trade cycles.
          </p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="trading-cta-title">
        <div className="container">
          <div className="card" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ maxWidth: '36rem' }}>
              <h2 id="trading-cta-title" className="heading" style={{ fontSize: '1.8rem' }}>Start a Trading Engagement</h2>
              <p className="lead">
                Submit your commodity or chemicals inquiry and receive a structured execution plan from our trading team.
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
