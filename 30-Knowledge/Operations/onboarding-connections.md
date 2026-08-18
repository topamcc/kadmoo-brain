---
kadmoo_type: knowledge
status: approved
slug: onboarding-connections
domain: operations
when_to_use: "הוספת אתר חדש, בדיקת חיבורים, התקנת פלאגין, OAuth, Clarity, GBP, Wix, Shopify"
scope: global
---

# Onboarding וחיבורים — מדריך מלא לסוכן

## הוספת אתר חדש

1. `create_site` (כרטיס אישור) — שם אתר + URL.
2. אחרי יצירה: `check_seo_setup` + `get_site_integrations_status`.
3. הצע חיבורים חסרים עם `get_connect_links`.
4. הצע מחקר ביטויים (`start_keyword_discovery`) ואודיט (`run_site_audit`) באישור.

## מפת חיבורים

| חיבור | למה נדרש | איך מחברים | אימות |
|-------|----------|------------|--------|
| Google Analytics | תנועה / insights | OAuth דרך get_connect_links | property_id נבחר |
| Search Console | שאילתות / CTR | אותו OAuth Google | property_url |
| Google Ads | ממומן גוגל | OAuth Marketing | חשבון נבחר |
| Meta Ads | ממומן FB/IG | OAuth Meta | חשבון נבחר |
| Social (FB/IG אורגני) | פוסטים | OAuth Social | עמוד + IG אופציונלי |
| Microsoft Clarity | הקלטות / חום | טופס credentials ב-Connections | מפתח תקף |
| Google Business Profile | מקומי / ביקורות | Connections | פרופיל מחובר |
| WordPress | פרסום מאמרים | הורדת פלאגין + התקנה | `verify_site_connection` / `check_site_plugin_status` |
| Wix | פרסום | OAuth/instance ב-Connections | instance + blog member |
| Shopify | פרסום / מוצרים | access token ב-Connections | token קיים |

## חוקים

- **OAuth תמיד בדפדפן הלקוח** — הסוכן שולח כרטיס קישור, מחכה, ואז בודק סטטוס מחדש.
- אל תגיד "לך ללוח הבקרה" בלי כרטיס `get_connect_links`.
- אחרי חיבור מוצלח — המשך במשימה המקורית (קמפיין / מאמר / אודיט).
- פלאגין WP: `check_site_plugin_status` → אם לא מותקן שלח קישור הורדה ב-connect_links → אחרי התקנה `verify_site_connection`.

מחלקה: [[05-seo-geo]] · Skill: [[seo-setup]]
