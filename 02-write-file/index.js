const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname,'text.txt'), 'hello RS', (err) => {
    if (err) throw err 
       console.log('Создан новый файл text.txt')
    }
    
)
