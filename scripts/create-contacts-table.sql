-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS (Row Level Security) if needed
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting new contacts
CREATE POLICY "Allow contact form submissions" ON contacts
  FOR INSERT WITH CHECK (true);
