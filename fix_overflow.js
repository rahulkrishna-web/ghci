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
      
      let newContent = content.replace(/className="([^"]*overflow-x-auto[^"]*snap-x[^"]*)"/g, (match, classes) => {
        if (classes.includes('md:overflow-visible')) return match;
        // Also avoid adding py-4 -my-4 multiple times if we run script again, though we check md:overflow-visible
        let newClasses = classes.replace('overflow-x-auto', 'overflow-x-auto md:overflow-visible py-4 -my-4');
        return `className="${newClasses}"`;
      });
      
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
