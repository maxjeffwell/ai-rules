import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env' });

// Configure WebSocket for Node.js environment
neonConfig.webSocketConstructor = ws;

// Create connection pool with your Neon database
const pool = new Pool({ connectionString: process.env.DATABASE_URL! });

// Export Drizzle instance
export const db = drizzle(pool);
