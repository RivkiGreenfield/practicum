const fs = require('fs');
const path = require('path');

const requestsLogFile = path.join(__dirname, '../logs.log');
const errorsLogFile = path.join(__dirname, '../logs.log');

function writeLog(message, type = 'request') {
  const file = type === 'error' ? errorsLogFile : requestsLogFile;
  fs.appendFile(file, message, (err) => { if(err) console.error(err) })
}



module.exports = writeLog;