import { NextResponse } from "next/server";
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

// Resolve the absolute path to the SQLite database file
const dbPath = path.resolve(process.cwd(), 'public/dua_main.sqlite');

export const GET = async () => {
    try {
        // Open the SQLite database connection
        const db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });
        
        console.log('Connected to the SQLite database.');
        
        const categories = await db.all('SELECT * FROM category');
        // await db.close();

        return NextResponse.json({categories});
    } catch (error) {
        console.error('Error connecting to SQLite database:', error.message);
        return NextResponse.error();
    }
};
