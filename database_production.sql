-- AnchorahubBase Production Schema (Live)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. IDENTITATE VIZUALĂ & MULTI-TENANT
CREATE TABLE tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subdomain TEXT UNIQUE NOT NULL,
    brand_name TEXT NOT NULL,
    primary_color TEXT DEFAULT '#2c3e50',
    grid_id TEXT DEFAULT '1',
    logo_url TEXT,
    banner_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. UTILIZATORI & ACCES
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    tenant_id UUID REFERENCES tenants(id),
    full_name TEXT,
    is_admin BOOLEAN DEFAULT false,
    subscription_status TEXT DEFAULT 'active',
    subscription_end TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. CURSURI & MODULE (The Grid System)
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    title TEXT NOT NULL,
    description TEXT,
    bonus_desc TEXT, -- Căsuța de bonus NLP
    price_full DECIMAL(10,2),
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE modules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    content_url TEXT, -- PDF, Video, Doc
    is_paid BOOLEAN DEFAULT true,
    price_individual DECIMAL(10,2) DEFAULT 0,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. COMENZI & REALITATE FINANCIARĂ
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES profiles(id),
    course_id UUID REFERENCES courses(id),
    module_id UUID REFERENCES modules(id), -- Pentru plăți individuale
    amount DECIMAL(10,2) NOT NULL,
    status TEXT DEFAULT 'pending', -- pending, completed, failed
    smartbill_invoice_id TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. NOTIFICĂRI CNV
CREATE TABLE notification_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    trigger_days INT NOT NULL, -- ex: 15
    message_text TEXT NOT NULL, -- Textul CNV/NLP
    created_at TIMESTAMPTZ DEFAULT now()
);

-- INJECTARE DATE TEST (Onorăm eficiența)
INSERT INTO tenants (subdomain, brand_name, primary_color, grid_id)
VALUES ('traian', 'AnchorahubBase', '#2c3e50', '1');
