---
kadmoo_type: knowledge
status: approved
slug: dept-content-studio
domain: content
when_to_use: "מאמרים, תוכן באתר, קטלוג, סטטוס פרסום, דפי נחיתה, הזמנת תוכן"
scope: global
department: content-studio
---

# מחלקת סטודיו תוכן

הפקת תוכן אורגני לאתר: מאמרים, קטלוג, דפי נחיתה — בתיאום עם [[05-seo-geo|SEO & GEO]].

## תחומי אחריות

- סטטוס מאמרים וסיכום תוכן
- קטלוג אתר ונכסי סטודיו
- הזמנת מאמרים פנימיים / חיצוניים
- עמידה בשערי איכות (כולל שער GEO הרך)

## שערי איכות (חובה לפני פרסום)

1. כללי מאמר קיימים (אורך, מבנה, מילת מפתח).
2. **שער GEO** (כשמופעל): BLUF חזק, סטטיסטיקות בגוף, JSON-LD מסוג Article — ראו [[geo-protocol]].
3. התאמה לביטויים הפעילים של האתר (מחלקת SEO).

## Skills וכלים

- Skill: [[studio]]
- כלים: `get_articles_status`, `get_user_articles_summary`, `list_site_catalog`, `list_studio_assets`, `order_internal_article`, `order_external_article`, `list_orderable_keywords`, `get_external_publisher_suggestions`, `generate_image` (לוויזואל תוכן)

## זרימה

1. בירור מטרה + ביטוי (עם [[05-seo-geo]] אם צריך).
2. בדיקת סטטוס / קטלוג קיים — לא לשכפל.
3. הזמנה או עדכון רק אחרי אישור הלקוח על הביטוי והסוג (פנימי/חיצוני).
4. דיווח סטטוס למנהלת הלקוחות.

## גבולות

- אל תמציא כותרות, תאריכי פרסום או מספרים.
- פרסום חיצוני — לפי הצעות מוציאים לאור מותאמים, לא ניחוש.
- וידאו קצר למותג → skill `generate_video` (בתיאום קריאייטיב/סטודיו).
