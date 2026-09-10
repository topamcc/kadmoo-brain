---
kadmoo_type: skill
status: approved
slug: campaign-brief
domain: ads
department: paid-media
name: אפיון קמפיין
description: תהליך קמפיין שמור — אפיון, פלטפורמה, אישורי מדיה וטקסט, הדמיה, קהל ואישור פרסום מסכם.
when_to_use: קמפיין חדש / לידים / "מה כדאי לפרסם" / הצעה לפרסום ממומן. לא ליווי קמפיין קיים (ads), לא אופטימיזציה (ppc-optimization).
tool_hints:
  - check_client_dna
  - scan_and_fill_site_data
  - get_site_info
  - resolve_offer_assets
  - list_brand_assets
  - list_site_keywords
  - get_crm_leads_summary
  - get_google_ads_summary
  - get_meta_ads_summary
  - get_social_status
  - get_connect_links
  - get_site_integrations_status
  - estimate_campaign_budget
  - suggest_campaign_headlines
  - suggest_campaign_descriptions
  - generate_ad_image
  - upsert_creative_request
  - launch_ad_draft
  - update_ads_campaign_budget
  - update_ads_campaign_status
  - create_ticket
  - browse_site_offers
  - get_meta_whatsapp_numbers
  - list_meta_lead_forms
  - list_landing_pages
  - check_campaign_readiness
  - estimate_campaign_outcomes
  - check_meta_copy_policy
  - ask_clarify
  - update_ad_draft
  - get_campaign_draft
---

# אפיון קמפיין

מחלקה: [[04-paid-media]] · קריאייטיב: [[03-creative]] · היררכיה: [[agency-hierarchy]] · בטיחות: [[ppc-write-safety-gates]] · API: [[google-ads-api-runtime-2026]] · [[meta-marketing-api-runtime-2026]]

## זרימה
1. DNA קודם (`check_client_dna`) — בלי שאלות מיותרות.
2. עד 3 שאלות רק על מה שחסר; שלוף נתונים במקביל.
3. התחל עבודה שמורה באמצעות `upsert_creative_request.campaign_json`: מוצר/שירות/דרושים, ההצעה, המטרה וקהל ראשוני. אפשר לשמור גם בלי פלטפורמה ובלי חיבור. שמור את מזהה העבודה.
4. כרטיס השלבים הוא מקור מצב האישורים: אפיון → פלטפורמה ויעד → קריאייטיב → טקסט חי → הדמיה → קהל מדויק. רק הלקוח מאשר; הסוכן מכין ומציע. בחירת הלקוח קודמת להמלצה.
5. לקריאת העבודה והגרסה: `get_campaign_draft`. לעריכת חלקים: `update_ad_draft.campaign_json` עם `revision`. העבר מדיה לכל מיקום, טקסטים מדויקים והגדרות קהל הניתנות לביצוע. שינוי מבטל את האישורים המושפעים בלבד.
6. חיבור חסר → `get_connect_links` / `get_site_integrations_status`; המשך להכין את החבילה ושמור אותה. חיבור החשבון אינו מפעיל פרסום אוטומטית.
7. לאחר כל האישורים, הלקוח בוחר בדיקת מוכנות בכרטיס ולאחריה "אשר ופרסם". אישור יחיד זה מכסה יצירה מושהית, אימות והפעלה. אין צורך בכרטיס הפעלה שני לעבודה זו.
8. קריאייטיב חסר → skill `creative`. סרטון או תמונה קיימים אינם מופקים מחדש לצורך הדמיה. טקסט חי מתוקן בנפרד מהטקסט המוטמע במדיה.
9. הבדל במצב חייב להיות ברור: טיוטה, חסומה, בפרסום, מושהית, ממתינה לבדיקה, פעילה. תוצאה לא ודאית דורשת בירור, ולא ניסיון יצירה נוסף.

## English workflow contract
Create a saved paid campaign workflow from the initial brief. Resolve known brand data and ask only for missing information. The client approves brief, platform/destination, creative, live copy, combined preview and executable audience settings. Autosave all progress. Read the current revision before every edit. The final publishing approval covers paused creation, verification and activation. Use exact approved assets and copy; disable content-changing automation. Missing accounts preserve the draft. Never infer consent, bypass a stage with a legacy tool or recreate a campaign whose publication outcome is uncertain.

## בחירת מבנה לפני כרטיס אישור

- Google Search/חיפוש → `google_campaign_type=search_ai_max`; בחירת Search נשמרת. נדרשים כתובת יעד, לפחות 3 כותרות ו-2 תיאורים; תמונה אינה תנאי ל-RSA. מעבירים את הטקסט המאושר ומכבים שכתוב והרחבת כתובת יעד שניתנים לשליטה.
- Google Performance Max → `google_campaign_type=performance_max`; נדרשים כתובת יעד, תמונה רחבה, תמונת marketing ריבועית, לוגו וסרטון מאושרים, כותרות קצרות וארוכות, תיאורים ומעקב המרות. בגרסה הזאת כל עבודה מייצגת הצעה אחת וקבוצת נכסים אחת; שינויים אוטומטיים בתוכן כבויים.
- Meta: מאשרים יעד לפני יצירה. CBO מתאים לסקייל של קריאייטיב מוכח; ABO מתאים למעבדת בדיקות. Cost Cap מוצע רק כשיש יעד עלות, חלון attribution מאומת והבנה שהוא עשוי להפחית ניצול תקציב.
- לפני אישור הפרסום מריצים בדיקת מוכנות חיה. הכרטיס מציג סוג קמפיין, יעד, חשבון, מטבע, תקציב, נכסים וקהל. אם חסר תנאי, מציגים מה חסר והעבודה נשארת שמורה. ב-PMax יש להכין גם סרטון מאושר למניעת הסתמכות על יצירה אוטומטית של הפלטפורמה.
