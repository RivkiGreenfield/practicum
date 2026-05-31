const writeLog = require('./logger');

const statusMessages = {
  400: 'בקשה שגויה - המשתמש שלח נתונים לא תקינים',
  401: 'לא מחובר',
  403: 'אין הרשאה',
  404: 'לא נמצא',
  500: 'שגיאת צד סרבר'
};

function errorHandler(err, req, res, next) {
  const now = new Date();
  const status = err.status || 500;
  const code = err.code || status;
  // השתמש בהודעה מהטבלה אם אין הודעה מותאמת
  const message = err.message || statusMessages[status] || 'שגיאה לא ידועה';

  const log = `[${now.toLocaleString('he-IL', { hour12: false })}] ${req.method} ${req.originalUrl} - ${status} - ${message}\n`;
  writeLog(log, 'error');

  res.status(status).json({
    סטטוס: "שגיאה",
    הודעה: message,
    קוד: code
  });
}
module.exports = errorHandler;