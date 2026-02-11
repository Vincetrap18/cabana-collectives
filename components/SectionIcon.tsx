type IconName =
  | 'advisory'
  | 'sourcing'
  | 'trading'
  | 'sustainability'
  | 'compliance'
  | 'mission'
  | 'market'
  | 'leadership'
  | 'mandate'
  | 'risk'
  | 'finance'
  | 'engagement'
  | 'contact'
  | 'quality'
  | 'responsible'
  | 'esg'
  | 'industrial';

type IconKey =
  | 'compass'
  | 'target'
  | 'arrows'
  | 'leaf'
  | 'shield'
  | 'chart'
  | 'chat'
  | 'globe'
  | 'document';

const iconMap: Record<IconName, IconKey> = {
  advisory: 'compass',
  sourcing: 'target',
  trading: 'arrows',
  sustainability: 'leaf',
  compliance: 'shield',
  mission: 'compass',
  market: 'chart',
  leadership: 'compass',
  mandate: 'document',
  risk: 'shield',
  finance: 'chart',
  engagement: 'arrows',
  contact: 'chat',
  quality: 'shield',
  responsible: 'leaf',
  esg: 'globe',
  industrial: 'target'
};

function IconGlyph({ name }: { name: IconKey }) {
  switch (name) {
    case 'compass':
      return (
        <>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 7l3 5-5 3z" />
        </>
      );
    case 'target':
      return (
        <>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 5V2" />
        </>
      );
    case 'arrows':
      return (
        <>
          <path d="M7 7h6l-2-2" />
          <path d="M17 17h-6l2 2" />
          <path d="M7 7v6" />
          <path d="M17 17v-6" />
        </>
      );
    case 'leaf':
      return (
        <>
          <path d="M6 16c5-1 8-4 10-10 2 5-1 12-6 13-2 0-3-1-4-3z" />
          <path d="M8 14c2 0 4-1 6-3" />
        </>
      );
    case 'shield':
      return (
        <>
          <path d="M12 3l7 3v5c0 4-3 7-7 9-4-2-7-5-7-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </>
      );
    case 'chart':
      return (
        <>
          <path d="M5 16V8" />
          <path d="M12 16V5" />
          <path d="M19 16v-4" />
          <path d="M4 16h16" />
        </>
      );
    case 'chat':
      return (
        <>
          <path d="M6 15l-2 4 4-2h9a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4z" />
          <path d="M9 9h6" />
          <path d="M9 12h4" />
        </>
      );
    case 'globe':
      return (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16" />
          <path d="M12 4c3 3 3 13 0 16" />
          <path d="M12 4c-3 3-3 13 0 16" />
        </>
      );
    case 'document':
      return (
        <>
          <path d="M7 4h6l4 4v12H7z" />
          <path d="M13 4v4h4" />
          <path d="M9 13h6" />
          <path d="M9 16h4" />
        </>
      );
    default:
      return null;
  }
}

export default function SectionIcon({ name }: { name: IconName }) {
  const icon = iconMap[name] ?? 'compass';

  return (
    <span className="section-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <IconGlyph name={icon} />
      </svg>
    </span>
  );
}
