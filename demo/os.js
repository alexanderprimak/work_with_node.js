const os = require('os');

console.log('Операционка', os.platform());
console.log('Архитектура процессора', os.arch());
console.log('Инфа процессоры', os.cpus());
console.log('Свободной памяти', os.freemem());
console.log('Всего  памяти', os.totalmem());
console.log('Домашняя директория', os.homedir());
console.log('Сколько система вкл', os.uptime());
