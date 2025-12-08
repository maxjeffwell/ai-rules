import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

// Load .env explicitly
config({ path: '.env' });

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
