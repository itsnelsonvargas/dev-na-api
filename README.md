# WebValuator

A production-ready web application that allows users to generate an accurate cost estimate for website projects.

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Shadcn UI** components
- **Zod** (validation)
- Deployed on **Vercel**

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:

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

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
WebValuator/
├── app/
│   ├── api/
│   │   └── calculate/
│   │       └── route.ts          # API route for cost calculation
│   ├── components/
│   │   ├── EstimatorForm.tsx    # Main form component
│   │   └── ResultCard.tsx       # Results display component
│   ├── lib/
│   │   ├── costCalculator.ts    # Cost calculation logic
│   │   └── types.ts             # TypeScript types and Zod schemas
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── components/
│   └── ui/                       # Shadcn UI components
├── lib/
│   └── utils.ts                  # Utility functions
└── package.json
```

## ✨ Features

- ✅ All pricing values loaded from environment variables
- ✅ Zod validation for form inputs
- ✅ Responsive mobile-first design
- ✅ Shadcn UI components
- ✅ TypeScript for type safety
- ✅ Server-side cost calculation via API route
- ✅ Detailed cost breakdown display
- ✅ PDF estimate generation (placeholder)

## 🧮 Cost Calculation

The cost calculator:
1. Loads base prices from `.env` variables
2. Applies complexity multipliers
3. Adds selected add-ons
4. Includes hosting, domain & maintenance costs
5. Applies rush multiplier if selected
6. Returns detailed breakdown with total

## 🚢 Deployment

This project is ready to deploy on Vercel. Make sure to add all environment variables in your Vercel project settings.

## 📝 License

MIT
