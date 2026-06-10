# 🏢 Tetiurka SaaS: B2B Architecture & Data Backend

## 📌 Project Overview
Tetiurka SaaS is a robust B2B Software-as-a-Service platform designed for the real estate and construction industry. It digitizes the process of customizing apartment standards for end-customers, automating pricing calculations, dynamic cart logic, and order management with electronic signature integration.

**My Role:** Data Architecture, Backend Logic, and Database Management.

---

## 🛠️ Tech Stack & Data Infrastructure
* **Runtime & Framework:** Node.js, Express.js
* **Database Engine:** PostgreSQL
* **Cloud & Storage:** Supabase (BaaS)
* **Architecture:** Single-Database Multi-Tenancy
* **Performance:** PgBouncer (Connection Pooling)
* **Security:** JWT Authentication, Role-Based Access Control (RBAC), bcrypt
<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" />
</p>
---

## 💡 Key Engineering & Data Solutions

### 1. Multi-Tenancy Architecture
Designed a scalable relational database structure allowing multiple construction companies (tenants) to operate securely within a single database instance. 
* Implemented a strict `tenant_id` foreign key policy across all core tables (Users, Apartments, Upgrades, Orders).
* Engineered backend middleware to intercept and filter all SQL queries based on the JWT payload, ensuring absolute data isolation between business clients.

### 2. AI-Ready Text Tokenization for Bulk Data Matching
Developed a custom data-processing algorithm for handling massive file uploads. 
* Created a fuzzy-matching logic using text tokenization (Regex cleaning, splitting, and scoring).
* The algorithm automatically analyzes uploaded image filenames and maps them to the correct product, category, and room entities in the database, significantly reducing manual data entry.

### 3. Connection Pooling & Transaction Security
* Eliminated connection leaks in a serverless cloud environment by configuring **PgBouncer** over transaction port 6543.
* Secured shopping cart integrity against frontend manipulation by moving all price calculations exclusively to the backend database queries.

### 4. Dynamic Data Extraction & Reporting
* Built SQL pipelines to aggregate monthly revenue and order volumes for Superadmin dashboards.
* Developed an on-the-fly JSON-to-CSV extraction tool with strict `UTF-8 with BOM` encoding to support Scandinavian characters (å, ä, ö) for external ERP and Excel analysis.

### 5. 3-Tier Architecture & Role-Based Access Control (RBAC)
Engineered a strict hierarchical access system to ensure secure operations across different user types:
* **User (Client):** Restricted access. Can only view their assigned apartment, configure upgrades, and finalize orders.
* **Admin (Tenant Manager):** Operational access. Manages apartment statuses, product catalogs, and exports CSV order reports specific to their company (`tenant_id`).
* **Superadmin (System Owner):** Global access. Controls system-wide configurations, creates new tenant accounts, and monitors cross-tenant database health.

### 6. Real-Time Data Analysis & Dynamic Dashboards
Designed real-time analytical queries to provide instant business insights and prevent data staleness.
* **Live Financial Aggregation:** Engineered backend SQL logic to instantly calculate and display tenant-specific KPIs (monthly revenue, order conversions, apartment statuses) upon dashboard load, eliminating the need for scheduled batch processing.
* **Dynamic Cart Valuation:** Implemented real-time cost calculation algorithms that immediately validate user selections against database rules (e.g., preventing duplicate installations in a single room) and return live pricing updates.

### 7. Decoupled Authentication & Dedicated Login Portals
Architected separate authentication flows and interfaces to isolate end-user traffic from administrative access.
* **Distinct Entry Points:** Created dedicated, separate login portals for B2C clients (end-users) and B2B administrators.
* **Secure Routing:** Implemented intelligent routing that automatically validates the user's role upon login and restricts them strictly to their isolated environment, minimizing the attack surface and risk of unauthorized access.

---

## 📂 Code Snippets (Showcase)
*Note: Due to the proprietary nature of this SaaS architecture, the full codebase is private. Below are selected conceptual snippets demonstrating the logic:*
* [SQL Schema / DB design](./code-snippets/database-schema-architecture.sql)
* [Bulk Upload Tokenization snippet](./code-snippets/bulk-upload-tokenization.js)
* [Multi-Tenancy Security Middleware](./code-snippets/multi-tenancy-middleware.js)

---
*Developed by Lukasz Tetiurka | Technical Business Analyst & Junior Data Engineer*
