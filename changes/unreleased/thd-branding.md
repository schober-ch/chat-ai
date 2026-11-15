Rebrand Chat AI as **THD Chat AI** for Technische Hochschule Deggendorf (THD):

- Replaced logos and favicons (`chat-ai.ico`, `chat_ai_small.ico`, `chat_ai.svg`, `chat_ai.png`) and removed unused GWDG/KISSKI assets.
- Updated Tailwind theme colors (`#005293`, `#1D3C6A`, `#009EE0`) and removed unused GWDG/KISSKI `backgroundImage` entries.
- Updated HTML title, `package.json` `displayName`, `useTabTitle.jsx`, header/sidebar alt texts, PDF export metadata, and `VersionDisplay.jsx` repository link.
- Updated footer legal links to `th-deg.de/impressum` and `th-deg.de/datenschutz`, removed GWDG-specific Terms/Docs links, model-selector docs hint banner, `help.models` GWDG docs link, and ISO 27001 badge, and updated English/German i18n strings.
- Updated `back/service.mjs` `GET /user` to read `OIDC_CLAIM_name`, `OIDC_CLAIM_preferred_username`, `OIDC_CLAIM_email` headers (returning `401` when `username` is missing) and `ORG_SHORT` / `ORG_NAME` environment variables.
- Disabled the GWDG/AcademicCloud AI services dropdown on the sidebar logo (`AiServicesMenu.tsx`) and added an `API Keys` (`/keys`) self-service portal link to the sidebar (`SidebarContent.tsx`, `SidebarRail.tsx`).
