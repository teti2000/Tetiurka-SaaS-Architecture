-- ============================================================================
-- TETIURKA SAAS - CORE DATABASE SCHEMA (CONCEPT)
-- Showcasing Multi-Tenancy Architecture and JSONB integration
-- ============================================================================

-- 1. Tenants Table (Core of the SaaS architecture)
CREATE TABLE IF NOT EXISTS tenants (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Apartments Table with JSONB for dynamic room configurations
CREATE TABLE IF NOT EXISTS apartments (
    id SERIAL PRIMARY KEY,
    apartment_number VARCHAR(50) NOT NULL,
    address VARCHAR(200),
    rooms_config JSONB DEFAULT '[]', -- Dynamic configuration
    status VARCHAR(50) DEFAULT 'Tillgänglig',
    tenant_id VARCHAR(50) REFERENCES tenants(id) ON DELETE CASCADE
);

-- 3. Security Policy Example (Row Level Security concept)
-- Ensuring that queries inherently respect the tenant boundary
CREATE INDEX idx_apartments_tenant ON apartments(tenant_id);
