# Dev Site Estimator - Setup Guide

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
### Add-on Prices
ADDON_PIA_PRICE=1500
ADDON_VA_PRICE=2000
ADDON_UAT_PRICE=2500
ADDON_SEO_PRICE=3000
ADDON_ADMIN_DASH_PRICE=5000
ADDON_API_PRICE=5000
ADDON_UIUX_PRICE=4000

### Hosting
ADDON_HOSTING_SHARED=2000
ADDON_HOSTING_VPS=4500
ADDON_HOSTING_CLOUD=8000

### Domain
ADDON_DOMAIN_COM=800
ADDON_DOMAIN_PH=1500
ADDON_DOMAIN_ORG=1000

### Maintenance
MAINTENANCE_MONTHLY=1500
MAINTENANCE_YEARLY=10000

### Base Website Prices
BASE_PORTFOLIO_PRICE=5000
BASE_BLOG_PRICE=6000
BASE_ECOMMERCE_PRICE=12000
BASE_COMPANY_PRICE=8000
BASE_CUSTOM_PRICE=15000

### Complexity Multipliers
COMPLEXITY_BASIC=1
COMPLEXITY_STANDARD=1.5
COMPLEXITY_ADVANCED=2

### Timeline
RUSH_MULTIPLIER=1.5
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with the variables above

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
  page.tsx              # Main page with estimator layout
  components/
    EstimatorForm.tsx   # Form component with all inputs
    ResultCard.tsx      # Display component for cost breakdown
  lib/
    costCalculator.ts   # Cost calculation logic
    types.ts           # TypeScript types and Zod schemas
  api/
    calculate/
      route.ts         # API route for cost calculation
```

## Features

- ✅ All pricing values loaded from environment variables
- ✅ Zod validation for form inputs
- ✅ Responsive mobile-first design
- ✅ Shadcn UI components
- ✅ TypeScript for type safety
- ✅ Server-side cost calculation via API route

## Deployment

This project is ready to deploy on Vercel. Make sure to add all environment variables in your Vercel project settings.

