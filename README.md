# Cabana Collectives
Global consultancy and international trade partner delivering structured procurement, compliant execution, and risk-managed logistics.

## Overview
Cabana Collectives is a corporate consultancy and international trade firm supporting producers, processors, and buyers across Africa, the Middle East, and Asia. This repository contains the marketing website built for clarity, credibility, and long-term scalability.

## Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Playwright (E2E testing)
- CSS (global styles)

## Project Structure
```
app/                 App Router pages, layouts, and routes
app/api/             Future API routes (serverless)
components/          Shared UI components
components/interactive/ Client-side interactive helpers
lib/                 Integration and helper modules
public/assets/        Static media and brand assets
styles/              Global styles
tests/               Playwright E2E tests
```

## Features
- Multi-page corporate website
- SEO-ready metadata configuration
- Reusable layout components and navigation
- Responsive global design system
- Static generation for performance

## Pages & Routes
- `/` Home
- `/about` About
- `/services` Services
- `/trading` Trading
- `/compliance` Compliance
- `/sustainability` Sustainability
- `/contact` Contact
- `/api/inquiry` Future API endpoint placeholder

## Development Setup
```
npm install
npm run dev
```

## Scripts
- `npm run dev` Start local development server
- `npm run build` Create production build
- `npm run start` Run production server
- `npm test` Run Playwright E2E tests (includes build)

## Testing Strategy
Playwright covers critical page flows and content validation to ensure the public site remains stable across releases.

## Deployment
Deployed via Vercel with the Next.js App Router. Configure environment variables in the Vercel project settings if required.

## Roadmap
- Server Actions for inquiry handling
- API routes for CRM and email workflows
- CMS integration for managed content
- Analytics instrumentation
- Expanded SEO tooling and schema support

## License / Ownership
All rights reserved. This repository and its contents are proprietary to Cabana Collectives unless otherwise stated.
