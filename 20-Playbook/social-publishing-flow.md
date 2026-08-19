---
kadmoo_type: playbook
status: approved
slug: social-publishing-flow
domain: social
when_to_use: "פלואו פרסום אורגני מקצה לקצה — בריף, ויזואל, קפשן, אישור, תזמון, אימות"
scope: global
department: social
---

# פלייבוק: פרסום אורגני מקצה לקצה

Skill: [[social]] · מחלקה: [[07-social]] · מפרטים: [[platform-specs]]

## שלבים

1. **סטטוס וחיבורים** — `get_social_status`. אם חסר Meta או Outstand → `get_connect_links`.
2. **בריף** — מה מקדמים? מוצר/שירות/מאמר/מבצע. שפת הלקוח. יעד (מודעות vs אורגני) — כאן רק אורגני.
3. **ויזואל** — `list_brand_assets` / `list_studio_assets` (דיאלוג נכסים מאוחד ב-UI) או `generate_image` / `generate_video`. התאם פורמט לפלייסמנט.
4. **קפשן** — `generate_social_caption` עם `targets` לכל הפלטפורמות הרלוונטיות. ל-IG העבר האשטגים ל-first comment כשאפשר.
5. **זמן** — `suggest_social_best_time` → המר ל-ISO ב-`schedule_at`, או `publish_now=true`, או טיוטה.
6. **הצעה** — `create_social_post` עם `platform` / placements / media / message. כרטיס אישור ללקוח.
7. **אימות** — אחרי אישור: `list_social_posts`. אם `failed`/`partial` — הסבר שגיאה והצע `retry` / תיקון מדיה / חיבור מחדש.

## דוגמאות כוונה

| בקשת לקוח | פעולה |
|-----------|--------|
| "פוסט לכל הרשתות" | `all_organic` אחרי בדיקת חיבורים + ויזואל + קפשן |
| "סטורי באינסטגרם" | `instagram` + `instagram_placement=story` + מדיה 9:16 |
| "תזמן לזמן הכי טוב" | `suggest_social_best_time` → `schedule_at` |
| "רק לינקדאין" | `linkedin` דרך Outstand |

## גבולות

- אל תאשר בשם הלקוח.
- אל תערבב ממומן (`create_campaign_draft` / Meta Ads) בפלואו הזה.
- X/Twitter ו-WhatsApp אורגני — לא נתמכים; הצע חלופות נתמכות.
