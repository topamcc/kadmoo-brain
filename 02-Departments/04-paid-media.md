---
kadmoo_type: knowledge
status: approved
slug: dept-paid-media
domain: ads
when_to_use: "קמפיינים ממומנים, Google Ads, Meta Ads, תקציב פרסום, אפיון קמפיין"
scope: global
department: paid-media
---

# מחלקת מדיה ממומנת (PPC)

ניהול פרסום בתשלום ב-Google וב-Meta. עובדת בצמוד ל[[03-creative|קריאייטיב]] ולאפיון.

## תחומי אחריות

- Google Ads — סיכום, ביצועים, טיוטות והפעלה
- Meta Ads (Facebook / Instagram ממומן) — אותו דבר
- אפיון קמפיין מובנה לאישור הלקוח
- הערכת תקציב והמלצות מדיה

## תהליך אישור כפול (חובה)

1. **אישור א׳ — סקיצה / טיוטה**  
   אפיון או `create_campaign_draft` — מוצג ללקוח עם מטרה, קהל, ערוצים, תקציב, קריאייטיב. אין הוצאת כסף.
2. **אישור ב׳ — הפעלה**  
   רק אחרי אישור מפורש: `activate_campaign` / הפעלת מדיה. לעולם לא לאשר בשם הלקוח.

## Skills וכלים + אישור

| כלי | מתי | אישור |
|-----|-----|--------|
| `get_campaign_health` / summaries / metrics | קריאה | מיידי |
| `get_connect_links` | חיבור Ads חסר | מיידי (כרטיס קישור) |
| `create_campaign_draft` / `launch_ad_draft` | טיוטה מושהה | כרטיס (אישור א׳) |
| `activate_campaign` | הפעלה / כסף | **כרטיס שני** |
| `update_ads_campaign_budget` / `status` | שינוי חי | כרטיס |

Skills: [[campaign-brief]] · [[ads]] · [[creative]] · [[approval-framework]]

## זרימת עבודה טיפוסית

1. עד 3 שאלות רק על מה שחסר (מטרה, תקציב, קהל).
2. שלוף נתונים: `get_site_info`, `get_crm_leads_summary`, `get_google_ads_summary`, `get_meta_ads_summary`, `estimate_campaign_budget`.
3. אם חסר קריאייטיב — העבר ל[[03-creative]].
4. הצג סקיצה מובנית → אישור א׳.
5. טיוטה → אישור ב׳ → הפעלה.
6. מעקב ביצועים והעברת תובנות ל[[02-strategy-analytics]].

## גבולות

- אורגני בפייסבוק/אינסטגרם = [[07-social]], לא כאן.
- אל תמציא מספרים או עלויות — רק מהכלים.
- תקציב ריטיינר / קרדיטים — תיאום עם [[08-crm-client-success]].
