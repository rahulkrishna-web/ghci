const fs = require('fs');
const path = require('path');

const targetDirs = ['src/components/eventivee', 'src/components/think'];
let totalChanged = 0;

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let newContent = content
        .replace(/initial=\{\{\s*opacity:\s*0\s*,\s*x:\s*-?\d+\s*\}\}/g, 'initial={{ opacity: 0 }}')
        .replace(/initial=\{\{\s*x:\s*-?\d+\s*,\s*opacity:\s*0\s*\}\}/g, 'initial={{ opacity: 0 }}')
        .replace(/whileInView=\{\{\s*opacity:\s*1\s*,\s*x:\s*0\s*\}\}/g, 'whileInView={{ opacity: 1 }}')
        .replace(/whileInView=\{\{\s*x:\s*0\s*,\s*opacity:\s*1\s*\}\}/g, 'whileInView={{ opacity: 1 }}')
        .replace(/animate=\{\{\s*opacity:\s*1\s*,\s*x:\s*0\s*\}\}/g, 'animate={{ opacity: 1 }}')
        .replace(/animate=\{\{\s*x:\s*0\s*,\s*opacity:\s*1\s*\}\}/g, 'animate={{ opacity: 1 }}');
        
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated ${file}`);
        totalChanged++;
      }
    }
  }
}

targetDirs.forEach(processDir);
console.log(`Total files updated: ${totalChanged}`);
