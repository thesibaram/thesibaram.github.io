# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Portfolio — Sibaram Nayak

**Artifact**: `artifacts/portfolio` (React + Vite, Tailwind CSS, Framer Motion)
**Stack overlay**: JetBrains Mono + Inter fonts, next-themes dark mode, "calm pixel laboratory" aesthetic

### CSS Variables
All components use `--px-` prefix: `--px-accent`, `--px-surface`, `--px-bg`, `--px-border`, `--px-text`, `--px-muted`, `--px-ink`

### Sections built
- Hero, About, Skills, Projects, Experience, Certifications (TheWall pinboard), Blog, Resume
- **Contact** — `src/components/Contact/` (10 sub-components): AvailabilityBadge, SocialCard, CRTMonitor, FormField, ContactForm (manual validation, no react-hook-form), ContactLeft, ContactRight, FormSuccess, FormError, index
- **Footer** — `src/components/Footer/` (9 sub-components): PixelDivider, LiveClock (real-time IST), BackToTop, FooterBio, FooterNav, FooterStatus (GitHub activity grid), FooterTop (3-col), FooterBottom, index
- **Chatbot** — `src/components/Chatbot/` (8 sub-components): PixelBotIcon, ChatHeader, ChatMessage, TypingIndicator, SuggestedQuestions, ChatInput, ChatWindow, index. Floating bottom-right fixed widget.

### Data files
- `src/data/contact.ts` — contact info + social links
- `src/data/aiContext.ts` — system prompt for Sibaram AI chatbot
- `src/data/certifications.ts`, `src/data/hero.ts`, `src/data/projects.ts`, `src/data/skills.ts`, `src/data/about.ts`, `src/data/blog.ts`

### AI Chatbot API
- **Endpoint**: `POST /api/chat` in `artifacts/api-server/src/routes/chat.ts`
- **Model**: `claude-sonnet-4-6` via Replit AI Integrations (no user API key needed)
- **System prompt**: `artifacts/api-server/src/lib/aiContext.ts`
- **Rate limiting**: 20 messages per session (in-memory Map, session ID from client)
- **Env vars auto-provisioned**: `AI_INTEGRATIONS_ANTHROPIC_BASE_URL`, `AI_INTEGRATIONS_ANTHROPIC_API_KEY`

### Important conventions
- Do NOT import React explicitly — JSX transform is configured
- Use `import { type ReactElement } from "react"` when a JSX.Element type annotation is needed
- No `border-radius` on any new components (pixel aesthetic)
- Shim pattern: `Contact.tsx` and `Footer.tsx` are thin re-exports from their respective sub-folders
- `Contact.tsx` previously used `react-hook-form` — now replaced by manual validation in `ContactForm.tsx`
