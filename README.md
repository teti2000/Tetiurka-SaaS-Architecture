
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

---

## 📂 Code Snippets (Showcase)
*Note: Due to the proprietary nature of this SaaS architecture, the full codebase is private. Below are selected conceptual snippets demonstrating the logic:*
* [Link to SQL Schema / DB design]
* [Link to Bulk Upload Tokenization snippet]
* [Link to Multi-Tenancy Query example]

---
*Developed by Lukasz Tetiurka | Data Analyst & Junior Data Engineer*# 🏢 Tetiurka SaaS: B2B Architecture & Data Backend

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

---

## 📂 Code Snippets (Showcase)
*Note: Due to the proprietary nature of this SaaS architecture, the full codebase is private. Below are selected conceptual snippets demonstrating the logic:*
* [Link to SQL Schema / DB design]
* [Link to Bulk Upload Tokenization snippet]
* [Link to Multi-Tenancy Query example]

---
*Developed by Lukasz Tetiurka | Data Analyst & Junior Data Engineer*
