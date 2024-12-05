const db = require("better-sqlite3")
const sql = new db('auth.db')
sql.exec(`drop table if exists users`)
sql.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        surname TEXT NOT NULL,
        login TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        attempts INTEGER DEFAULT 0,
        time INTEGER DEFAULT 0
    )
`)

sql.exec(`drop table if exists session`)

sql.exec(`
    CREATE TABLE IF NOT EXISTS session(
        id TEXT PRIMARY KEY,
        user_id INTEGER,
        expires INTEGER
    )    
`)