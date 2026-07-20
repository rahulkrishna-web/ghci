const fs = require('fs');
const path = require('path');

const targetDirs = ['src/components/eventivee', 'src/components/think'];
let totalChanged = 0;

function processFiles() {
  targetDirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      if (!file.endsWith('.tsx')) return;
      const fullPath = path.join(dir, file);
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We will match blocks of `<motion.div ... >` and check if they contain `key={` or `className=` with `bg-` or `border` or `card`.
      // It's safer to just replace `initial={{ opacity: 0, y: <something> }}` with `initial={{ opacity: 0 }}`
      // and `whileInView={{ opacity: 1, y: 0 }}` with `whileInView={{ opacity: 1 }}`
      // but only if the block looks like a card.
      
      // Let's use a regex to find all <motion.div ... > up to the closing >
      let newContent = content.replace(/<motion\.div[^>]*>/g, (match) => {
        // Only target if it has key={ or looks like a card (bg-, border, p-) or is part of a mapped array
        const isCardLike = match.includes('key={') || match.includes('bg-') || match.includes('border') || match.includes('shadow') || match.includes('card');
        
        if (isCardLike) {
          let updated = match
            .replace(/initial=\{\{\s*opacity:\s*0\s*,\s*y:\s*-?\d+\s*\}\}/g, 'initial={{ opacity: 0 }}')
            .replace(/whileInView=\{\{\s*opacity:\s*1\s*,\s*y:\s*0\s*\}\}/g, 'whileInView={{ opacity: 1 }}')
            .replace(/initial=\{\{\s*y:\s*-?\d+\s*,\s*opacity:\s*0\s*\}\}/g, 'initial={{ opacity: 0 }}')
            .replace(/whileInView=\{\{\s*y:\s*0\s*,\s*opacity:\s*1\s*\}\}/g, 'whileInView={{ opacity: 1 }}')
            // also handle scale if there's any? user said "slide in top" which means y translation.
            .replace(/,\s*y:\s*-?\d+/g, (yMatch) => {
               // if it's inside an initial or whileInView object
               return '';
            });
            
          // A safer specific replace:
          updated = updated.replace(/initial=\{\{\s*opacity:\s*0\s*,\s*y:\s*-?\d+\s*\}\}/, 'initial={{ opacity: 0 }}');
          updated = updated.replace(/whileInView=\{\{\s*opacity:\s*1\s*,\s*y:\s*0\s*\}\}/, 'whileInView={{ opacity: 1 }}');
          
          return updated;
        }
        return match;
      });

      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated ${file}`);
        totalChanged++;
      }
    });
  });
  console.log(`Total files updated: ${totalChanged}`);
}
processFiles();
