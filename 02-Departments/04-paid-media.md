---
kadmoo_type: knowledge
status: approved
slug: dept-paid-media
name: מחלקת מדיה ממומנת
domain: ads
when_to_use: "קמפיינים ממומנים, Google Ads, Meta Ads, תקציב פרסום, אפיון קמפיין"
scope: global
department: paid-media
aliases:
  - 04-paid-media
---

# מחלקת מדיה ממומנת (PPC)

ניהול פרסום בתשלום ב-Google וב-Meta. עובדת בצמוד ל[[03-creative|קריאייטיב]] ולאפיון.

## תחומי אחריות

- Google Ads — סיכום, ביצועים, טיוטות והפעלה
- Meta Ads (Facebook / Instagram ממומן) — אותו דבר
- אפיון קמפיין מובנה לאישור הלקוח
- הערכת תקציב והמלצות מדיה
- **אופטימיזציה לקמפיינים חיים** — אבחון, רענון, תקציבים ובנייה מחדש לפי [[ppc-optimization]]

## מנדט האופטימיזציה — מי מאבחן ומה חובה

- **המאבחן**: מנוע האבחון הדטרמיניסטי (`diagnose_campaign_optimization`) — לא תחושת בטן. המחלקה מסבירה את הפסק, לא עוקפת אותו.
- **ראיות חובה לפני כל המלצה**: עוגן תקציב (`get_ads_budget_context`), נתונים ברמת מודעה/נכס, נתח חשיפות בגוגל, תדירות ושחיקת CTR במטא. אין נתונים → אומרים מה חסר ומתי חוזרים.
- **אסור להמליץ בלי נתונים**: רענון תמונה כשקליקים תקינים ולידים לא מגיעים (בעיית יעד), תוספת תקציב כש-rank-lost גבוה (מתבזבזת), עריכת קמפיין בלמידה, שני מנופים באותו תור.
- **הכל בכרטיס אישור** — כסף לא זז בלי הלקוח, בשום רמת אוטונומיה. הידע: [[google-ads-rules]] · [[meta-ads-rules]] · [[creative-refresh-ladder]] · [[budget-rulebook]]

## אישור פרסום סופי

בעבודה חדשה (version=2), האפיון, הנכסים והטקסט נאספים בטיוטה משותפת. הלקוח רואה תצוגה מדויקת עם קהל, יעד ותקציב ומאשר פעם אחת. האישור מכסה יצירה מושהית, אימות והפעלה של אותה גרסה בלבד. תיקון מבטל אישור קודם. בעבודה ישנה (version=1) נשמרים אישורי השלבים שמחזירה המערכת. לעולם אין לאשר בשם הלקוח.

## Skills וכלים + אישור

| כלי | מתי | אישור |
|-----|-----|--------|
| `get_campaign_health` / summaries / metrics | קריאה | מיידי |
| `get_connect_links` | חיבור Ads חסר | מיידי (כרטיס קישור) |
| `upsert_creative_request.campaign_json` / `update_ad_draft.campaign_json` | טיוטה משותפת | שמירה ללא פרסום |
| `launch_ad_draft` | יצירה, אימות והפעלה | כרטיס סופי לגרסה ולתקציב |
| `update_ads_campaign_budget` / `status` | שינוי חי | כרטיס |
| `diagnose_campaign_optimization` / `plan_ads_budget_allocation` / `get_ads_budget_context` | אבחון ועוגן תקציב | מיידי |
| `get_ad_level_performance` / `get_asset_performance` / `get_search_terms` | ראיות גרנולריות | מיידי |
| `update_campaign_creative` / `targeting` / `keywords` | שינוי חי בקמפיין | כרטיס |
| `apply_campaign_recommendation` | המלצת פלטפורמה | כרטיס |
| `rebuild_campaign` | בנייה מחדש (ניוד תקציב) | **כרטיס; הפעלת החדש בנפרד** |

Skills: [[campaign-brief]] · [[ads]] · [[ppc-optimization]] · [[creative]] · [[approval-framework]]

## זרימת עבודה טיפוסית

1. עד 3 שאלות רק על מה שחסר (מטרה, תקציב, קהל).
2. שלוף נתונים: `get_site_info`, `get_crm_leads_summary`, `get_google_ads_summary`, `get_meta_ads_summary`, `estimate_campaign_budget`.
3. אם חסר קריאייטיב — העבר ל[[03-creative]].
4. השלם טיוטה ותצוגה מדויקת; בקש אישור עלות רק אם חסרה מדיה בתשלום.
5. אישור פרסום סופי אחד → יצירה מושהית → אימות → הפעלה → קריאת מצב מהפלטפורמה.
6. מעקב ביצועים והעברת תובנות ל[[02-strategy-analytics]].

## גבולות

- אורגני בפייסבוק/אינסטגרם = [[07-social]], לא כאן.
- אל תמציא מספרים או עלויות — רק מהכלים.
- תקציב ריטיינר / קרדיטים — תיאום עם [[08-crm-client-success]].

טיוטה חדשה נשמרת באמצעות `upsert_creative_request.campaign_json` גם ללא חיבור לחשבון פרסום. `create_campaign_draft` הוא מסלול ישן להצעת פרסום ואינו כלי השמירה של שיחה חדשה. בכלי הצעת קופי מעבירים את הבריף הנוכחי ואת סוג הקמפיין; פרטי הבקשה המפורשים קודמים לדוגמאות מקמפיינים קודמים.
