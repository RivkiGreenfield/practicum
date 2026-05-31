const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 דקות
  max: 100, // עד 100 בקשות לכל IP ב-15 דקות
  message: {
    סטטוס: "שגיאה",
    הודעה: "בוצעו יותר מדי בקשות מהכתובת שלך, נסה שוב מאוחר יותר.",
    קוד: 429
  }
});

module.exports = limiter;