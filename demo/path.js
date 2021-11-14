const path = require('path');

console.log('Name file', path.basename(__filename));
console.log('Dir name', path.dirname(__filename));
console.log('Расширение файла', path.extname(__filename));
console.log('parce', path.parse(__filename));

console.log(path.join(__dirname, 'server', 'index.html'));
