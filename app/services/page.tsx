import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionIcon from '../../components/SectionIcon';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Cabana Collectives core divisions across strategic sourcing, commodity trading, chemicals supply, industrial materials, and sustainable markets.'
};

export default function ServicesPage() {
  return (
    <>
      <section className="section" aria-labelledby="services-title">
        <div className="container fade-in">
          <p className="badge">Core Divisions</p>
          <h1 id="services-title" className="heading hero-title" style={{ marginTop: '1rem' }}>
            Integrated Services Across Global Trade
          </h1>
          <p className="lead">
            Cabana Collectives delivers end-to-end services across sourcing, commodities, chemicals, industrial materials, and sustainable markets. Our division structure allows clients to engage with specialized teams while benefiting from shared governance and compliance standards.
          </p>
          <p className="lead">
            Each division is designed to support long-term partnerships with producers, processors, and global buyers. We align pricing intelligence, inspection readiness, and logistics oversight so transactions remain stable across fluctuating market conditions.
          </p>
          <p className="lead">
            From advisory strategy to delivery execution, we provide the operational rigor required for international trade programs and structured procurement mandates.
          </p>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="sourcing-title">
        <div className="container grid-two">
          <div className="card-brand">
            <h2 id="sourcing-title" className="heading" style={{ fontSize: '1.2rem' }}>
              Global Product Sourcing & Procurement
            </h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Structured procurement programs that align buyer requirements with verified supplier capacity and market pricing benchmarks.
            </p>
            <div className="media-frame" style={{ marginTop: '1.25rem' }}>
              <Image
                src="/images/strategic-growth.png"
                alt="Strategic sourcing and procurement growth planning"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="fade-in">
            <p className="lead">
              Our sourcing division manages end-to-end procurement cycles, from requirements definition to supplier selection and contract structuring. We prioritize transparency and pricing discipline to ensure clients receive dependable, market-aligned outcomes.
            </p>
            <p className="lead">
              We evaluate supplier capabilities, certifications, and operational readiness before onboarding. This diligence protects buyer interests and establishes a reliable baseline for long-term supply engagements.
            </p>
            <p className="lead">
              Cabana Collectives also coordinates inspections, shipping milestones, and documentation checks to maintain quality and regulatory compliance across borders.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="trading-title">
        <div className="container grid-two">
          <div className="fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <SectionIcon name="trading" />
              <h2 id="trading-title" className="heading" style={{ fontSize: '1.8rem' }}>Commodity Trading</h2>
            </div>
            <p className="lead">
              Our commodity trading team structures contracts that balance price stability with market responsiveness. We execute trades for producers and buyers across agriculture, industrial inputs, and energy-aligned commodities.
            </p>
            <p className="lead">
              Each program includes inspection protocols, logistics oversight, and compliance reviews to ensure delivery integrity. We maintain clear documentation trails to protect counterparty interests and support trade finance requirements.
            </p>
            <p className="lead">
              Risk management is embedded into every trade, including supplier verification, shipment tracking, and escalation planning for non-conformance scenarios.
            </p>
          </div>
          <div className="card">
            <h3 className="heading" style={{ fontSize: '1.25rem' }}>Trading Capabilities</h3>
            <ul style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
              <li className="pill">Structured spot and term contracts with defined delivery milestones.</li>
              <li className="pill">Third-party inspection coordination and release management.</li>
              <li className="pill">Customs documentation support and compliance reviews.</li>
              <li className="pill">Post-trade reporting for performance and audit readiness.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="chemicals-title">
        <div className="container grid-two">
          <div className="card">
            <h2 id="chemicals-title" className="heading" style={{ fontSize: '1.2rem' }}>Chemicals Supply</h2>
            <p className="lead">
              Compliance-led chemicals sourcing with safe handling protocols and documentation integrity.
            </p>
            <div className="media-frame" style={{ marginTop: '1.25rem' }}>
              <Image
                src="/images/global-trade.png"
                alt="Chemicals logistics and global trade coordination"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="fade-in">
            <p className="lead">
              Cabana Collectives provides reliable access to industrial and specialty chemicals for manufacturing, processing, and infrastructure clients. We coordinate supplier qualification, safety documentation, and transport requirements to meet regulatory obligations.
            </p>
            <p className="lead">
              Our team aligns procurement with customs and compliance mandates, ensuring MSDS documentation, certifications, and packaging standards are in place before shipment release.
            </p>
            <p className="lead">
              We also manage inspection readiness, storage standards, and distribution planning to protect downstream operations and maintain uninterrupted supply.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="materials-title">
        <div className="container grid-two">
          <div className="fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <SectionIcon name="industrial" />
              <h2 id="materials-title" className="heading" style={{ fontSize: '1.8rem' }}>Industrial Materials & Real Estate Support</h2>
            </div>
            <p className="lead">
              We support infrastructure and industrial projects with disciplined procurement of materials, equipment, and construction-grade inputs. Our focus is on quality control, supplier reliability, and timely delivery across project milestones.
            </p>
            <p className="lead">
              For real estate and development initiatives, we coordinate supply programs for finishes, fixtures, and structural materials while ensuring compliance with local standards and import requirements.
            </p>
            <p className="lead">
              The division integrates closely with logistics partners to manage on-site delivery sequencing and reduce project downtime.
            </p>
          </div>
          <div className="card">
            <h3 className="heading" style={{ fontSize: '1.25rem' }}>Project Support Scope</h3>
            <ul style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
              <li className="pill">Industrial materials sourcing and vendor alignment.</li>
              <li className="pill">Construction supply planning and phased delivery scheduling.</li>
              <li className="pill">Quality checks and documentation for compliance audits.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="sustainability-title">
        <div className="container grid-two">
          <div className="card-brand">
            <h2 id="sustainability-title" className="heading" style={{ fontSize: '1.2rem' }}>Sustainable & Future Markets</h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Responsible sourcing and emerging market support for clients seeking future-ready supply chains.
            </p>
            <div className="media-frame" style={{ marginTop: '1.25rem' }}>
              <Image
                src="/images/sustainability.png"
                alt="Sustainable supply chain planning and responsible sourcing"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="fade-in">
            <p className="lead">
              The sustainability division focuses on responsible sourcing programs that align with ESG requirements and circular supply models. We help clients evaluate supplier practices, certifications, and environmental impact factors.
            </p>
            <p className="lead">
              Our team identifies emerging product categories and future markets that support long-term demand growth. This includes bio-based materials, responsible mining inputs, and innovative supply alternatives.
            </p>
            <p className="lead">
              We provide governance frameworks to track compliance metrics, supplier reporting, and sustainability audits across the supply lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="services-cta-title">
        <div className="container">
          <div className="card" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ maxWidth: '36rem' }}>
              <h2 id="services-cta-title" className="heading" style={{ fontSize: '1.8rem' }}>Build a Multi-Division Trade Program</h2>
              <p className="lead">
                Connect with Cabana Collectives to structure a procurement or trading mandate that aligns with your sector, compliance requirements, and delivery targets.
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
