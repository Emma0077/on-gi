# ON:GI Landing Page

## Overview

ON:GI is a Korean-language donation platform landing page designed to collect pre-launch notification signups. The platform connects working professionals (30-40s) with young adults (20s) through meal donations, creating intergenerational support through warm, emotionally-driven experiences. This is a single-page application with a mobile-first approach, featuring a notification signup form with UTM tracking and analytics integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript running on Vite for fast development and optimized production builds.

**Routing**: Uses Wouter for lightweight client-side routing (currently single-page with `/` route).

**UI Component Library**: Shadcn/ui (New York style variant) built on Radix UI primitives with Tailwind CSS for styling. Components are fully customizable and located in `client/src/components/ui/`.

**Design System**:
- Mobile-first responsive design (375-430px primary viewport)
- Warm color palette: Cream (#FFF9F3), Lavender (#E9E3FF), Deep Violet (#7C6FF4), Beige (#F6E8DA), Coral (#FFBFAF)
- Typography: Pretendard font (with Noto Sans Korean fallback)
- Korean language content throughout
- Emotional journey structure: Hero → Story (Empathy) → How It Works → Testimonials → FAQ → CTA Form

**State Management**: React hooks with TanStack Query v5 for server state management. Form state handled by React Hook Form with Zod validation.

**Analytics Integration**: 
- Google Analytics (GA4) for event tracking
- Facebook Pixel for conversion tracking
- Custom tracking utilities in `client/src/lib/analytics.ts` for CTA clicks and form completions

**UTM Parameter Tracking**: Automated extraction and persistence of UTM parameters from URL query strings, stored in localStorage and submitted with notification forms for attribution tracking.

### Backend Architecture

**Server Framework**: Express.js with TypeScript, running on Node.js.

**API Design**: RESTful API with two main endpoints:
- `POST /api/notifications` - Create notification signup (with validation)
- `GET /api/notifications` - Retrieve all signups

**Request Validation**: Zod schemas with custom error formatting using `zod-validation-error` for user-friendly validation messages.

**Development Server**: Vite middleware integration for HMR (Hot Module Reload) in development, with separate production build process.

### Database Layer

**ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations.

**Database Provider**: Neon serverless PostgreSQL with WebSocket support.

**Schema Design** (`shared/schema.ts`):
- `users` table: Basic user authentication structure (id, username, password)
- `notifications` table: Signup data with fields for name, email, phone, UTM parameters (source, medium, campaign, term, content), and timestamp

**Migrations**: Managed via Drizzle Kit with migrations stored in `/migrations` directory.

**Data Access Layer**: Abstracted through `IStorage` interface with `DatabaseStorage` implementation in `server/storage.ts`, enabling future storage backend changes without affecting business logic.

### Form Handling & Validation

**Validation Strategy**: Shared Zod schemas between client and server (`shared/schema.ts`) ensure consistent validation rules across the stack.

**Form Components**:
- `FormModal` - Dialog-based signup form
- `CTAFormSection` - Inline page section form
- Both support submission success states with visual feedback

**User Experience**: 
- Multiple CTA entry points (header, hero, sticky mobile footer)
- Real-time client-side validation
- Server-side validation with friendly error messages
- Success state transitions with visual confirmation

### Build & Deployment

**Build Process**: 
- Frontend: Vite builds React app to `dist/public`
- Backend: esbuild bundles Express server to `dist/index.js`
- Both use ESM module format

**Development**: `npm run dev` runs Express with Vite middleware for live reload.

**Production**: `npm run build` then `npm start` serves pre-built static assets with Express.

**Path Aliases**: Configured for clean imports (`@/` for client, `@shared/` for shared code, `@assets/` for attached assets).

## External Dependencies

### Analytics & Tracking
- **Google Analytics 4** (GA4) - Page views and custom event tracking (signup conversions, CTA clicks)
- **Facebook Pixel** - Conversion tracking (CompleteRegistration events)

### Database
- **Neon Serverless PostgreSQL** - Cloud-hosted PostgreSQL database with WebSocket connections for serverless environments

### UI & Styling
- **Radix UI** - Headless accessible component primitives (dialogs, accordions, forms, etc.)
- **Tailwind CSS** - Utility-first CSS framework with custom design tokens
- **Shadcn/ui** - Pre-built component library built on Radix UI + Tailwind
- **Lucide React** - Icon library

### Form & Validation
- **React Hook Form** - Performant form state management
- **Zod** - TypeScript-first schema validation
- **Drizzle Zod** - Zod schema generation from Drizzle table definitions

### Development Tools
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety across frontend and backend
- **ESBuild** - Fast JavaScript bundler for production server builds

### Fonts
- **Pretendard** - Primary Korean web font (via CDN)
- **Noto Sans Korean** - Fallback Korean font (Google Fonts)