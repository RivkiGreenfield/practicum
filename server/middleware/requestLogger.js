const writeLog = require('./logger');

function requestLogger(req, res, next) {
  const start = new Date();
  res.on('finish', () => {
    const log = `[${start.toLocaleString('he-IL', { hour12: false })}] בקשת ${req.method} - ${req.originalUrl} - ${res.statusCode} - ${res.statusCode < 400 ? 'תקין' : 'שגיאה'}\n`;
    writeLog(log, 'request');
  });
  next();
}

module.exports = requestLogger;