# Kadmoo Brain

Vault של Obsidian — Second Brain למשרד הפרסום האוטונומי של קדמו.

התוכן כאן מסונכרן לסוכן (Agent) דרך GitHub Actions. **רק מסמכים עם `status: approved` נכנסים לסנכרון.**

## מבנה התיקיות

| תיקייה | תפקיד |
|--------|--------|
| `00-Inbox/` | קליטה מהירה לפני מיון |
| `01-Agency/` | הגדרות סוכנות (`agency-config`) — פרסונה, טון, כלים |
| `02-Departments/` | מבנה ארגוני ומחלקות — מסונכרן כ-knowledge |
| `10-Skills/` | Skills לסוכן — מתי להפעיל ומה לעשות |
| `20-Playbook/` | עקרונות ונהלים מאושרים |
| `30-Knowledge/` | ידע מקצועי (אסטרטגיה, Creative OS, SEO-GEO, ויז׳ואל וכו׳) |
| `40-Clients/` | הערות לפי לקוח / אתר |
| `50-Agent-Learnings/` | כתיבה חוזרת מהסוכן — למידה לפני קידום ל־Playbook |
| `90-Archive/` | קבצים ישנים שאינם לסינכרון |
| `_templates/` | תבניות Frontmatter לכל סוג מסמך |

## חוזה Frontmatter

כל מסמך שמיועד לסנכרון חייב לפתוח ב־YAML frontmatter:

```yaml
---
kadmoo_type: agency-config   # agency-config | skill | playbook | knowledge | client-note
status: draft                # draft | approved — רק approved מסונכרן
slug: optional-stable-id     # מזהה יציב (אופציונלי)
domain: strategy             # תחום ידע (אופציונלי)
when_to_use: "מתי להשתמש"    # בעיקר ל־skill / playbook
tool_hints:                  # רמזי כלים לסוכן (אופציונלי)
  - tool_name
scope: global                # global | site
site_slug: client-slug       # כש־scope: site
site_id: uuid-optional       # מזהה אתר בקדמו (אופציונלי)
---
```

### שדות חובה

- **`kadmoo_type`** — סוג המסמך:
  - `agency-config` — הגדרת סוכנות / פרסונה
  - `skill` — יכולת מופעלת לפי הקשר
  - `playbook` — עקרון או נוהל עבודה
  - `knowledge` — ידע מקצועי לשימוש חוזר
  - `client-note` — הערה ספציפית ללקוח
- **`status`** — `draft` (לא מסונכרן) או `approved` (מסונכרן לסוכן)

### שדות אופציונליים

| שדה | משמעות |
|-----|--------|
| `slug` | מזהה יציב לסנכרון / הפניה |
| `domain` | תחום (למשל strategy, creative, visual) |
| `when_to_use` | תיאור מתי להפעיל את המסמך |
| `tool_hints` | רשימת YAML של רמזי כלים |
| `scope` | `global` (כל הסוכנות) או `site` (לקוח בודד) |
| `site_slug` | slug של האתר כש־`scope: site` |
| `site_id` | UUID של האתר במערכת קדמו |

## תהליך עבודה מומלץ

1. טיוטה ב־`00-Inbox/` או ישירות בתיקייה המתאימה עם `status: draft`
2. עריכה ומעבר ל־`status: approved`
3. Push ל־`main` / `master` → lint (שגיאות חוסמות) → סנכרון ל־Kadmoo
4. למידות מהסוכן נכנסות ל־`50-Agent-Learnings/` ואז מקודמות ל־Playbook עם `approved`

לינט מקומי: `node scripts/lint-vault.mjs` (שגיאות = יציאה 1; `--strict` גם על אזהרות).

קטלוג הכלים הוא ארטיפקט שנוצר ממקור האפליקציה, כולל החוזים המיובאים של סושיאל וסטודיו. לפני שחרור משותף הריצו `node scripts/extract-known-tools.mjs <application-checkout>` על גרסת האפליקציה המיועדת לפריסה ושמרו את `scripts/known-tools.json`. אין לערוך את הרשימה ידנית. להרצת לינט מול אותו מקור הגדירו `KADMOO_APP_ROOT`; שינוי במקור ללא רענון הקטלוג יכשיל את הבדיקה. CI של Brain בודק את הארטיפקט השמור; הוא אינו טוען שהאפליקציה כבר נפרסה. זמינות הכלי בריצה עדיין תלויה בקטלוג ובהפעלה המדורגת בסביבה.

Skills מאושרים עם `scope: site` חסומים בלינט עד אימות אכיפת ההפרדה בריצה. מידע לקוח נשאר ב־client-note; אין להבטיח Skill ייחודי לאתר על סמך שדה scope בלבד.
