# Government Cyber Profession Capability Framework

This repository contains the codebase for the **Government Cyber Profession Capability Framework** website. It is designed to help cyber security professionals in government discover roles, skills, and learning resources to advance their careers.

## Features

-   **Role Explorer**: detailed profiles for 8 core cyber security roles, including career levels (Associate, Practitioner, Senior).
-   **Skills Matrix**: comprehensive list of skills mapped to roles.
-   **Learning Hub**: curated learning resources (certifications, courses, guidance) filterable by supplier type.
-   **Semantic Search**: search across roles, skills, and resources.
-   **Responsive Design**: optimized for desktop, tablet, and mobile devices.

## Tech Stack

-   **Frontend**: Next.js 15, React 19, Tailwind CSS v4.
-   **UI Components**: shadcn/ui (Radix UI).
-   **Icons**: Lucide React.
-   **Backend**: Python (FastAPI) - *Note: The current iteration is primarily a static frontend with hardcoded data for demonstration.*

## Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn or pnpm
-   Python 3.11+ (for backend components if needed)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/CapabilityLabs/cyber-framework.git
    cd cyber-framework
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    cd frontend
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

-   `frontend/app`: Next.js App Router pages and layouts.
-   `frontend/components`: Reusable UI components.
-   `frontend/data`: Static data for roles, skills, and learning resources.
-   `backend`: Python backend API (currently minimal/stubbed).

## Attribution

This project was built using the [i.ai Cookiecutter](https://github.com/i-dot-ai/cookiecutter-i-dot-ai) template as a starting point.
