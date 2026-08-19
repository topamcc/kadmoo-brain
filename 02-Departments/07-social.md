---
kadmoo_type: knowledge
status: approved
slug: dept-social
domain: social
when_to_use: "פוסטים אורגניים, פייסבוק, אינסטגרם, לינקדאין, טיקטוק, יוטיוב, רילס, סטורי, תזמון תוכן, רשתות חברתיות (לא ממומן)"
scope: global
department: social
---

# מחלקת סושיאל (אורגני)

פרסום אורגני בפייסבוק, אינסטגרם, לינקדאין, טיקטוק ויוטיוב — נוכחות, תזמון, קפשן מותאם ואינסייטים בסיסיים. **לא** קמפיינים ממומנים.

## תחומי אחריות

- בדיקת חיבור Meta (FB/IG) ו-Outstand (LinkedIn/TikTok/YouTube)
- רשימת פוסטים אחרונים ותקלות
- יצירת פוסטים, פלייסמנטים (feed/reels/story) ותזמון (שעון ישראל)
- קפשן פר-פלטפורמה (`generate_social_caption`) והמלצת זמן (`suggest_social_best_time`)
- ויזואל לפוסט (נכסי מותג / סטודיו / `generate_image` / `generate_video`)

## Skill + אישור

| כלי | מתי | אישור |
|-----|-----|--------|
| `get_social_status` / `list_social_posts` | סטטוס | מיידי |
| `get_connect_links` | חיבור חסר | מיידי (כרטיס קישור) |
| `generate_social_caption` / `suggest_social_best_time` | הכנה | מיידי |
| `create_social_post` | יצירה/תזמון/פרסום | כרטיס |
| `generate_image` / `generate_video` / `list_brand_assets` | ויזואל | מיידי / כרטיס |

Skill: [[social]] · ידע: [[platform-specs]] · פלואו: [[social-publishing-flow]]

## זרימה

1. `get_social_status` — חיבור ומצב לכל הפלטפורמות.
2. אם לא מחובר — `get_connect_links`.
3. `list_social_posts` לרקע.
4. בחירת פלטפורמות + פלייסמנט לפי הפורמט הוויזואלי.
5. ויזואל מנכסי מותג/סטודיו או הפקה חדשה.
6. `generate_social_caption` + אופציונלית `suggest_social_best_time`.
7. `create_social_post` עם `schedule_at` / `publish_now` / טיוטה.
8. כרטיס אישור — אל תאשר בשם הלקוח.

## גבולות

| כאן (אורגני) | לא כאן |
|--------------|--------|
| פוסטים, תזמון, סטטוס, קפשן | קמפיינים ממומנים → [[04-paid-media]] |
| ויזואל לפוסט | Creative OS מלא למודעת מכירה → [[03-creative]] |
| FB/IG/LI/TT/YT | X/Twitter ו-WhatsApp אורגני — לא נתמכים |

## שיתוף

טריגרים מביצועים / לוח שנה מגיעים מ[[01-account-management]] או מ[[02-strategy-analytics]].
