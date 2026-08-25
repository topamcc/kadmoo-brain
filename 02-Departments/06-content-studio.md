---
kadmoo_type: knowledge
status: approved
slug: dept-content-studio
name: מחלקת סטודיו תוכן
domain: content
when_to_use: "מאמרים, תוכן באתר, קטלוג, סטטוס פרסום, דפי נחיתה, הזמנת תוכן"
scope: global
department: content-studio
aliases:
  - 06-content-studio
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

## Skills וכלים + אישור

| כלי | מתי | אישור |
|-----|-----|--------|
| `get_articles_status` / `list_articles_pending_approval` | סטטוס | מיידי |
| `approve_article` | אישור מאמר ממתין | כרטיס (רק הלקוח) |
| `order_internal_article` | הזמנת מאמר | מילולי |
| `update_article_content` / `regenerate_*` | עריכה | כרטיס |
| `create_landing_page` / `publish_landing_page` / `unpublish_landing_page` | דפי נחיתה | כרטיס |
| `generate_image` / `generate_video` | ויזואל | מיידי / כרטיס לווידאו |

Skills: [[studio]] · [[landing]]

## זרימה

1. בירור מטרה + ביטוי (עם [[05-seo-geo]] אם צריך).
2. בדיקת סטטוס / קטלוג קיים — לא לשכפל.
3. הזמנה או עדכון רק אחרי אישור הלקוח על הביטוי והסוג (פנימי/חיצוני).
4. דיווח סטטוס למנהלת הלקוחות.

## גבולות

- אל תמציא כותרות, תאריכי פרסום או מספרים.
- פרסום חיצוני — לפי הצעות מוציאים לאור מותאמים, לא ניחוש.
- וידאו קצר למותג → skill `generate_video` (בתיאום קריאייטיב/סטודיו).
