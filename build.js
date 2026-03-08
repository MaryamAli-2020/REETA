// build.js
// Reads env vars and injects them into index.html → dist/index.html

const fs = require('fs');
const path = require('path');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('❌ Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables.');
  process.exit(1);
}

// Read the source HTML
const src = path.join(__dirname, 'index.html');
let html = fs.readFileSync(src, 'utf-8');

// Replace placeholders
html = html.replace(/%%SUPABASE_URL%%/g, SUPABASE_URL);
html = html.replace(/%%SUPABASE_ANON_KEY%%/g, SUPABASE_ANON_KEY);

// Write to /dist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
console.log('✅ Built dist/index.html with injected environment variables.');