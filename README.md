# dev-na-API

A robust, developer-centric API providing structured datasets and utility endpoints for modern application development. `dev-na-API` is designed to simplify data management for common reference sets, particularly focusing on the Philippine context.

---

## 🌟 Features

`dev-na-API` offers several RESTful endpoints that serve validated, type-safe data through a structured interface.

- **Philippine Geographic Data (PSGC):** Access comprehensive data on Regions, Provinces, Cities, and Barangays using the Philippine Standard Geographic Code.
- **Educational Datasets:** Pre-defined lists for College Courses, SHS Tracks/Strands, and TESDA Qualifications.
- **Health & Reference Data:** Standardized datasets for Vaccination Status, PhilHealth Membership, Civil Status, Nationality, and more.
- **Inclusion & Gender:** Structured options for Sex and Gender Identity.
- **Calculation Services:** Utility endpoints for project cost estimations and complex calculations.
- **Developer First:** Built with TypeScript and Zod for maximum type safety and predictable API responses.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Validation:** [Zod](https://zod.dev/)
- **Data Storage:** Optimized JSON datasets for high performance.
- **Deployment:** [Vercel](https://vercel.com/) (Serverless)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd dev-na-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Copy `.env.example` to `.env`. These variables are used for internal calculation logic and API configurations.

   ```bash
   cp .env.example .env
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```
   The API will be accessible at `http://localhost:3000/api`.

---

## 📂 Project Structure

```text
├── app/
│   ├── api/                  # API Route Handlers (Primary Logic)
│   │   ├── psgc/             # Philippine Geographic Data
│   │   ├── education/        # Educational datasets
│   │   ├── health/           # Health reference data
│   │   ├── calculate/        # Calculation utilities
│   │   └── ...               # Other specialized endpoints
│   ├── lib/                  # Shared API types and schemas
├── data/                     # Raw JSON datasets for endpoints
├── lib/                      # Core services and utility functions
└── package.json
```

---

## 📡 API Endpoints

| Category | Endpoint | Method | Description |
| :--- | :--- | :--- | :--- |
| **Geographic** | `/api/psgc` | `GET` | Get full PSGC dataset |
| | `/api/psgc/regions` | `GET` | List all Philippine Regions |
| | `/api/psgc/provinces` | `GET` | List all Philippine Provinces |
| | `/api/psgc/cities` | `GET` | List all Philippine Cities |
| | `/api/psgc/barangays`| `GET` | List all Philippine Barangays |
| **Education** | `/api/education` | `GET` | Courses, SHS Tracks, and TESDA data |
| **Health** | `/api/health` | `GET` | Vaccination and PhilHealth reference data |
| **Identity** | `/api/gender` | `GET` | Sex and Gender Identity options |
| **General** | `/api/reference` | `GET` | Civil Status, Nationality, etc. |
| **Utilities** | `/api/calculate` | `POST` | Project cost calculation utility |

---

## 🚢 Deployment

`dev-na-API` is ready for one-click deployment to **Vercel**. All endpoints are implemented as serverless functions for scalability and low latency.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
