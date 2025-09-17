# Muscadine - Financial Self-Sovereignty

A professional platform dedicated to helping individuals take control of their financial future through Bitcoin security, self-custody, and DeFi solutions. Built as a modern React application with clean, formal design.

## Features

- **Bitcoin Security & Self-Custody**: Comprehensive guides on hardware wallets, recovery planning, and long-term asset protection
- **Decentralized Finance (DeFi)**: Educational content about lending protocols, borrowing strategies, and Base network optimization
- **Bitcoin Node Access**: Connect to self-hosted Bitcoin node for secure transactions and privacy
- **Knowledge Base**: Concise resources and checklists for navigating self-custody, wallets, and digital asset security
- **Professional Design**: Clean, formal UI with consistent typography and subtle styling
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Fast Performance**: Static site with global CDN delivery
- **Secure**: HTTPS-only with comprehensive security headers

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/nickconnelly10/muscadine.box.git
cd muscadine.box
npm install
```

### 2. Environment Variables (Optional)

Create a `.env` file in the root directory with:

```
VITE_SENTRY_DSN=your_sentry_dsn   # Optional, for error logging
```

- Get a Sentry DSN at https://sentry.io/ (optional)

### 3. Run Locally

```bash
npm run dev
```
Visit [http://localhost:3002](http://localhost:3002)

### 4. Build for Production

To generate a production build, run:

```bash
npm run build
```

The output will be in the `dist/` directory. **Note:** The `dist/` directory is automatically ignored by git and should not be committed.

### 5. Preview Production Build

```bash
npm run preview
```

## Favicon

- The favicon should be placed in `public/favicon.svg`.
- Do not edit or commit any favicon in the `dist/` directory; it is generated automatically during build.

## Deployment

- Deploys as a static site (e.g., Vercel, Netlify, S3, Cloudflare Pages)
- Vercel is pre-configured via `vercel.json`

## Project Structure

- `src/components/` — React UI components (Loader, ErrorBoundary)
- `src/types/` — TypeScript type definitions
- `public/` — Static assets (favicon, legal pages)
- `index.html` — Main HTML entry point

## Content Sections

### Home Page
- **About Muscadine**: Introduction to the platform and services
- **Bitcoin Security & Self-Custody**: Hardware wallet setup and recovery planning
- **Decentralized Finance (DeFi)**: Lending and borrowing protocols on Base network
- **Bitcoin Node**: Connect to self-hosted node for secure transactions
- **Knowledge Base**: Comprehensive crypto resources and checklists

### Solutions Page
- **Bitcoin Node**: Access to self-hosted Bitcoin node
- **Knowledge Base**: Digital asset security resources

### Individual Pages
- **Bitcoin**: Comprehensive Bitcoin education and wallet setup
- **DeFi**: Decentralized finance protocols and strategies
- **Contact**: Consultation and support information

## Error Logging

- Sentry is integrated for front-end error monitoring (optional, set DSN in `.env`)

## Testing

- **Build Test**: Run `npm run build` to ensure the project builds successfully
- **Linting**: Run `npm run lint` to check code quality
- **Note:** There are currently no automated tests or test script in this project. If you add tests, update the README accordingly.

## Deployment Hygiene: What to Commit

| File/Folder         | Required for Deployment? | Commit to Repo? | Notes                                 |
|---------------------|-------------------------|-----------------|---------------------------------------|
| `node_modules/`     | No                      | No              | Only for local dev/build. Should be in `.gitignore`. |
| `package-lock.json` | Yes                     | Yes             | Ensures consistent dependency install |
| `vercel.json`       | Yes (if using Vercel)   | Yes             | Custom Vercel config                  |
| `dist/`             | No                      | No              | Build output, auto-generated          |
| `public/`           | Yes                     | Yes             | Static assets (favicon, legal, etc)   |
| `src/`              | Yes                     | Yes             | Source code                           |
| `.gitignore`        | Yes                     | Yes             | Ensures build artifacts are ignored   |

**Delete or do not commit:**
- `node_modules/` (never commit)
- `dist/` (never commit)
- Any backup files like `package-lock 2.json`, `vercel 2.json`, etc.

## Contributing

- PRs welcome! Please open an issue for feature requests or bugs.
- Follow the existing code style and conventions.
- Ensure all builds pass before submitting.

## License

MIT License - see LICENSE file for details.

---

*Built on BITCOIN • Secure • Transparent • Professional*

## Related Projects

- **Health Dashboard**: `https://health.nicholasconnelly.box`
- **Main Site**: `https://nicholasconnelly.box`

## Domain Configuration

This repository serves the following domains:
- **Primary**: `https://muscadine.box`
- **Muscadine WWW**: `https://www.muscadine.box`
- **Muscadine DeFi**: `https://defi.muscadine.box`
- **Legacy**: `https://defi.nicholasconnelly.box`

All domains point to the same Muscadine platform for financial self-sovereignty. 