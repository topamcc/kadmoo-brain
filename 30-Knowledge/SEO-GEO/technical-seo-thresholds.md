---
kadmoo_type: knowledge
status: approved
slug: technical-seo-thresholds
domain: seo
when_to_use: "פרשנות אודיט טכני — Core Web Vitals, כותרות, קנוניקל, hreflang"
scope: global
department: seo-geo
---

# ספי SEO טכני — איך מפרשים ממצא

פרוטוקול: [[geo-protocol]] · סקיל: [[audit]]

## Core Web Vitals

- LCP < 2.5s · INP < 200ms · CLS < 0.1
- חריגה היא ממצא חוויית משתמש לתעדוף; אינה הוכחה לחסימת דירוג או להיעדר אינדוקס. יש לציין אם זו מדידת מעבדה או נתוני משתמשים ומה היקף המדידה.

## On-page

- כותרת ייחודית, תמציתית ותיאורית. טווחי תווים הם המלצות תצוגה, לא מגבלת Google קשיחה.
- תיאור שימושי ותואם לתוכן; אורך משוער אינו תנאי תקינות או הבטחה להצגת הקטע.
- כותרת ראשית ברורה והיררכיה סמנטית. אין להציג מספר H1 לבדו כהוכחת תקלה בדירוג.
- קנוניקל בהתאם לגרסה המועדפת ולכוונת האתר; אין לדרוש קנוניקל עצמי כשאיחוד כפילויות מכוון.

## hreflang (אתרים דו-לשוניים he/en)

- הדדיות: A מצביע ל-B ו-B ל-A.
- `x-default` הוא המלצה לדף ברירת מחדל מתאים, לא חובה לכל אתר.
- לבדוק שקנוניקל תואם לגרסת השפה ולכוונה; אין להסיק סתירה בלי לבדוק את התוכן והחלופות.

## סדר תיקון

1. נגישות לסריקה (חסימות, noindex, בוטים)
2. טכני (מהירות, קנוניקל, סכמה)
3. On-page
4. תוכן
5. קישורים

אין עמודי יתום. עוגנים תיאוריים, לא "לחצו כאן". מבנה רכזת-וחישורים.

פורמט ממצא: בעיה / השפעה / ראיה / תיקון / עדיפות.

מקורות מקצועיים: [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals), [כותרות](https://developers.google.com/search/docs/appearance/title-link), [גרסאות שפה](https://developers.google.com/search/docs/specialty/international/localized-versions), [robots.txt](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec).
