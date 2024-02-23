import { NextResponse } from "next/server";
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

// Resolve the absolute path to the SQLite database file
const dbPath = path.resolve(process.cwd(), 'public/dua_main.sqlite');

export const GET = async ({ query }) => {
  try {
    // Open the SQLite database connection
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });

    console.log('Connected to the SQLite database.');

    // Extract cat_id from query parameters
    const { cat_id } = query;

    // Query to retrieve sub-categories by cat_id
    const categories = await db.all('SELECT * FROM sub_category WHERE cat_id = ?', cat_id);

    // Close the database connection
    await db.close();

    return NextResponse.json({ categories });
  } catch (error) {
    console.error('Error connecting to SQLite database:', error.message);
    return NextResponse.error();
  }
};
