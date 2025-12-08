import { config } from 'dotenv';
import { db } from './db';
import { sql } from 'drizzle-orm';

// Load environment variables
config({ path: '.env' });

async function testConnection() {
  try {
    console.log('Testing Neon + Drizzle connection...\n');

    // Test 1: Basic connection
    const result = await db.execute(sql`SELECT current_database(), current_user, version()`);
    console.log('✅ Connection successful!');
    console.log('Database:', result.rows[0].current_database);
    console.log('User:', result.rows[0].current_user);
    console.log('PostgreSQL version:', result.rows[0].version.split(' ')[0], result.rows[0].version.split(' ')[1]);

    // Test 2: List existing tables
    console.log('\n📋 Existing tables in your database:');
    const tables = await db.execute(sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);
    tables.rows.forEach((row: any) => {
      console.log('  -', row.table_name);
    });

    console.log('\n✨ Drizzle ORM is successfully configured with your Neon database!');

  } catch (error) {
    console.error('❌ Connection failed:', error);
    process.exit(1);
  }

  process.exit(0);
}

testConnection();
