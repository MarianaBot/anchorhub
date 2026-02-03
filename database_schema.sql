-- AnchorahubBase SQL Schema
CREATE TABLE tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    subdomain TEXT UNIQUE NOT NULL,
    config JSONB DEFAULT '{}'
);

CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    title TEXT NOT NULL,
    description TEXT,
    bonus_text TEXT
);

CREATE TABLE modules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID REFERENCES courses(id),
    title TEXT NOT NULL,
    is_paid BOOLEAN DEFAULT false,
    content_url TEXT
);
